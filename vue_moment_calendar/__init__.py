from flask import Flask

app = Flask(__name__, template_folder='assets/static')

import vue_moment_calendar.views
