from flask import request, jsonify
from methods import chapter1
from flask import Blueprint
non_linear_api = Blueprint('non_linear', __name__)

## falta agregar parametros de las funciones de calcular
## leer los datos de entrada en una request


@non_linear_api.route('/bisection', methods=["POST"])
def bisection():
    data = request.get_json()
    result = chapter1.calculate_bisection()
    return jsonify(result)

@non_linear_api.route('/false_position', methods=["POST"])
def false_position():
    data = request.get_json()
    result = chapter1.calculate_false_position()
    return jsonify(result)

@non_linear_api.route('/fixed_point', methods=["POST"])
def fixed_point():
    data = request.get_json()
    result = chapter1.calculate_fixed_point()
    return jsonify(result)

@non_linear_api.route('/secant', methods=["POST"])
def secant():
    data = request.get_json()
    result = chapter1.calculate_secant()
    return jsonify(result)

@non_linear_api.route('/multiple_roots', methods=["POST"])
def multiple_roots():
    data = request.get_json()
    result = chapter1.calculate_multiple_roots()
    return jsonify(result)