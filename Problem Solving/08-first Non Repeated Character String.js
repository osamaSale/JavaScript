/* first Non RepeatedCharacter */

/*  
[1] Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/
// [2] How could you find the first non repeating char in a string?

const firstNonRepeatedCharacter = (str) => {
    let duplicateNonCharacter = ""
    if(str === ""){
        return "sorry"
    }
    for (let i = 0; i < str.length; i++) {
        if (duplicateNonCharacter.indexOf(str[i]) === -1 && str.indexOf(str[i], i + 1) == -1) {
            duplicateNonCharacter += str[i]
        }
    }

    return duplicateNonCharacter[0]
}

/* 
console.log(firstNonRepeatedCharacter("ABCDBIRDUP")); // => 'A'
console.log(firstNonRepeatedCharacter("ALABAMA")); // => 'L'
console.log(firstNonRepeatedCharacter("Uber for horses")); // => 'U'
console.log(firstNonRepeatedCharacter("")); // => 'sorry'
console.log(firstNonRepeatedCharacter("abacddbec")); // e
 */
module.exports = { firstNonRepeatedCharacter }