import numpy as np
import sympy as sym
from . import grafica

# Metodo de interpolacion de Newton; retorna los coeficientes del polinomio y la tabla
# La tabla (coef) es distinta a las diapositivas
# En las diapos la diagonal son los coeficientes b, aca b es la primera fila; 
def newton_inter(x, y):
    if len(x) != len(y):
        raise ValueError("x and y must be the same size")
    if len(x) != len(set(x)):
        raise ValueError("The x vector has duplicated items; the input isn't a function")
    
    n = len(y)
    coef = np.zeros([n, n])
    coef[:,0] = y
    
    for j in range(1,n):
        for i in range(n-j):
            coef[i][j] = \
        (coef[i+1][j-1] - coef[i][j-1]) / (x[i+j]-x[i])
    
    return coef[0].tolist() , coef


#Retorna el polinomio en sympy
def sym_polinomio(b, x_v):
    x = sym.Symbol('x')
    polinomio = 0
    for i in range(len(b)):
        temp = 1
        for n in range(i):
            temp = temp*(x - x_v[n])
        polinomio = polinomio + temp*b[i]
    return polinomio.as_poly()

#Retorna el polinomio de numpy???
#### Retorna una funcion
def np_polinomio(b, x_v):
    def term(i, x):
        temp = np.ones_like(x)
        for n in range(i):
            temp = temp * (x - x_v[n])
        return temp

    def polynomial_function(x):
        polinomio = np.zeros_like(x)
        for i in range(len(b)):
            polinomio = polinomio + term(i, x) * b[i]
        return polinomio

    return polynomial_function

# Revisar
def pol_to_str(b, x_v):
    polinomio = f"{b[0]} "
    for i in range(1,len(b)):
        temp = ""
        for n in range(i):
            temp = temp+f"(x - {x_v[n]})"
        polinomio = polinomio + f" + {b[i]} {temp} "
    return polinomio

"""x_v = [3, 3.6667, 4.3333]
y = [6.7472, 10.7997, 15.8063]
coef_0 , coef = newton_inter(x_v,y)
print(coef_0) # Vector de coeficientes b
print(coef) # Tabla
print(sym_polinomio(coef_0, x_v)) # Polinomio

# Desearia pasar sym_polinomio para graficar; no se puede
pol = np_polinomio(coef_0, x_v)
graficar(pol,x_v,y, 'Newton Interpolation')"""

""" 
#Ejemplo de error de truncamiento. x_v tiene todos los puntos incluido n+1
coef_0 , coef = newton_inter(x_v,y)

def temp(x, x_v):
    t = coef_0[-1]
    for i in range(len(x_v)-1):
        t= t*(x-x_v[i])
    return t

print(temp(x_v[-1],x_v))
"""

""" Imprime un polinomio de np como uno de sym
from sympy import Symbol,expand
x=Symbol('x')
print(expand(pol(x)))
"""