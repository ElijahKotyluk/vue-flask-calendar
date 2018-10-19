# Event data models.

from google.appengine.ext import ndb
from . import Model


class Event(Model)

    """ An event on the Calendar.
    """

    id = ndb.KeyProperty()
    title = ndb.StringProperty()
    description = ndb.StringProperty()
    deleted = ndb.BooleanProperty(default=False)
    date = ndb.DateProperty()
    time = ndb.TimeProperty()
