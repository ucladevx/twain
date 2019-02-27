from flask import Blueprint, request, jsonify
from flask_login import LoginManager, login_required, login_user, logout_user, current_user
from googleapiclient.discovery import build
from oauth2client import client
from google.oauth2 import id_token
from google.auth.transport import requests
from .models import User, Response 
import os.path
import json 

routes_blueprint = Blueprint('routes', __name__)

@routes_blueprint.route('/login', methods=['POST'])
def login():
    # Obtain id_token from request body
    data = request.data
    data = json.loads(data)
    token = data['id_token']

    
    # Retrieve client ID from client_secret file
    if os.path.exists(os.getcwd() + '/app/client_secret.json'):
        client_secret_path = os.getcwd() + '/app/client_secret.json'
    
    with open(client_secret_path, 'r') as client_secret_file:
        client_id = json.load(client_secret_file)['web']['client_id']
    
    try:
        # Verify token
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), client_id)

        #If token issuer not from Google, return error
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer')

        # ID token is valid. Query database for user email and create account if necessary
        user = User.objects(email=idinfo['email']).first()
        if user is None:
            user = User(idinfo['name'].split(' ')[0], idinfo['name'].split(' ')[1], idinfo['email']).save()
    
        return jsonify(user)
    except ValueError:
        # Invalid token
        return Response(301, "Error: token is invalid").toJSON()

    

    """
    # Retrieve credentials from authorization code 
    scopes = ['https://www.googleapis.com/auth/calendar']
    credentials = client.credentials_from_clientsecrets_and_code(client_secret_path, scopes, code)
    return jsonify(credentials)
    """

@routes_blueprint.route('/calendar', methods=['GET'])
def return_calendar_data():

    code = request.headers.get('code')
    scopes = ['https://www.googleapis.com/auth/calendar']
    credentials = client.credentials_from_clientsecrets_and_code(client_secret_path, scopes, code)

    service = build('calendar', 'v3', credentials=credentials)

    events = service.events().list(calendarId='primary', timeMin=now, maxResults=10)

    return jsonify(events)