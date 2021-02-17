from flask import Flask, render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Joe'}
    return render_template('index.html', title='Joe Pasquale', user=user)