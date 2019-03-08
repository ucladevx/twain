from flask import jsonify
from flask_login import UserMixin 
from mongoengine import Document, StringField

class User(UserMixin, Document):
    meta = {'collection': 'db-users'}
    id_token = StringField()
    email = StringField(max_length=30)
    first_name = StringField(max_length = 30)
    last_name = StringField(max_length = 50)
    access_token = StringField()

    def toJSON(self):
        return jsonify({
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "id_token": self.id_token
        }), 200

class Error(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload 
    
    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

"""
class Response:
    def __init__(self, code, message):
        self.response_code = code
        self.response_message = message 
    
    def toJSON(self):
        return jsonify(self), 



class Credential(Document):
    meta = {'collection': 'db-credentials'}
"""
