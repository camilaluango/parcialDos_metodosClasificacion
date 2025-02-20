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
