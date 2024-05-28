from flask import request, jsonify
from methods import chapter1, write_file
from flask import send_from_directory
from flask import Blueprint
import os
non_linear_api = Blueprint('non_linear', __name__)
download_api1 = Blueprint('download', __name__)

@non_linear_api.route('/bisection', methods=["POST"])
def bisection():
    data = request.get_json()
    f = data.get('functionf')
    xi = data.get('lowint')
    xs = data.get('highint')
    tol = data.get('tolerance')
    niter = data.get('maxiter')
    errortype = data.get('errortype')
    result = chapter1.calculate_bisection(f, xi, xs, tol, niter, errortype)
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/newton', methods=["POST"])
def newton():
    data = request.get_json()
    fun = data.get('functionf')
    x0 = data.get('lowint')
    tol = data.get('tolerance')
    niter = data.get('maxiter')
    errortype = data.get('errortype')
    result = chapter1.calculate_newton(fun, x0, tol, niter, errortype)
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/false_position', methods=["POST"])
def false_position():
    data = request.get_json()
    f = data.get('functionf')
    ak = data.get('lowint')
    bk = data.get('highint')
    tol = data.get('tolerance')
    niter = data.get('maxiter')
    errortype = data.get('errortype')
    result = chapter1.calculate_false_position(f, ak, bk, tol, niter, errortype)
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/fixed_point', methods=["POST"])
def fixed_point():
    data = request.get_json()
    f = data.get('functionf')
    g = data.get('functiong')
    x0 = data.get('initialvalue')
    tol = data.get('tolerance')
    niter = data.get('maxiter')
    errortype = data.get('errortype')
    result = chapter1.calculate_fixed_point(f, g, x0, tol, niter, errortype)
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/secant', methods=["POST"])
def secant():
    data = request.get_json()
    fun = data.get('functionf')
    x0 = data.get('lowint')
    x1 = data.get('highint')
    tol = data.get('tolerance')
    niter = data.get('maxiter')
    errortype = data.get('errortype')
    result = chapter1.calculate_secant(fun, x0, x1, tol, niter, errortype)
    write_file.writeFile(result, 1)
    return jsonify(result)

@non_linear_api.route('/multiple_roots', methods=["POST"])  
def multiple_roots():
    data = request.get_json()
    fun = data.get('functionf')
    x0 = data.get('lowint')
    tol = data.get('tolerance')
    niter = data.get('maxiter')
    m = data.get('m')
    errortype = data.get('errortype')
    result = chapter1.calculate_multiple_roots(fun, x0, tol, niter, m, errortype)
    write_file.writeFile(result, 1)
    return jsonify(result)





@download_api1.route('/solutionsChapter1.txt', methods=['GET'])
def download_file():
    directory = os.path.join(os.path.expanduser('~'), 'Documents', 'Code', 'analisis-numerico', 'backend', 'solutions')
    filename = 'solutionsChapter1.txt'
    return send_from_directory(directory, filename)
