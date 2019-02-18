# Event request handlers.
from flask import jsonify, request
from vue_moment_calendar import app
from ..models.event import Event
from datetime import datetime

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
    print event_props

    date = event_props['date']

    event_props['date'] = datetime.strptime(date, "%Y-%m-%dT%H:%M:%S.%fZ")
    print event_props['date']

    new_event = Event(**event_props)
    new_event.put()

    return jsonify(new_event.serialize())


@app.route('/event/<event_id>', methods=['GET', 'PATCH', 'DELETE'])
def modify_event(event_id):

    event_key.inflate_key(event_id)
    event = event_key.get()

    if event is None:
        return(jsonify(EventException('Event does not exist.')), 404)

    elif request.method == 'PATCH':
        # Update requested event properties, then store the event.
        for prop, value in request.get_json().iteritems():
            setattr(event, prop, value)

        event.put()

    elif request.method == 'DELETE':
        event_key.delete()

    return jsonify(event.serialize())
