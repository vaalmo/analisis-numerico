from flask import request, jsonify
from methods import chapter2, write_file
from flask import Blueprint
import os
from flask import send_from_directory

linear_api = Blueprint('linear', __name__)
download_api2 = Blueprint('download2', __name__)

@linear_api.route('/gausseidel', methods=["POST"])
def gaussSeidel():
    data = request.get_json()
    A = data.get('A')
    b = data.get('b')
    x0 = data.get('x0')
    Tol = data.get('tolerance')
    niter = data.get('maxiter')
    result = chapter2.calculateGaussSeidel(A, b, x0, Tol, niter)
    write_file.writeFile(result, 2)
    return jsonify(result)

# @linear_api.route('/jacobi', methods=["POST"])
#def jacobi():
#    data = request.get_json()
#    result = chapter2.calculateJacobi(data["x"],data["A"],data["b"],eval(data["Tol"]),data["niter"])
#    write_file.writeFile(result, 2)
#    return jsonify(result)


@linear_api.route('/jacobi', methods=["POST"])
def jacobi():
    data = request.get_json()
    A = data.get('A')
    b = data.get('b')
    x0 = data.get('x0')
    Tol = data.get('tolerance')
    niter = data.get('maxiter')
    result = chapter2.calculateJacobi(A, b, x0, Tol, niter)
    write_file.writeFile(result, 2)
    return jsonify(result)


#viejo
#@linear_api.route('/sor', methods=["POST"])
#def sor():
#    data = request.get_json()
#    result = chapter2.calculateSOR(data["x"],data["A"],data["b"],eval(data["Tol"]),data["niter"],data["w"])
#    write_file.writeFile(result, 2)
#    return jsonify(result)


@linear_api.route('/sor', methods=["POST"])
def sor():
    data = request.get_json()
    A = data.get('A')
    b = data.get('b')
    x0 = data.get('x0')
    Tol = data.get('tolerance')
    niter = data.get('maxiter')
    w = data.get('w')
    result = chapter2.calculateSOR(A, b, x0, Tol, niter, w)
    write_file.writeFile(result, 2)
    return jsonify(result)


@download_api2.route('/solutionsChapter2.txt', methods=['GET'])
def download_file():
    directory = os.path.join(os.path.expanduser('~'), 'Documents', 'Code', 'analisis-numerico', 'backend', 'solutions')
    filename = 'solutionsChapter2.txt'
    return send_from_directory(directory, filename)