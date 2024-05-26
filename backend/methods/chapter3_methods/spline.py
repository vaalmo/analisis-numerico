import numpy as np
import numpy.polynomial.polynomial as poly
from . import grafica

# d es 1, 2 o 3 para spline lineal, cuadrado o cubico
def spline(x, y, d):
    if len(x) != len(y):
        raise ValueError("x and y must be the same size")
    if len(x) != len(set(x)):
        raise ValueError("The x vector has duplicated items; the input isn't a function")
    try:
        n = len(x)
        A = np.zeros(((d+1) * (n-1), (d+1) * (n-1)))
        b = np.zeros(((d+1) * (n-1), 1))
        cua = np.power(x, 2)
        cub = np.power(x, 3)

        if d == 1:  # Lineal
            A, b = construct_linear_spline(x, y, n, A, b)
            val = np.linalg.inv(A).dot(b)
            tabla = np.reshape(val, (n-1, d+1))
            return tabla.tolist()
        
        elif d == 2: # Square
            A, b = construct_square_spline(x, y, n, A, b, cua)
            val = np.linalg.inv(A).dot(b)
            tabla = np.reshape(val, (n-1, d+1))    
            return tabla.tolist()
        
        elif d == 3:  # Cubic
            A, b = construct_cubic_spline(x, y, n, A, b, cua, cub)
            val = np.linalg.inv(A).dot(b)
            tabla = np.reshape(val, (n-1, d+1))    
            return tabla.tolist()
        
        else: raise ValueError("Invalid 'd' option, choose 1 for linear, 2 for square and 3 for cubic")
        
    except np.linalg.LinAlgError as e:
        raise ValueError("Error when trying to solve the system")


def construct_linear_spline(x, y, n, A, b):
    c = 0
    h = 0
    for i in range(0, n-1):
        A[i, c] = x[i]
        A[i, c+1] = 1
        b[i] = y[i]
        c += 2
        h += 1

    c = 0
    for i in range(1, n):
        A[h, c] = x[i]
        A[h, c+1] = 1
        b[h] = y[i]
        c += 2
        h += 1

    return A, b


def construct_square_spline(x, y, n, A, b, cua):
    c = 0
    h = 0
    for i in range(n-1):
        A[h, c] = cua[i]
        A[h, c+1] = x[i]
        A[h, c+2] = 1
        b[h] = y[i]
        c += 3
        h += 1
    
    c = 0
    for i in range(1, n):
        A[h, c] = cua[i]
        A[h, c+1] = x[i]
        A[h, c+2] = 1
        b[h] = y[i]
        c += 3
        h += 1

    c = 0
    for i in range(1, n-1):
        A[h, c] = 2*x[i]
        A[h, c+1] = 1
        A[h, c+3] = -2*x[i]
        A[h, c+4] = -1
        b[h] = 0
        c += 3
        h += 1

    A[h, 0] = 2
    b[h] = 0

    return A, b


def construct_cubic_spline(x, y, n, A, b, cua, cub):
    c = 0
    h = 0
    for i in range(0, n - 1):
        A[h, c] = cub[i]
        A[h, c+1] = cua[i]
        A[h, c+2] = x[i]
        A[h, c+3] = 1
        b[h] = y[i]
        c += 4
        h += 1

    c = 0
    for i in range(1, n):
        A[h, c] = cub[i]
        A[h, c+1] = cua[i]
        A[h, c+2] = x[i]
        A[h, c+3] = 1
        b[h] = y[i]
        c += 4
        h += 1

    c = 0
    for i in range(1, n - 1):
        A[h, c] = 3*cua[i]
        A[h, c+1] = 2*x[i]
        A[h, c+2] = 1
        A[h, c+4] = -3*cua[i]
        A[h, c+5] = -2*x[i]
        A[h, c+6] = -1
        b[h] = 0
        c += 4
        h += 1

    c = 0
    for i in range(1, n - 1):
        A[h, c] = 6*x[i]
        A[h, c+1] = 2
        A[h, c+4] = -6*x[i]
        A[h, c+5] = -2
        b[h] = 0
        c += 4
        h += 1

    A[h, 0] = 6*x[0]
    A[h, 1] = 2
    b[h] = 0
    h += 1
    A[h, c] = 6*x[-1]
    A[h, c+1] = 2
    b[h] = 0

    return A, b

# Retorna la lista de los polinomios
def construct_list_polynomials(list):
    list_f = []
    for p in list:
        list_f.append(poly.Polynomial(p[::-1]))
    return list_f

def poliToString(f):
    n = len(f)
    i = 0
    polin = ''
    while i < len(f):
        if n < 2:
            polin = polin + str(round(f[i], 4)) + 'x + '
        else:
            polin = polin + str(round(f[i], 4)) + 'x^'+ str(n-1) + ' + ' 
        i = i + 1
        n = n - 1
    polin = polin.strip('x +')
    return polin

"""
#### Falta estandarizar el orden de los vectores;
#### Recomiendo ordenar x de menor a mayor
x = [-2,-1,2,3]
y = [12.1353, 6.3678, -4.6109, 2.085536]

p = spline(x,y,2)
print(p)
list_f = construct_list_polynomials(p)
print(f"El polinomio evaluado en {-2} retorna {list_f[0](-2)}")
graficar_spline(list_f,x,y)"""