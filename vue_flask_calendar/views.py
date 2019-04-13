# Static app views.

from flask import render_template
from vue_flask_calendar import app

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/404')
def not_found():
    return render_template('404.html')
