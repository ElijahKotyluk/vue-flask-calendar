# User request handlers.
from flask import jsonify, request
from vue_moment_calendar import app
from ..models.user import User


class UserException(Exception):
    pass


@app.route('/users')
def list_users():
    results = User.query().fetch(10)
    return jsonify([x.serialize() for x in results])


@app.route('/user', methods=['POST'])
def create_user():
    if not request.is_json:
        return (jsonify(UserException('Malformed request')), 400)

    user_props = request.get_json()

    existing_user = User.query(User.username == user_props['username']).get()

    if existing_user is not None:
        return (jsonify(UserException("A user with the username %(username)s already exists." % user_props)), 409)

    new_user = User(**user_props)
    new_user.put()

    return jsonify(new_user.serialize())


@app.route('/user/<user_id>', methods=['GET', 'PATCH', 'DELETE'])
def modify_user(user_id):

    user_key = User.inflate_key(user_id)
    user = user_key.get()

    if user is None:
        return(jsonify(UserException('User does not exist.')), 404)

    elif request.method == 'PATCH':
        # Update requested user properties, then store and return the user.
        for prop, value in request.get_json().iteritems():
            setattr(user, prop, value)

        user.put()

    elif request.method == 'DELETE':
        user_key.delete()

    return jsonify(user.serialize())
