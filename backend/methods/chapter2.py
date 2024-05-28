from .chapter2_methods import gauss_seidel
from .chapter2_methods import jacobi
from .chapter2_methods import SOR
from .chapter2_methods import imprimir_sistema_ecu

def calculateGaussSeidel(A, b, x0, Tol, niter):
    tabla = gauss_seidel.gauss_seidel(A, b, x0, Tol, niter, 1)
    xSolutions = imprimir_sistema_ecu.printSolution(tabla.x.values[-1])
    return xSolutions

def calculateJacobi(A, b, x0, Tol, niter):
    tabla = jacobi.jacobi(A, b, x0, Tol, niter, 1)
    xSolutions = imprimir_sistema_ecu.printSolution(tabla.x.values[-1])
    return xSolutions

def calculateSOR(A, b, x0, Tol, niter, w):
    tabla = SOR.sor(A, b, x0, Tol, niter, w, 1)
    xSolutions = imprimir_sistema_ecu.printSolution(tabla.x.values[-1])
    return xSolutions