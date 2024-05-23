import matplotlib.pyplot as plt
import numpy as np

#Grafica para interpolaciones. Le agrega al eje x un 1/6 menos del punto menor, y 1/6 más del punto mayor.
def graficar(f, x, y, title=None):
    ancho = max(x)-min(x)
    x_new = np.arange(min(x)-(ancho/6), max(x)+(ancho/6), 0.001)
    fig = plt.figure(figsize = (10,8))
    plt.plot(x_new, f(x_new), 'b', x, y, 'ro')
    plt.title(title)
    plt.grid()
    plt.xlabel('x')
    plt.ylabel('y')
    plt.show()

def graficar_spline(list_f, x, y, title='Interpolacion Spline'):

    #Esto es si los vectores x, y original estan ordenados de menor a mayor
    if x[0] < x[1]:
        y=y[::-1]
        x=x[::-1]
        list_f=list_f[::-1]
    
    fig = plt.figure(figsize = (10,8))
    for i in range(len(list_f)):
        x_new = np.arange(x[i+1], x[i], 0.001)
        plt.plot(x_new, list_f[i](x_new), 'b', x, y, 'ro')
    plt.title(title)
    plt.grid()
    plt.xlabel('x')
    plt.ylabel('y')
    plt.show()