from flask import Flask, request, jsonify, session, redirect, url_for, escape
from werkzeug.security import generate_password_hash
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'task-scheduler',
    'host': 'mongodb://admin:test123@ds241493.mlab.com:41493/task-scheduler'
}
app.config['SECRET_KEY'] = 'randomkey'

login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)p

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

@app.route('/')
def home():
    pass

class User(UserMixin, db.Document):
    meta = {'collection': 'user'}
    email = db.StringField(max_length=30)
    password = db.StringField()

@login_manager.user_loader
def load_user(user_id):
    return User.objects(pk=user_id).first()

app.run(port=7000)

