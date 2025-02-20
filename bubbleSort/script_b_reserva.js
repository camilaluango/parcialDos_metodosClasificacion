const bubbleSort = (array) => {
    let swapped;
    for (let i = array.length - 1; i > 0; i--){
        swapped = false;

        for (let j = 0; j < i; j++){
            if (array[j].reservas > array[j + 1].reservas){
                [array[j], array[j + 1]]=
                [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}
const libros = [
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
   ];

console.log(bubbleSort(libros));

console.time("bubbleSort por reservas");
const librosOrdenados = bubbleSort(libros);
console.timeEnd("bubbleSort por reservas")