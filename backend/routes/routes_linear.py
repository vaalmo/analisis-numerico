from flask import request, jsonify
from methods import chapter2
from flask import Blueprint

linear_api = Blueprint('linear', __name__)


@linear_api.route('/iterative', methods=["POST"])
def iterative():
    data = request.get_json()
    result = chapter2.calculate_iterative()
    return jsonify(result)