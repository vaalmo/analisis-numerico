from .chapter1_methods import Biseccion
from .chapter1_methods import newton
from .chapter1_methods import newton_m
from .chapter1_methods import pf
from .chapter1_methods import rf
from .chapter1_methods import secante

import sympy as sp
import numpy as np
import math


def calculate_bisection(f, xi, xs, tol, niter):
    response = Biseccion.biseccion(lambda x : eval(f), xi, xs, tol, niter, 1)
    return response

def calculate_newton(fun, x0, tol, niter):
    x = sp.symbols('x')
    response = newton.newton(eval(fun), x0, tol, niter,1)
    return response

def calculate_false_position(f, ak, bk, tol, niter):
    response = rf.rf(lambda x : eval(f), ak, bk, tol, niter, 1)
    return response

def calculate_fixed_point(f, g, x0, tol, niter):
    response = pf.pf_solve(lambda x : eval(f), lambda x : eval(g), x0, tol, niter, 1)
    return response

def calculate_secant(fun, x0, x1, tol, niter):
    x = sp.symbols('x')
    response = secante.sec(eval(fun), x0, x1, tol, niter,1)
    return response

def calculate_multiple_roots(fun, x0, tol, niter, m):
    x = sp.symbols('x')
    response = newton_m.newton_mod(eval(fun), x0, tol, niter, m,0)
    return response
