# Event request handlers.
from flask import jsonify, request
from vue_flask_calendar import app
from ..models.event import Event


class EventException(Exception):
    pass


@app.route('')
