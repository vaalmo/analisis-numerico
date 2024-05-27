import numpy as np
import pandas as pd

def biseccion(f, xi, xs, tol, niter, tipo_e):  
    fi = f(xi)
    fs = f(xs)
    if fi == 0:
        s = xi
        E = 0
        print(f"{xi} is a root of f(x)")
        tabla = pd.DataFrame({'val_xi': xi, 'val_xs': xs, 'E': 0, 'fm': fi})
    elif fs == 0:
        s = xs
        E = 0
        print(f"{xs} is a root of f(x)")
        tabla = pd.DataFrame({'val_xi': xi, 'val_xs': xs, 'E': 0, 'fm': fs})
    elif fs * fi < 0:
        c = 0
        xm = (xi + xs) / 2
        fm = [f(xm)]
        fe = fm[c]
        E = [tol + 1]
        error = E[c]
        val_xi = [xi]
        val_xs = [xs]

        while error > tol and fe != 0 and c < niter:
            if fi * fe < 0:
                xs = xm
                fs = f(xs)
            else:
                xi = xm
                fi = f(xi)

            xa = xm
            xm = (xi + xs) / 2
            fm.append(f(xm))
            fe = fm[c + 1]
            if tipo_e == 0: E.append(abs( (xm - xa)/xm )) #Realitvo
            if tipo_e == 1: E.append(abs(xm - xa)) #absoluto
            error = E[c + 1]
            val_xi.append(xi)
            val_xs.append(xs)
            c += 1

        tabla = pd.DataFrame({'val_xi': val_xi, 'val_xs': val_xs, 'E': E, 'fm': fm})

        if fe == 0:
            s = xm
            print(f"{xm} es raiz de f(x)")
            #tabla['E'].iloc[-1] = 0 #Esto es nuevo
            tabla.iloc[-1, tabla.columns.get_loc('E')] = 0  #Tiene forma tan absurda por error pandas
        elif error < tol:
            s = xm
            print(f"{xm} es una aproximación de una raiz de f(x) con una tolerancia de {tol}")
        else:
            s = xm
            print(f"Fracasó en {niter} iteraciones")
    else:
        print("El intervalo es inadecuado")
        return (None, None)
    
    return tabla, s

if __name__ == "__main__":
    # Example usage:
    def f(x):
        return x-1.5
    xi = -1  # Lower bound
    xs = 7  # Upper bound
    tol = 10e-5  # tolerance
    niter = 100  # Maximum number of iterations
    tabla, s= biseccion(f, xi, xs, tol, niter,1)
    print(tabla)
    #print(s)