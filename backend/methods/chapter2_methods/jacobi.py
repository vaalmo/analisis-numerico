import numpy as np
import pandas as pd

def jacobi(A, b, x0, tol, niter, tipo_e):
    # Componentes de la matriz A
    D = np.diag(np.diag(A))
    L = -np.tril(A, k=-1)
    U = -np.triu(A, k=1)
    
    c = 0  # Contador de iteraciones
    E = []  # Los errores en cada iteración
    n = []  # El número de iteración
    s = []  # Las soluciones intermedias

    error = tol + 100
    while error > tol and c < niter:
        # Calculo de la siguiente iteración
        T = np.linalg.inv(D) @ (L + U)
        print()
        C = np.linalg.inv(D) @ b
        x1 = T @ x0 + C
        radio = np.max(np.abs(np.linalg.eigvals(T)))

        # Calculo del error segun el tipo
        if tipo_e == 1:
            E.append(np.linalg.norm(x1 - x0, None))
        else: 
            E.append(np.linalg.norm((x1 - x0), None)/np.linalg.norm(x1, None))

        error = E[-1]
        x0 = x1  # Actualización de la solución anterior
        c += 1  # Incremento del contador de iteraciones
        n.append(c)  # Almacenamiento del número de iteración
        s.append(str(x0))  # Almacenamiento de la solución intermedia

    if error < tol:
        tabla = pd.DataFrame({'n': n, 'x': s, 'Error': E})
        return tabla
    
    else:
        # Si el método no converge lanza una excepción
        raise ValueError(f"Fracasó en {niter} iteraciones")
    
    
    

"""if __name__ == "__main__":
    A = [
        [100,1,3],
        [-20,40,12],
        [-10,-10,40]
        ]
    b = [100, 100, 200]
    x0 = [0,0,0]
    tol = 5*10**(-3)
    niter = 100
    tabla = jacobi(A, b, x0, tol, niter, 1)
    print(tabla)"""