from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.routes_non_linear import non_linear_api, download_api1
from routes.routes_linear import linear_api, download_api2
from routes.routes_interpolation import interpolation_api, download_api3

app = Flask(__name__)
CORS(app)

app.register_blueprint(non_linear_api, url_prefix = '/non_linear')
app.register_blueprint(linear_api, url_prefix = '/linear')
app.register_blueprint(interpolation_api, url_prefix = '/interpolation')
app.register_blueprint(download_api1, url_prefix = '/download')
app.register_blueprint(download_api2, url_prefix = '/download2')
app.register_blueprint(download_api3, url_prefix = '/download3')




