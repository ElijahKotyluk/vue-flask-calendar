# Event request handlers.
from flask import jsonify, request
from vue_moment_calendar import app
from ..models.event import Event


class EventException(Exception):
    pass


@app.route('/events')
def list_events():
    results = Event.query().fetch(10)
    return jsonify([x.serialize() for x in results])


@app.route('/event', methods=['POST'])
def create_event():
    if not request.is_json:
        return (jsonify(EventException('Malformed request.')), 400)

    event_props = request.get_json()

    new_event = Event(**event_props)
    new_event.put()

    return jsonify(new_event.serialize())
