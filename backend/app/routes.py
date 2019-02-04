from flask import Flask, request, jsonify, session, redirect, url_for, escape, render_template
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_required, login_user, logout_user, current_user
from forms import RegForm, LoginForm 
from models import User
from app import login_manager, app

@app.route('/')
def home():
    pass

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if request.method == 'POST':
        if form.validate():
            user = User.objects(email=form.email.data).first()
            if user is not None:
                if check_password_hash(user.password, form.password.data):
                    print ("User logged in")
                    login_user(user)
                    return redirect(url_for('dashboard'))
    return render_template('login.html', form=form)

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegForm()
    if request.method == 'POST':
        if form.validate():
            existing_user = User.objects(email=form.email.data).first()
            if existing_user is None:
                hashpass = generate_password_hash(form.password.data, method='sha256')
                dbUser = User(form.first_name.data, form.last_name.data, form.email.data,hashpass).save()
                login_user(dbUser)
                return redirect(url_for('dashboard'))
    return render_template('register.html', form=form)

@login_manager.user_loader
def load_user(user_id):
    return User.objects(pk=user_id).first()