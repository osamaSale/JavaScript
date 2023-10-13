/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/
const longestWordString2 = (sen) => {
    let result = ""
    let word = sen.split(" ")
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > result.length) {
            result = word[i].replace(/[^a-zA-Z ]/gi, "");
        }
    }
    return result
}


/* 
console.log(longestWordString2("lol!- time.")); // => 'time'
console.log(longestWordString2("I** love, cats")); // => 'love'
console.log(longestWordString2("coding&& is awesome")); // => 'awesome'
console.log(longestWordString2("hello|| world")); // => 'hello'
 */

module.exports = { longestWordString2 }