import numpy as np
#import grafica

# Crea una lista de los distintos polinomios P1, P2, ...
def poly_lagrange(x_v):
    list_poly = []
    for n in range(len(x_v)):
        pol = 1
        for i in range(len(x_v)):
            if i == n: continue
            pol = np.polymul(pol, np.poly1d([1, -x_v[i]]) / (x_v[n] - x_v[i]))
        list_poly.append(pol)

    return list_poly

# Retorna el polinomio de interpolacion
def interpolation_lagrange(y, list_poly):
    p = list_poly[0] * y[0]
    for i in range(1, len(y)):
        p = np.polyadd(p, list_poly[i] * y[i])
    return p

def main_lagrange(x, y):
    if len(x) != len(y):
        raise ValueError("x and y must be the same size")
    if len(x) != len(set(x)):
        raise ValueError("The x vector has duplicated items; the input isn't a function")
    list_poly = poly_lagrange(x)
    return interpolation_lagrange(y, list_poly)

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

"""x = [-2,-1,2,3]
y = [12.1353, 6.3678, -4.6109, 2.085536]
list_poly = poly_lagrange(x)
print(list_poly)
f = main_lagrange(x,y)
#graficar(f, x, y, 'Interpolacion lagrange')
print(f)
print(poliToString(list(f)))"""