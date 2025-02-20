# METODOS DE ORDENAMIENTO JAVASCRIPT
# Bubble Sort

Este repositorio contiene una implementación del algoritmo de ordenamiento Bubble Sort en JavaScript. El algoritmo Bubble Sort se utiliza para ordenar una lista de objetos según un atributo específico, en este caso, el año (`anio`) de los libros en una colección.

## Descripción del Código

El código principal consiste en una función `bubbleSort` que toma un arreglo de objetos y los ordena en función del atributo `anio`. Además, se incluye un ejemplo de uso de esta función con una lista de libros.

### Función `bubbleSort`

La función `bubbleSort` recorre el arreglo varias veces, comparando y cambiando de posición los elementos adyacentes si están en el orden incorrecto. El proceso se repite hasta que el arreglo esté completamente ordenado.

#### Código:
```javascript
const bubbleSort = (array) => {
    let swapped;
    for (let i = array.length - 1; i > 0; i--){
        swapped = false;

        for (let j = 0; j < i; j++){
            if (array[j].anio > array[j + 1].anio){
                [array[j], array[j + 1]]=
                [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}
````
### Ejemplo de Uso

La siguiente sección muestra cómo se puede utilizar la función `bubbleSort` para ordenar una lista de libros.

#### Lista de libros:
```javascript
const libros = [
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
];
````

### Medición del Tiempo de Ordenamiento

El código también incluye una manera de medir el tiempo que toma el algoritmo para ordenar la lista de libros.

#### Código:
```javascript
console.time("bubbleSort por año");
const librosOrdenados = bubbleSort(libros);
console.timeEnd("bubbleSort por año");
````

# Insertion Sort

Este repositorio contiene una implementación del algoritmo de ordenamiento Insertion Sort en JavaScript. El algoritmo Insertion Sort se utiliza para ordenar una lista de objetos según un atributo específico, en este caso, el año (`anio`) de los libros en una colección.

## Descripción del Código

El código principal consiste en una función `insertionSort` que toma un arreglo de objetos y los ordena en función del atributo `anio`. Además, se incluye un ejemplo de uso de esta función con una lista de libros.

### Función `insertionSort`

La función `insertionSort` recorre el arreglo y, en cada iteración, coloca el elemento actual en su posición correcta respecto a los elementos anteriores ya ordenados. El proceso se repite hasta que el arreglo esté completamente ordenado.

#### Código:
```javascript
function insertionSort(arr){
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let key = arr[i].anio;
        let j = i - 1;
        while (j >= 0 && arr[j].anio > key){
            arr[j + 1].anio = arr[j].anio;
            j = j - 1;
        }
        arr[j + 1].anio = key; 
    }
    return arr;
}
````
### Medición del Tiempo de Ordenamiento

El código también incluye una manera de medir el tiempo que toma el algoritmo para ordenar la lista de libros.

#### Código:
```javascript
console.time("insercion por año");
const librosOrdenados = insertionSort(libros);
console.timeEnd("insercion por año");
````

# Selection Sort en JavaScript

Este repositorio contiene una implementación del algoritmo de ordenamiento Selection Sort en JavaScript. El algoritmo Selection Sort se utiliza para ordenar una lista de objetos según un atributo específico, en este caso, el año (`anio`) de los libros en una colección.

## Descripción del Código

El código principal consiste en una función `seleccionSort` que toma un arreglo de objetos y los ordena en función del atributo `anio`. Además, se incluye un ejemplo de uso de esta función con una lista de libros.

### Función `seleccionSort`

La función `seleccionSort` recorre el arreglo y, en cada iteración, selecciona el elemento mínimo y lo coloca en su posición correcta. El proceso se repite hasta que el arreglo esté completamente ordenado.

#### Código:
```javascript
function seleccionSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j].anio < arr[minIndex].anio){
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    } return arr;
}
````
### Medición del Tiempo de Ordenamiento

El código también incluye una manera de medir el tiempo que toma el algoritmo para ordenar la lista de libros.

#### Código:
```javascript
console.time("seleccion por año");
const librosOrdenados = seleccionSort(libros);
console.timeEnd("seleccion por año");
````
