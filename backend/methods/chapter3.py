from .chapter3_methods import lagrange
from .chapter3_methods import newton_inter
from .chapter3_methods import spline
from .chapter3_methods import vandermonde
from .chapter3_methods import grafica

def calculateLagrange(x, y):
    f = lagrange.main_lagrange(x,y)
    #grafica.graficar(f, x, y, 'Interpolacion lagrange')
    return f

def calculateNewton(x, y):
    coef_0 , coef = newton_inter.newton_inter(x,y) # Vector de coeficientes b --> coef_0 Tabla --> coef
    polin = newton_inter.sym_polinomio(coef_0, x) # Polinomio
    return coef_0 , coef, polin

def calculateSpline(x, y):
    p = spline.spline(x,y,2)
    list_f = spline.construct_list_polynomials(p) ## --> este está como regular...
    #grafica.graficar_spline(list_f,x,y)
    return p

def calculateVander(x, y):
    a = vandermonde.vandermonde(x,y)
    pol = vandermonde.np_polinomio(a)
    #grafica.graficar(pol, x, y, 'Interpolacion Vandermonde')
    polin = vandermonde.pol_to_str(a)
    return polin

