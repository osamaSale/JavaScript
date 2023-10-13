// Bubble Sort

/* 
Bubble Sort

A simple sorting algorithm that repeatedly steps through the list, 
compares adiacent elements, and swaps them if they are in the wrong order.
*/


function bubbleSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var tempValue = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempValue;
            }
        }
    }
    return arr
}

/* 

console.log(bubbleSort([5, 6, 3, 1, 2, 4]))
// [1,2,3,4,5,6]
console.log(bubbleSort([5, 6, 3, 1, 2, 4]))
// [1,2,3,4,5,6]
console.log(bubbleSort([12, 10, 3, 7, 4]))
// [3,4,7,10,12] 

*/