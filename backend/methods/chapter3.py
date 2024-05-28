from .chapter3_methods import lagrange
from .chapter3_methods import newton_inter
from .chapter3_methods import spline
from .chapter3_methods import vandermonde
from .chapter3_methods import grafica

def calculateLagrange(x, y):
    f = lagrange.main_lagrange(x,y)
    polin = lagrange.poliToString(list(f))
    #grafica.graficar(f, x, y, 'Interpolacion lagrange')
    return polin

def calculateNewton(x, y):
    coef_0 , coef = newton_inter.newton_inter(x,y) # Vector de coeficientes b --> coef_0 Tabla --> coef
    polin = newton_inter.sym_polinomio(coef_0, x) # Polinomio
    print(polin)
    return coef_0, coef, str(polin.expr)

def calculateSpline(x, y, d):
    p = spline.spline(x,y,d)
    list_f = spline.construct_list_polynomials(p)
    i = 0
    while i < len(list_f):
        list_f[i] = spline.poliToString(list_f[i].coef)
        i = i + 1
    print(list_f)
    #grafica.graficar_spline(list_f,x,y)
    return list_f

def calculateVander(x, y):
    a = vandermonde.vandermonde(x,y)
    pol = vandermonde.np_polinomio(a)
    grafica.graficar(pol, x, y, 'Interpolacion Vandermonde')
    polin = vandermonde.pol_to_str(a)
    return polin

def openImage():
    image = b''
    with open('../images/foo.png', 'rb') as file:
        pass