# Day data models.

from google.appengine.ext import ndb
from . import Model
from event import Event


class Day(Model):

    ''' A day on the calendar.
    '''

    events = ndb.KeyProperty(repeated=True, kind=Event)


    def add_event(self, event_key):

        ''' Add event_key to list of events.
        '''

        if event_key not in self:
            self.events.append(event_key)


    def remove_event(self, event_key):

        ''' Remove event_key from list of events.
        '''

        if event_key in self.events:
            self.events.remove(event_key)
