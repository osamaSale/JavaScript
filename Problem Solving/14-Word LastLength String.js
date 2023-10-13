// [1] Word Before Last Length

const lessWordString = (str) => {
      // Your Code
  // remove space
  let word = str.split(" ").filter((e) => e.length > 1);
  let result = [];
  for (let i = 0; i < word.length; i++) {
    // check if length of data less than or equal one
    if (word.length <= 1) {
      return false;
      // if i have 2 word only i will return first one
    } else if (word[i].length > 2) {
      result = word[i - 1];
    }
  }
  // output
  return result + " => " + result.length;
}


/* console.log(lessWordString("Elzero Web School")); // Web => 3
console.log(lessWordString("Hello Elzero Web School    A ")); // Web => 3
console.log(lessWordString("Hello Elzero    Web   School  ")); // Web => 3
console.log(lessWordString("Hello")); // False
console.log(lessWordString("Hello Elzero")); // Hello
console.log(lessWordString("Hello Elzero    A")); // Hello */



module.exports = { lessWordString }