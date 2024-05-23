import numpy as np
import sympy as sym
import numpy.polynomial.polynomial as poly
from . import grafica

# Realiza la interpolacion de Vandermonde; retorna un vector de los coeficientes del polinomio
def vandermonde(x, y):
    if len(x) != len(y):
        raise ValueError("x and y must be the same size")
    if len(x) != len(set(x)):
        raise ValueError("The x vector has duplicated items; the input isn't a function")

    try:
        a = np.linalg.solve(vandermonde_matrix(x), y)
        return a.tolist()
    except np.linalg.LinAlgError as e:
        raise ValueError("Error when trying to solve the system")

#Para crear la matriz de Vandermonde
def vandermonde_matrix(x, increasing=False):
    x = np.asarray(x)
    if x.ndim != 1:
        raise ValueError("x must be a one-dimensional array or sequence.")
    n = len(x)
    v = np.column_stack([x**i for i in range(n)])
    if not increasing:
        v = np.fliplr(v)
    return v

#Retorna el polinomio en sympy
def sym_polinomio(a):
    x = sym.Symbol('x')
    polinomio = 0
    for i in range(len(a)):
        polinomio = polinomio + (x**(i) * a[-(i+1)])
    return polinomio

#Retorna el polinomio en texto
def pol_to_str(a):
    polinomio = f"{a[0]} "
    for i in range(1,len(a)):
        if a[-(i+1)] >= 0:
            polinomio = polinomio + f'+ {a[-(i+1)]} x^{i} '
        else:
            polinomio = polinomio + f'{a[-(i+1)]} x^{i} '
    return polinomio

#Retorna el polinomio en numpy
def np_polinomio(a):
    return poly.Polynomial(a[::-1])

"""
x = [-2,-1,2,3]
y = [12.1353, 6.3678, -4.6109, 2.085536]
a = vandermonde(x,y)
pol = np_polinomio(a)
graficar(pol, x, y, 'Interpolacion Vandermonde')
print(pol_to_str(a))"""

#print(a)
#pol = sym_polinomio(a)
#pol = np_polinomio(a)
#print(pol)
#print(pol(3))
#x = sym.Symbol('x')
#print(pol.subs(x, -2).evalf())
#print(pol_to_str(a))