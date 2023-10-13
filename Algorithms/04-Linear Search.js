// Linear Search

/* 
Linear Search
A simple search algorithm that finds the position of a target value within a
list.

*/

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }

    return -1 // Not Found
}

/* 
console.log(linearSearch([1, 2, 3, 4], 1)) // 1
console.log(linearSearch([1, 2, 3, 5, 9], 4)) // -1
console.log(linearSearch([1, 2, 3, 4, 5], 5)) // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)) // 8 
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)) // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)) // -1

 */

