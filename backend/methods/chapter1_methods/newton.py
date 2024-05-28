import sympy as sp
import pandas as pd

def newton(fun, x0, tol, niter, tipo_e):
    #x = sp.symbols('x')
    #f = 3*x*sp.log(x+100) + x**2 * sp.log(x+100) + (9*4/16) * sp.log(x+100)
    #df = sp.diff(f, x)
    x = sp.symbols('x')
    f = sp.sympify(fun)
    df = sp.diff(f, x)

    c = 0
    fm = [float(f.subs(x, x0))]
    fe = fm[c]
    dfm = [float(df.subs(x, x0))]
    dfe = dfm[c]
    E = [tol + 1]
    error = E[c]
    xn = x0
    
    vector_x = [xn]
    
    while error > tol and c < niter and f.subs(x, xn) != 0 and df.subs(x, xn) != 0:
        xn = x0 - fe / dfe
        fm.append(float(f.subs(x, xn)))
        fe = fm[c + 1]
        dfm.append(float(df.subs(x, xn)))
        dfe = dfm[c + 1]

        if tipo_e == 0: #Realitvo
            E.append(abs( (xn - x0)/xn ))
        if tipo_e == 1: #absoluto
            E.append(abs(xn - x0))

        error = E[c + 1]
        vector_x.append(xn)
        x0 = xn
        c += 1
    
    tabla = pd.DataFrame({'x': vector_x,'fm': fm,'dfm': dfm,'E': E})
    
    if fe == 0:
        s = x0
        print(f'{x0} es raiz de f(x)')
    elif error < tol:
        s = x0
        print(f'{x0} es una aproximación de una raiz de f(x) con una tolerancia de {tol}')
    elif dfe == 0:
        s = x0
        print(f'{x0} es una posible raiz múltiple de f(x)')
    else:
        s = x0
        print(f'Fracasó en {niter} iteraciones')
    
    return [[tabla.columns.values.tolist()] + tabla.values.tolist(), s]

"""if __name__ == "__main__":
    # Ejemplo de uso
    x = sp.symbols('x')
    fun = x**4 -7 *(x**3) +16*(x**2)- 12*x
    niter = 50
    tol = 1e-4
    x0 = -1
    tabla, s = newton(fun, x0, tol, niter,1)
    print(tabla)
    print(type(tabla))
    print(s)"""