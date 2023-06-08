import sleep from './sleep'

// async function bubbleSort(array, updateLine, SLEEP) {
//   let k = 1;
//   while (k) {
//     k = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
        
//         [array[i], array[i+1]] = [array[i+1], array[i]] //Swap
//         k=1

//         updateLine(i, array[i]);
//         updateLine(i + 1, array[i + 1]);

//         await sleep(SLEEP);
//       }
//     }
//   }
// }


function mergeSort (array, updateLine, SLEEP) {
    if (array.length === 1) {
      return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle) 
    const right = array.slice(middle)
    // console.log('left:', left);
    // console.log('right:', right);
    
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
       if(left[leftIndex] < right[rightIndex]){
         result.push(left[leftIndex]);
         leftIndex++;
       } else{
         result.push(right[rightIndex]);
         rightIndex++
      }
    }  
    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

export default mergeSort
