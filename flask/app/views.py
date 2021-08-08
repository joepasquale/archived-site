from flask import Flask, request, jsonify
from app import app

@app.route('/')
def index():
    return "This is a test"
