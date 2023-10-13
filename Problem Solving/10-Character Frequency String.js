/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/


function characterFrequency(str) {
    let result = {};
    let char = str.split("").sort()
    for (let i = 0; i < char.length; i++) {
        if (result[char[i]] === undefined) {
            result[char[i]] = 1
        } else {
            result[char[i]]+=1
        }
    }

    return result
}


/* console.log(characterFrequency("mississippi")); // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
console.log(characterFrequency("miaaiaaippi")); // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
 */

module.exports = { characterFrequency }