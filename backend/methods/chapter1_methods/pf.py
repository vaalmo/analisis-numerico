import numpy as np
import pandas as pd

def pf_solve(f, g, x0, tol, niter, tipo_e):
    c = 0
    fm = [f(x0)]
    fe = fm[c]
    E = [tol + 1]
    error = E[c]
    xn = [x0]
    N = [c]

    while error > tol and fe != 0 and c < niter:
        xn.append(g(x0))
        fm.append(f(xn[-1]))
        fe = fm[-1]
        if tipo_e == 0: #Realitvo
            E.append(abs( (xn[-1] - x0)/xn[-1] ))
        if tipo_e == 1: #absoluto
            E.append(abs(xn[-1] - x0))
        error = E[-1]
        x0 = xn[-1]
        N.append(c + 1)
        c += 1

    tabla = pd.DataFrame({'xn': xn, 'fm': fm, 'E': E})

    if fe == 0:
        s = x0
        n = c
        print(f"{x0} es raiz de f(x)")
        tabla.iloc[-1, tabla.columns.get_loc('E')] = 0  #Tiene forma tan absurda por error pandas
    elif error < tol:
        s = x0
        n = c
        print(f"{x0} es una aproximación de una raiz de f(x) con una tolerancia de {tol} y con {n} iteraciones")
    else:
        s = x0
        n = c
        print(f"Fracasó en {niter} iteraciones")

    return tabla, s

if __name__ == "__main__":
    # Example usage:
    def f(x):
        return -7 * np.log(x) + x - 11
    def g(x):
        return 7 * np.log(x) + 11
    x0 = 1.5  # Initial guess
    tol = 1e-5  # tolerance
    niter = 100  # Maximum number of iterations
    tabla, s = pf_solve(f, g, x0, tol, niter, 1)
    print(tabla)
    print(s)