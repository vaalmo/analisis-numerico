from flask import request, jsonify
from methods import chapter3, write_file
from flask import Blueprint
interpolation_api = Blueprint('interpolation', __name__)

## falta agregar parametros de las funciones de calcular
## leer los datos de entrada en una request

## viejo
## @interpolation_api.route('/lagrange', methods=["POST"])
##def lagrange():
##    data = request.get_json()
##    result = chapter3.calculateLagrange(data["x"],data["y"])
##    write_file.writeFile(result, 3)
##    return jsonify(result)

@interpolation_api.route('/lagrange', methods=['POST'])
def lagrange():
    data = request.get_json()
    x = data.get('x')
    y = data.get('y')
    result = chapter3.calculateLagrange(x, y)
    write_file.writeFile(result, 3)
    return jsonify(result)

## saca el polinomio final, seria cool que sacara la tabla de coef y los coef del polinomio
@interpolation_api.route('/newtonint', methods=["POST"])
def newton():
    data = request.get_json()
    result = chapter3.calculateNewton(data["x"],data["y"])
    write_file.writeFile(result[2], 3)
    return jsonify(result[2])


@interpolation_api.route('/spline', methods=["POST"])
def spline():
    data = request.get_json()
    x = data.get('x')
    y = data.get('y')
    d = data.get('d')
    result = chapter3.calculateSpline(x, y, d)
    write_file.writeFile(result, 3)
    return jsonify(result)


@interpolation_api.route('/vandermonte', methods=["POST"])
def vandermonte():
    data = request.get_json()
    x = data.get('x')
    y = data.get('y')
    result = chapter3.calculateVander(x,y)
    write_file.writeFile(result, 3)
    return jsonify(result)