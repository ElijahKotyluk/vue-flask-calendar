# Event request handlers.
from flask import jsonify, request
from vue_moment_calendar import app
from ..models.day import Day


class DayException(Exception):
    pass


@app.route('/days')
def list_days():
    results = Day.query().fetch(31)
    return jsonify([x.serialize() for x in results])


@app.route('/day', methods=['POST'])
def create_day():
    if not request.is_json():
        return (jsonify(DayException('Malformed request.')), 400)

    day_props = request.get_json()

    new_day = Day(**day_props)
    new_day.put()

    return jsonify(new_day.serialize())
