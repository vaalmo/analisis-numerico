import sympy as sp
import pandas as pd

def sec(fun, x0, x1, tol, niter, tipo_e):
    x = sp.symbols('x')
    f = sp.sympify(fun)
    
    if tipo_e == 1: err = abs(x1 - x0)  # Error absoluto
    if tipo_e == 0: err = abs((x1 - x0) / x1)  # Error relativo
    c = 1  # Contador de iteraciones
    # Inicializar listas para almacenar resultados
    v_x0 = [x0]
    v_x1 = [x1]
    v_fx0 = [float(f.subs(x, x0))]
    v_fx1 = [float(f.subs(x, x1))]
    v_E = [err]
    
    while err > tol and c < niter:
        fx0 = float(f.subs(x, x0))
        fx1 = float(f.subs(x, x1))
        x2 = x1 - fx1 * (x1 - x0) / (fx1 - fx0)
        x0 = x1
        x1 = x2
        
        if tipo_e == 1: err = abs(x1 - x0)  # Error absoluto
        if tipo_e == 0: err = abs((x1 - x0) / x1)  # Error relativo
        root = x2
        c += 1
        
        v_x0.append(x0)
        v_x1.append(x1)
        v_fx0.append(float(f.subs(x, x0)))
        v_fx1.append(float(f.subs(x, x1)))
        v_E.append(err)

    #print(f' 33333La raiz es {root:.3f}')
    if float(f.subs(x, root)) == 0:
        print(f'{root} es raiz de f(x)')
    elif err < tol:
        print(f'{root} es una aproximación de una raiz de f(x) con una tolerancia de {tol}')
    else:
        print(f'Fracasó en {niter} iteraciones')  
    
    # Crear tabla con pandas
    tabla = pd.DataFrame({'x0': v_x0,'x1': v_x1,'fx0': v_fx0,'fx1': v_fx1,'E': v_E})
    return [[tabla.columns.values.tolist()] + tabla.values.tolist(), root]

"""if __name__ == "__main__":
    # Ejemplo de uso
    x = sp.symbols('x')
    fun = -92 + 2**(-x)*(-1+x) + x**(2/3)
    x0 = 92
    x1 = 102
    tol = 5*1e-6
    niter = 20
    tabla, s = sec(fun, x0, x1, tol, niter,1)
    print(tabla)
    print(s)"""