function insertionSort(arr){
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let key = arr[i].reservas;
        let j = i -1;
        while (j >= 0 && arr[j].reservas > key){
            arr[j + 1].reservas = arr[j].reservas;
            j = j - 1
        }
        arr[j + 1].reservas = key; 
    }
    return arr;
    
}
const libros = [
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
]

console.log(insertionSort(libros))
console.time("insercion por reservas");
const librosOrdenados = insertionSort(libros);
console.timeEnd("insercion por reservas");
