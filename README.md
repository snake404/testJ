# Ejecución
Para ejecutar el programa solamente hay que abrir el archivo `index.html` y los resultados se verán en la consola del explorador

# Análisis de complejidad
### Problema 1
Básicamente lo que hice fue primero setear el menor número negativo que hay en javascript, a partir de eso sacar el número máximo de cada iteración y si en la iteración n + 1 el máximo ya no lo era, setear el nuevo número máximo y meter dicho valor de la iteración en el arreglo temporal, en caso contrario se limpiaba el arreglo temporal, al final de cada iteración se comparaba el tamaño de los arreglos para así sacar el resultado.

O(1) en espacio, no creamos N objetos
O(n) en tiempo, recorremos todo el array

### Problema 2
En ambas versiones saqué solamente la suma desde n hasta m

- Versión recursiva
O(n) tanto en espacio como en tiempo, cada llamada que se hace se guarda en el stack, y en tiempo porque tenemos que recorrer todo el array,

- Version iterativa
O(1) en espacio, no creamos N objetos
O(n) en tiempo, recorremos todo el array

### Problema 3
Aquí se tenía que ordenar primero el arreglo de menor a mayor, luego recorrer el array para ver si hay números duplicados ya que se requería el k-esimo número mayor.

O(1) en espacio, no creamos N objetos
O(n) en tiempo, recorremos todo el array

### Problema 4
Aquí solamente le pasabamos el arreglo al constructor del `Set`, ya que dicha estructura en automático quita los elementos duplicados

O(1) en espacio, solamente creamos un objeto
O(n) en tiempo, ya que el `Set` tiene que recorrer todo el array para poder quitar los duplicados

### Problema 5
Primero pasé el string a un array para así poder recorrerlo, luego verificamos si el caracter actual cerraba, si era así sacamos el elemento del stack, dicho caracter lo comparamos para ver si abría, en esos casos el string no estaba balanceado, ahora en el else del primer if, solamente metemos al stack, al final si el stack tiene tamaño cero es que el string está bien balanceado

O(1) en espacio, no creamos N objetos
O(n) en tiempo, tenemos que recorrer todo el array para obtener lo deseado
