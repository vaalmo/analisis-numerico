from flask import request, jsonify
from methods import chapter2, write_file
from flask import Blueprint

linear_api = Blueprint('linear', __name__)

@linear_api.route('/gausseidel', methods=["POST"])
def gaussSeidel():
    data = request.get_json()
    result = chapter2.calculateGaussSeidel(data["x"],data["A"],data["b"],eval(data["Tol"]),data["niter"])
    write_file.writeFile(result, 2)
    return jsonify(result)

@linear_api.route('/jacobi', methods=["POST"])
def jacobi():
    data = request.get_json()
    result = chapter2.calculateJacobi(data["x"],data["A"],data["b"],eval(data["Tol"]),data["niter"])
    write_file.writeFile(result, 2)
    return jsonify(result)

@linear_api.route('/sor', methods=["POST"])
def sor():
    data = request.get_json()
    result = chapter2.calculateSOR(data["x"],data["A"],data["b"],eval(data["Tol"]),data["niter"],data["w"])
    write_file.writeFile(result, 2)
    return jsonify(result)