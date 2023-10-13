// Merge Sort

/* 
Merge Sort
Another efficient sorting algorithm that uses a divide-and-conquer
approach.

*/

/* 
Best-case Time Complexity of Merge Sort: O(nlog(n))

Average-case Time Complexity of Merge Sort: O(nlog(n))

Worst-case Time Complexity of Merge Sort: O(nlog(n))

 */
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

// console.log("Merge Sort function", mergeSort([3, 5, 8, 5, 99, 1])) // [1, 3, 5, 5, 8, 99]

function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

// console.log("Merge",merge([1, 4], [2, 6, 9])) // [1, 2, 4, 6, 9]