# Event data models.

from google.appengine.ext import ndb
from . import Model


class Event(Model):

    """ An event on the calendar.
    """

    title = ndb.StringProperty()
    description = ndb.StringProperty()
    date =  ndb.DateProperty()
    time = ndb.TimeProperty()
    deleted = ndb.BooleanProperty(default=False)
