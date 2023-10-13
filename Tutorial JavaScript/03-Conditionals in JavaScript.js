// Conditionals in JavaScript

/* ==================================================================== */
/* ========================= Practice Section ========================= */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Figure out the syntax errors in following, and fix them.
*/
/* 
// 1
if (10 =< 10){
}
// => the less than should be before the equal <=
// 2
if 5 > 3 {
  return "Five bigger than three"
}
// => missing parentheses a round the condition (5 > 3)
// 3
if (false){
}
else(true){
}
// => else statement doesn't take a conditions [without (true)] else alone 
// 4
if (2 < 3 && 7 > 10)
}
// => missing open curly bracket after the condition {
// 5
if ("hello" = "hello"){
}
// => the assign operator = should be is equal operator ===
*/
/* ================================ Q2 ================================ */
/* 
Predict the value of the expression and explain why
*/
/* 
true && true && false;
// => false
true || (true && false);
// => true
5 === 2 || 1 < 10;
// => true
(!false && true) || (!true && true);
// => true
1 < 2 < 3;
// => true
1 < 3 > 2;
// => false
*/
/* ================================ Q3 ================================ */
/* 
Check out the following examples and solve the question
// you could use the `toLowerCase` or `toUpperCase `string methods to check if a string matches without it being case sensitive
"HeLlO wOrlD".toLowerCase() === "hello world"; // => true
"HeLlO wOrlD".toUpperCase() === "hello world".toUpperCase(); // => true
// one handy string property `length` is used to return the length of a string, could be useful
//  if you are expecting the input to be in a certain length for example
"myPassword".length <= 15; // => true
"Hello World".length === 11; // => true, notice how even the empty space " " was counted as a character
// Write a function `login` that accepts two string arguments `username` and `password` and
// returns a string "login successful" if both are valid or return "Invalid login information" with the appropriate reason,
// the function will check the following:
// 1- if the length of the username is greater than 4
// 2- if the username is of the specified usernames below
// 3- if the password length is greater or equal to 8
// 4- if the password is equal to the corresponding password
// keep in mind that usernames don't need to be case sensitive but passwords do
// (username => "MrPotato", password =>"LonelyPotato"),  (username => "theWiseMan", password => "12345678")
*/

const login = function (username, password) {
    if (!(username.length > 4)) {
        return 'Invalid login information, the username length must be greater than 4';
    } else if (!(password.length >= 8)) {
        return 'Invalid login information, the password length must be greater or equal to 8';
    } else if (
        username.toLowerCase() === 'MrPotato'.toLowerCase() &&
        password === 'LonelyPotato'
    ) {
        return 'login successful';
    } else if (
        username.toLowerCase() === 'theWiseMan'.toLowerCase() &&
        password === '12345678'
    ) {
        return 'login successful';
    } else {
        return 'Invalid login information, wrong username or password';
    }
};

/* 
login("MrPotato", "LonelyPotato"); // => login successful
login("mrpotato", "LonelyPotato"); // => login successful
login("MrPotato", "lonelypotato"); // => Invalid login information, wrong password or username
login("MrPotato", "12345678"); // => Invalid login information, wrong password or username
login("MrPotato", "123456"); // => Invalid login information, the password length must be greater or equal to 8
login("mike", "12345678"); // => Invalid login information, the username length must be greater than 4
*/

/* ================================ Q4 ================================ */
/* 
Write a function isLeapYear that accepts a number argument year and returns true if the year is a leap year, leap years are divisible by 4 but non leap years are divisible by 100 for the exception of 400 (leap years are also divisible by 400)
List of LEap Year 1800-20400: 
https://kalender-365.de/leap-years.php
*/

const isLeapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

/* 
isLeapYear(1600); // => true
isLeapYear(1604); // => true
isLeapYear(1804); // => true
isLeapYear(1904); // => true
isLeapYear(2000); // => true
isLeapYear(2004); // => true
isLeapYear(2020); // => true
isLeapYear(2104); // => true
isLeapYear(2304); // => true
isLeapYear(2400); // => true
isLeapYear(1603); // => false
isLeapYear(2021); // => false
isLeapYear(2500); // => false
isLeapYear(2600); // => false
*/

/* ================================ Q5 ================================ */
/* 
Write a function deposit that accepts an argument amount and returns the deposited amount, the function should only accept positive number arguments otherwise return "Please enter a valid number"
HINT: read about how to use typeof on MDN
*/

