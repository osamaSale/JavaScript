/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/
const longestWordString = (sen) => {
    let result = ""
    let word = sen.split(" ")
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > result.length) {
            result = word[i]
        }
    }


    return result
}

/* console.log(longestWordString("osama need")); //osama
console.log(longestWordString("lol time")); // => 'time'
console.log(longestWordString("I love cats")); // => 'love'
console.log(longestWordString("coding is awesome")); // => 'awesome'
console.log(longestWordString("hello world")); // => 'hello'
 */


module.exports = { longestWordString }