import sleep from './sleep'

// async function bubble(array, updateLine, SLEEP) {
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

function insertionSort(array, updateLine, SLEEP) {
    const length = array.length;
      for (let i = 0; i < length; i++) {
          if (array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
        if (array[i] < array[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (array[i] >= array[j-1] && array[i] < array[j]) {
              //move number to the right spot
              array.splice(j,0,array.splice(i,1)[0]);
            }
          }
        }
      }
      }
  }

export default insertionSort
