from flask import Flask
from mongoengine import connect
from .routes import routes_blueprint 

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'randomkey'
    app.debug = True


    """ MOVE DB CONNECTION TO DOCKER INSTANCE (TODO) """
    connect(db = 'task-scheduler',
    username = 'admin',
    password = 'adminpassword',
    host =  'mongodb://admin:adminpassword@task-scheduler-shard-00-00-x34zf.azure.mongodb.net:27017,task-scheduler-shard-00-01-x34zf.azure.mongodb.net:27017,task-scheduler-shard-00-02-x34zf.azure.mongodb.net:27017/test?ssl=true&replicaSet=task-scheduler-shard-0&authSource=admin&retryWrites=true')    
    
    
    app.register_blueprint(routes_blueprint)

    return app
    
