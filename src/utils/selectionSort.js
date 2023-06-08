import sleep from './sleep'

async function selectionSort(array, updateLine, SLEEP) {
    let min;
    for(let i=0; i<array.length; i++){
      min = i
      for(let j=i+1 ; j<array.length; j++){
        if(array[j] < array[min]) min=j; 
      }

      [array[i], array[min]] = [array[min], array[i]] //Swap

      updateLine(i, array[i]);
      updateLine(min, array[min]);

      await sleep(SLEEP);
    }
}

export default selectionSort
