import sleep from './sleep'

async function bubbleSort(array, updateLine, SLEEP) {
  let k = 1;
  while (k) {
    k = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        
        [array[i], array[i+1]] = [array[i+1], array[i]] //Swap
        k=1

        updateLine(i, array[i]);
        updateLine(i + 1, array[i + 1]);

        await sleep(SLEEP);
      }
    }
  }
}

export default bubbleSort