const deposit = function (amount) {
    if (typeof amount === 'number' && amount > 0) {
        return amount;
    }
    return 'Please enter a valid number';
};

/* 
deposit(100); // => 100
deposit("100"); // => Please enter a valid number
deposit(0); // => Please enter a valid number
deposit(-4); // => Please enter a valid number
deposit(true); // => Please enter a valid number
*/

/* ==================================================================== */
/* ====================== Extra Practice Section ====================== */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Check out the following examples and solve the question..
// since strings store a series of characters in an ordered way
// we could use the index of the character to access the character in the string
// each character in the string has it is own unique identifying number (index),
// the index value starts at zero and for every letter that is added after the first one the index will be incremented by one
"hello"[0]; // => h
"hello"[1]; // => e
"hello"[2]; // => l
"hello"[3]; // => l
"hello"[4]; // => o
// write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character
*/

const startsWith = function (string, character) {
    if (string[0].toLowerCase() === character.toLowerCase()) {
        return true;
    }
    return false;
};

/*
startsWith("Hello", "h"); // => true
startsWith("Hello", "H"); // => true
startsWith("hello", "H"); // => true
startsWith("World", "h"); // => false
startsWith("World", "a"); // => false
startsWith("World", "c"); // => false
*/

/* ================================ Q2 ================================ */
/* 
Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.
*/

const endsWith = function (string, character) {
    if (string[string.length - 1].toLowerCase() === character.toLowerCase()) {
        return true;
    }
    return false;
};

/*
endsWith("Hello", "o"); // => true
endsWith("Hello", "O"); // => true
endsWith("hellO", "o"); // => true
endsWith("World", "h"); // => false
endsWith("World", "a"); // => false
endsWith("World", "c"); // => false
*/

/* ================================ Q3 ================================ */
/* 
Write a function rockPaperScissors that accepts a string argument with only the following values, rock, paper, scissors and returns invalid move if anything else is passed and return you win, you lose, and it is a draw depending on the user input and the random selected move, read the comments for more explanation.
*/
// a function that randomly outputs `rock` or `paper` or `scissors`
const random = function () {
    // gets a random number from 1-3
    const result = Math.ceil(Math.random() * 3);

    if (result === 1) {
        return 'rock';
    } else if (result === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

// make sure to use the function above (random) to get a random output to compare with the user input
/*  
random(); // => rock
random(); // => paper  
random(); // => scissors  
*/

// rock beats scissors
// paper beats rock
// scissors beats paper
const rockPaperScissors = function (move) {
    // use randomMove to get the value of the random move
    const randomMove = random();
    // randomMove; => rock (use it by referencing the name)
    if (move === randomMove) {
        return 'it is a draw';
    } else if (move === 'rock') {
        if (randomMove === 'scissors') {
            return 'you win';
        } else {
            return 'you lose';
        }
    } else if (move === 'paper') {
        if (randomMove === 'rock') {
            return 'you win';
        } else {
            return 'you lose';
        }
    } else if (move === 'scissors') {
        if (randomMove === 'paper') {
            return 'you win';
        } else {
            return 'you lose';
        }
    } else {
        return 'invalid move';
    }
};

/*  
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => you lose
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => it is a draw
rockPaperScissors("asd"); // => 'invalid move'
rockPaperScissors(22); // => 'invalid move'
c// => 'invalid move'
*/

/* ================================ Q4 ================================ */
/* 
Write a function guessTheSquareRoot that accepts two number arguments number, squareRoot and returns a string correct if the guess is correct and returns incorrect if the guess is incorrect.
HINT: search for the correct method to use on MDN
*/
const guessTheSquareRoot = function (number, squareRoot) {
    if (Math.sqrt(number) === squareRoot) {
        return 'correct';
    }
    return 'incorrect';
};

/* 
guessTheSquareRoot(4, 2); // => correct
guessTheSquareRoot(4, 3); // => incorrect
*/

/* ================================ Q5 ================================ */
/* 
Write a function search that accepts two string arguments string, letter and returns true if the letter is inside the string and returns false if it doesn't.
HINT: search for the correct method to use on MDN
*/

const search = function (string, letter) {
    if (string.toLowerCase().search(letter.toLowerCase()) !== -1) {
        return true;
    }
    return false;
};

/* 
console.log(search('Hello', 'E')); // => true
console.log(search('Hello', 'Z')); // => false
 */