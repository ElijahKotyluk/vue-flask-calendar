# Event request handlers.
from flask import Flask, jsonify, request
from vue_moment_calendar import app
from ..models.event import Event


class EventException(Exception):
    pass


@app.route('')
