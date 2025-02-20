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