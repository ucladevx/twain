from flask import Flask, request, jsonify, session, redirect, url_for, escape, render_template
from flask_oauthlib.client import OAuth
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, login_required, login_user, logout_user, current_user
from forms import RegForm, LoginForm 
from mongoengine import connect
from models import User

app = Flask(__name__)
app.config['SECRET_KEY'] = 'randomkey'
app.config['GOOGLE_ID'] = "574982251056-km2laltubmenemsuka31uphh70km2oc0.apps.googleusercontent.com"
app.config['GOOGLE_SECRET'] = "u-Z8wdXU3UAmc2uruNcSDySb";
app.debug = True
oauth = OAuth(app)

google = oauth.remote_app(
    'google',
    consumer_key=app.config.get('GOOGLE_ID'),
    consumer_secret=app.config.get('GOOGLE_SECRET'),
    request_token_params={
        'scope': 'email'
    },
    base_url='https://www.googleapis.com/oauth2/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
)

@app.route('/')
def index():
    if 'google_token' in session:
        me = google.get('userinfo')
        return jsonify({"data": me.data})
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    return google.authorize(callback=url_for('authorized', _external=True))

@app.route('/logout')
def logout():
    session.pop('google_token', None)
    return redirect(url_for('index'))

@app.route('/login/authorized')
def authorized():
    resp = google.authorized_response()
    if resp is None:
        return 'Access denied: reason=%s error=%s' % (
            request.args['error_reason'],
            request.args['error_description']
        )
    session['google_token'] = (resp['access_token'], '')
    me = google.get('userinfo')
    return jsonify({"data": me.data})

@google.tokengetter
def get_google_oath_token():
    return session.get('google_token')
