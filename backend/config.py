from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.routes_non_linear import non_linear_api
from routes.routes_linear import linear_api
from routes.routes_interpolation import interpolation_api

app = Flask(__name__)
CORS(app)

app.register_blueprint(non_linear_api, url_prefix = '/non_linear')
app.register_blueprint(linear_api, url_prefix = '/linear')
app.register_blueprint(interpolation_api, url_prefix = '/interpolation')