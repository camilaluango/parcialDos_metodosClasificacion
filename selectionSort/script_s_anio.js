function seleccionSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j].anio < arr[minIndex].anio){
                minIndex = j
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    } return arr;
} 
const libros = [
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
];

console.log(seleccionSort(libros))

console.time("seleccion por año");
const librosOrdenados = seleccionSort(libros);
console.timeEnd("seleccion por año");
