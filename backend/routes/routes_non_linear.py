from flask import request, jsonify
from methods import chapter1, write_file
from flask import Blueprint
non_linear_api = Blueprint('non_linear', __name__)

@non_linear_api.route('/bisection', methods=["POST"])
def bisection():
    data = request.get_json()
    result = chapter1.calculate_bisection(data["f"], data["xi"], data["xs"], data["tol"], data["niter"])
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/newton', methods=["POST"])
def newton():
    data = request.get_json()
    result = chapter1.calculate_newton(data["fun"], data["x0"], data["tol"], data["niter"])
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/false_position', methods=["POST"])
def false_position():
    data = request.get_json()
    result = chapter1.calculate_false_position(data["f"], data["ak"], data["bk"], data["tol"], data["niter"])
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/fixed_point', methods=["POST"])
def fixed_point():
    data = request.get_json()
    result = chapter1.calculate_fixed_point(data["f"], data["g"], data["x0"], data["tol"], data["niter"])
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/secant', methods=["POST"])
def secant():
    data = request.get_json()
    result = chapter1.calculate_secant(data["fun"], data["x0"], data["x1"], data["tol"], data["niter"])
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/multiple_roots', methods=["POST"])  
def multiple_roots():
    data = request.get_json()
    result = chapter1.calculate_multiple_roots(data["fun"], data["x0"], data["tol"], data["niter"], data["m"])
    write_file.writeFile(result, 1)
    return jsonify(result)