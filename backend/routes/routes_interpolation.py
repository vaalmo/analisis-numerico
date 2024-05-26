from flask import request, jsonify
from methods import chapter3
from flask import Blueprint
interpolation_api = Blueprint('interpolation', __name__)

## falta agregar parametros de las funciones de calcular
## leer los datos de entrada en una request


@interpolation_api.route('/lagrange', methods=["POST"])
def lagrange():
    data = request.get_json()
    result = chapter3.calculateLagrange(data["x"],data["y"])
    return jsonify(result)

@interpolation_api.route('/newton', methods=["POST"])
def newton():
    data = request.get_json()
    result = chapter3.calculateNewton(data["x"],data["y"])
    return jsonify(result[2])

@interpolation_api.route('/spline', methods=["POST"])
def spline():
    data = request.get_json()
    result = chapter3.calculateSpline(data["x"],data["y"])
    return jsonify(result)

@interpolation_api.route('/vandermonte', methods=["POST"])
def vandermonte():
    data = request.get_json()
    result = chapter3.calculateVander(data["x"],data["y"])
    return jsonify(result)