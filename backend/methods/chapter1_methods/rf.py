#import sympy as sp
import pandas as pd
import numpy as np
import math

def rf(f, ak, bk, tol, niter, tipo_e):
    #x = sp.symbols('x')
    #f = -sp.log(x) + 2 - sp.exp(-2*x + 2)
    #fa = f.subs(x, ak).evalf()
    #fb = f.subs(x, bk).evalf()
    fa = f(ak)
    fb = f(bk)
    
    if fa == 0:
        s = fa
        E = 0
        print(f'{fa} is a root of f(x)')
        tabla = pd.DataFrame({'val_a': [ak], 'val_b': [bk], 'E': [0], 'fm': [fa]})
    elif fb == 0:
        s = fb
        E = 0
        print(f'{fb} is a root of f(x)')
        tabla = pd.DataFrame({'val_a': [ak], 'val_b': [bk], 'E': [0], 'fm': [fb]})
    elif fa * fb < 0:
        c = 0
        ck = ((fb*ak) - (fa*bk)) / (fb - fa)
        val_a = [ak]
        val_b = [bk]
        #fm = [f.subs(x, ck).evalf()]
        fm = [f(ck)]
        fe = fm[0]
        E = [tol + 1]
        error = E[0]
        
        while error > tol and fe != 0 and c < niter:
            if fa * fe < 0:
                bk = ck
                #fb = f.subs(x, bk).evalf()
                fb = f(bk)
            else:
                ak = ck
                #fa = f.subs(x, ak).evalf()
                fa = f(ak)
            xa = ck
            ck = ((fb*ak) - (fa*bk)) / (fb - fa)
            #fm.append(f.subs(x, ck).evalf())
            fm.append(f(ck))
            fe = fm[-1]
            if tipo_e == 0: E.append(abs( (ck - xa)/ck )) #Realitvo
            if tipo_e == 1: E.append(abs(ck - xa)) #absoluto
            
            error = E[-1]
            val_a.append(ak)
            val_b.append(bk)
            c += 1
        
        data = {'a': val_a, 'b': val_b, 'E': E, 'fc': fm}
        tabla = pd.DataFrame(data)
        
        if fe == 0:
            s = ck
            print(f'{ck} es raiz de f(x)')
        elif error < tol:
            s = ck
            print(f'{ck} es una aproximación de una raiz de f(x) con una tolerancia de {tol}')
        else:
            s = ck
            print(f'Fracasó en {niter} iteraciones')
    else:
        tabla = None
        s = None
        print('El intervalo es inadecuado')

    return [[tabla.columns.values.tolist()] + tabla.values.tolist(), s]


"""if __name__ == "__main__":
    def f(x):
        return -np.log(x)+2-math.e**(-2*x+2)

    ak = 0.1
    bk = 2
    tol = 1e-5  # tolerance
    niter = 100  # Maximum number of iterations
    tabla, s = rf(f, ak, bk, tol, niter, 1)
    print(tabla)"""