from flask import Flask

app = Flask(__name__, template_folder='assets/static')

import vue_flask_calendar.views
import vue_flask_calendar.handlers
