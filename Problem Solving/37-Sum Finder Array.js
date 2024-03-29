// [1] From a unsorted array, check whether there are any two numbers that will sum up to a given number?

function sumFinder(arr, sum) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] + arr[j] === sum) {
          return true;
        }
      }
      return false;
    }
  }
/*   
  console.log(sumFinder([6, 4, 3, 2, 1, 7], 9)); // true
  console.log(sumFinder([4, 5], 9)); // true
  console.log(sumFinder([4, 3], 9)); // false
 */
  module.exports = { sumFinder }