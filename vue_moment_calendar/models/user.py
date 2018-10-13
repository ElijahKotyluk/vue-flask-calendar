# User data models.
from google.appengine.ext import ndb
from . import Model


class User(Model)

    ''' A user of the Calendar.
    '''

    email = ndb.StringProperty()
    username = ndb.StringProperty()
    password = ndb.StringProperty()
