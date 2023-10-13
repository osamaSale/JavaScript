// Quick Sort


/* 
Quick Sort
A fast sorting algorithm that uses a divide-and-conquer strategy to sort
elements.

*/

function quickSort(arr) {
    if (arr.length <= 1) return arr
    const pivot = arr[0]
    const left = []
    const rigth = []
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : rigth.push(arr[i])
    }
    return quickSort(left).concat(pivot, quickSort(rigth))
}

/* 
console.log(quickSort([1, 24, 5, 7, 8])) // [1, 5 , 7 , 8 , 24]
console.log(quickSort([10, 7, 8, 9, 1, 5])) // [1 , 5 , 7 , 8 , 9 , 10]
 */

