// [1] Find The Missing Letter

const findMissingLetterIn = (givenLetters) => {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(givenLetters[0]);
    for (let i = 0; i < givenLetters.length; i++) {
    
      if (givenLetters[i] !== alpha[start + i]) {
        return alpha[start + i];
      }
    }
    return "No Missing Letter In Sequence";
}


/* console.log(findMissingLetterIn("abc"));
console.log(findMissingLetterIn("defgi")); // h
console.log(findMissingLetterIn("abcdeghi")); // f
console.log(findMissingLetterIn("xyz")); // No Missing Letter In Sequence
 */
module.exports = { findMissingLetterIn }