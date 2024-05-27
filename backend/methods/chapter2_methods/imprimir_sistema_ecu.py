import numpy as np
import sympy as sp

def imprimir_sistema_ecuaciones(A,b):
    A = np.array(A)
    b = np.array(b)

    x = sp.symbols('x1:%d' % (A.shape[1] + 1))
    equations = []
    for i in range(A.shape[0]):
        equation = sum(A[i, j] * x[j] for j in range(A.shape[1]))
        equations.append(sp.Eq(equation, b[i]))

    for eq in equations:
        sp.pprint(eq)

def printSolution(lastX):
    solution = []
    xsub = 1
    lastX = eval(lastX.replace(' ', ','))
    for x in lastX:
        solution.append(str(x) + ' x' + str(xsub))
        xsub = xsub + 1
    return solution

"""if __name__ == "__main__":
    b = [100, 100, 200]
    A = [
        [100,1,3],
        [-20,40,12],
        [-10,-10,40]
        ]
    imprimir_sistema_ecuaciones(A,b)"""