from flask import jsonify
from flask_login import UserMixin 
from mongoengine import Document, StringField

class User(UserMixin, Document):
    meta = {'collection': 'db-users'}
    first_name = StringField(max_length = 30)
    last_name = StringField(max_length = 50)
    email = StringField(max_length=30)

    def toJSON(self):
        return jsonify({
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email
        })

class Response:
    def __init__(self, code, message):
        self.response_code = code
        self.response_message = message 
    
    def toJSON(self):
        return jsonify({
            "response_code": self.response_code,
            "response_message": self.response_message
        })

"""
class Credential(Document):
    meta = {'collection': 'db-credentials'}
"""
