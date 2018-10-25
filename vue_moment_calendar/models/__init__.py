# Core Data model classes.
from google.appengine.ext import ndb


class Model(ndb.Model):

    """ A base model class, should never be instantiated directly, but
        should be inherited from by all of our models.
    """

    created_at = ndb.DateTimeProperty(auto_now_add=True)
    modified_at = ndb.DateTimeProperty(auto_now=True)

    def serialize(self):

        """ Returns a JSON-safe representation of the current model instance.
        """
        packed = self.to_dict()
        packed['id'] = self.key.urlsafe()
        return packed

    @classmethod
    def inflate_key(cls, key_str):

        """ Inflates the passed keystring to a full NDB Key and returns it.
        """
        return ndb.Key(urlsafe=key_str)


__all__ = ['user', 'event', 'day']
