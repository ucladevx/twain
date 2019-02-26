from flask_login import UserMixin 
from mongoengine import Document, StringField
import json

class User(UserMixin, Document):
    meta = {'collection': 'db-users'}
    first_name = StringField(max_length = 30)
    last_name = StringField(max_length = 50)
    email = StringField(max_length=30)

class Response:
    def __init__(self, code, message):
        self.response_code = code
        self.response_message = message 
    
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

"""
class Credential(Document):
    meta = {'collection': 'db-credentials'}
"""
