// Arrays in JavaScript

// Arrays
// Practice

const reverseWords = function (string) {
    return string.split(' ').reverse();
}

// reverseWords("Hello"); 
// reverseWords("Hello World"); 

const addToLast = function (array, value) {
    array.reverse();
    array.unshift(value);
    return array.reverse();
};
// addToLast([1, 2, 3], 4);
// addToLast([10, 6], 1); 

const getLength = function (array) {
    // return array.push() - 1;
    return array.push();
};

// getLength([1, 2, 3, 4]);

const getFirstVal = function (array) {
    return array.shift();
};

// getFirstVal([1, 2, 3, 4]); 

const updateOrCreate = function (array, value, index) {
    array[index] = value;
    return array;
};

// updateOrCreate([10, 20, 30], 50, 1); 
// updateOrCreate([10, 20, 30], 40, 3); 
// updateOrCreate([10, 20, 30], 100, 10); 

const sliceArray = function (array, startVal, endVal) {
    const startIndex = array.indexOf(startVal);
    let endIndex = array.indexOf(endVal);
    // if startIndex is equal to endIndex then endIndex stays the same otherwise 
    // endIndex gets incremented by 1 (third case)
    endIndex = startIndex === endIndex ? endIndex : endIndex + 1;
    return array.slice(startIndex, endIndex);

};
// sliceArray([10, 20, 30, 40, 50, 60], 10, 60); 
// sliceArray([10, 20, 30, 40, 50, 60], 20, 40); 
// sliceArray([10, 20, 30, 40, 50, 60], 20, 20); 
// sliceArray([10, 20, 30, 40, 50, 60], 50, 20); 

// Extra Practice

const isPalindrome = function (string) {
    string = string.split(' ').join('');
    return string === string.split('').reverse().join('');
};

// isPalindrome("dad"); // => true
// isPalindrome("was it a car or a cat i saw"); // => true
// isPalindrome("a santa at nasa"); // => true
// isPalindrome("John doe"); // => false

const randomFruit = function (array) {
    const randomIndex = Math.ceil(Math.random() * array.length - 1);
    return array[randomIndex];
};

//const fruits = ["Apple", "Banana", "Strawberry", "Mango"];

// randomFruit(fruits); 
// randomFruit(fruits); 
// randomFruit(fruits); 
// randomFruit(fruits);

const convertToString = function (array) {
    return array.join(' ')
};

// convertToString(["Hello", "i", "am", "John", "Doe"]);
// convertToString(["Hello", "John", "i", "am", "Jane"]); 


const search = function (array, string) {
    // if there is a value then return true otherwise false
    return array[array.indexOf(string)] ? true : false;
};

const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
/* 
console.log(search(fruits, "Apple"));
console.log(search(fruits, "Banana"));
console.log(search(fruits, "John"));
 */