from flask import Flask
from flask_cors import CORS
from mongoengine import connect
from .routes import routes_blueprint 

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'randomkey'
    app.debug = True
    CORS(app, resources={r"/*": {"origins": "http://localhost:8080"}}, supports_credentials=True)
    app.register_blueprint(routes_blueprint)

    connect(db='taskScheduler', host='mongo-db')

    return app

