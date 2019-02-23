from flask_login import UserMixin 
from mongoengine import Document, StringField

class User(UserMixin, Document):
    meta = {'collection': 'db-users'}
    first_name = StringField(max_length = 30)
    last_name = StringField(max_length = 50)
    email = StringField(max_length=30)

"""
class Credential(Document):
    meta = {'collection': 'db-credentials'}
"""