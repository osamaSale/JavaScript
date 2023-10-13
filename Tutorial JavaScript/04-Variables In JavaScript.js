// Variables In JavaScript
  


/* ==================================================================== */
/* ======================= Pulse Check Section ======================== */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Write the difference between const and let.
*/
/* 
// the difference between const and let is that when using const it won't allow a new value to be reassigned to the variable,
// while when using let it allows the reassignment of values for the same variable
*/

/* ================================ Q2 ================================ */
/* 
Define the following variables.
*/
// 1- define a variable `color` containing your favorite  color
const color = 'blue';

// 2- define a variable `positiveNumber`containing any positive number
const positiveNumber = 75;

// 3- define a variable `isLoggedIn` containing a boolean value
const isLoggedIn = true;

// 4- define a variable `PhoneNumber` containing your phone number
const PhoneNumber = '0787146815';

/* ================================ Q3 ================================ */
/* 
Reassign the value of the following variables.
*/
// 1- reassign the value to `Toyota`
let myCar = 'Nissan';
myCar = 'Toyota';

// 2- reassign the value to a negative number
let negativeNumber = 102;
negativeNumber = -1;

// 3- reassign the value to your name
let name;
name = 'jouza';

// 4- reassign  the value of `a` to make the following expression equal to nine
let a;
let b = 3;
let c = 10;
a = 29;
c - b * c + a;

/* ================================ Q4 ================================ */
/* 
Create the following expressions.
*/

// 1- create an expression to calculate the average grade for a class by using the following variables
const totalClassGrades = 877;
const numberOfStudents = 10;
const avgGrade = totalClassGrades / numberOfStudents;

// 2- create an expression that represents a full name by using the following variables
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;

// 3- create an expression to calculate your age in seconds using the following variables
const daysInYear = 365;
const HoursPerDay = 24;
const myAgeInSecond = daysInYear * HoursPerDay * 60 * 60 * 25;

/* ==================================================================== */
/* ========================= Practice Section ========================= */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Figure out the syntax errors in the following variable declarations, and fix them.
*/

/* 
let @name = 'John';
// =>cant use @ in the start of variable name
let 'age' = '10';
// => can't use a string as a variable name 
let const = "Constant";
// => cant use const as a name of a variable cause it is a reserved word
let variable 1 = true;
// => cant have a space int he name of the variable
let true = true
// => cant use true as a name of a variable cause it is a reserved word
*/

/* ================================ Q2 ================================ */
/* 
Explain how the following variable declarations work.
*/

/* 
let a;
let b;
let c;
a = b = c = 20; // => a=20 b=20 c=20
a = b = c = 20 + 10; // => a=30 b=30 c=30
(a = b = c = 20) + 10; // => a=20 b=20 c=20
const var3 = 10;
const ourFunction = function () {
  let var1 = 10;
  var2 = 10;
};
ourFunction();
var3; // => 10
var2; // => 10 as var
var1; // => ERROR: is not defined
*/

/* ================================ Q3 ================================ */
/* 
Predict the value of the following variables and explain why
*/

/* 
const d = 10;
d = 20;
d; // => 20
let e = 5;
let f = e;
e = 10;
f; // => 5
let h = 1;
let i = 10;
h = i + 4;
h + 20;
i = h + 10;
h; // => 14
i; // => 24
*/

/* ================================ Q4 ================================ */
/* 
Write a function addToList that accepts a string argument toDo and returns the current list as a string, every time we invoke the function it should return the old toDo item + the new one
*/

let allList = '';
const addToList = function (toDo) {
  if (allList === '') {
    allList = allList + toDo;
  } else {
    allList = allList + ' ' + toDo;
  }
  return allList;
};

/*  
addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat'
*/

/* ================================ Q5 ================================ */
/* 
Write two functions deposit and withdraw that accepts a number argument amount and returns the current account balance
*/

let currentBalance = 0;
const deposit = function (amount) {
  currentBalance = currentBalance + amount;
  return currentBalance;
};

const withdraw = function (amount) {
  currentBalance = currentBalance - amount;
  return currentBalance;
};

/* 
deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30
*/

/* ==================================================================== */
/* ====================== Extra Practice Section ====================== */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Write a function minMax that accepts a number argument number and returns a string representing the maximum number and the minimum number, read the comments for more information.
HINT search for NEGATIVE_INFINITY and POSITIVE_INFINITY on MDN
*/

// every time the function it is called it must check if the passed argument is the maximum number or minimum or
// both and preserve the result for later invocations

let min = Number.POSITIVE_INFINITY;
let max = Number.NEGATIVE_INFINITY;
const minMax = function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
  return 'the maximum number is: ' + max + ' and the minimum number is: ' + min;
};

/*  
minMax(5); // => the maximum number is: 5 and the minimum number is 5
minMax(2); // => the maximum number is: 5 and the minimum number is 2
minMax(3); // => the maximum number is: 5 and the minimum number is 2
minMax(7); // => the maximum number is: 7 and the minimum number is 2
minMax(0); // => the maximum number is: 7 and the minimum number is 0
*/

/* ================================ Q2 ================================ */
/* 
Predict the correct value of the variables.
*/
const num1 = 10;
let num2 = 1;
const functionOne = function () {
  num2 = 20;
  let num3 = 5;
  const functionTwo = function () {
    let num4 = 5;
    num3 = 8;
    num2 = num1 + num2 + num3 + num4;
  };
  functionTwo();
};
const functionThree = function () {
  num1 = 20;
};

functionOne();
// functionThree(); // => will cause an ERROR because we try to reassign const

// num1; // => 10
// num2; // => 43
// num3; // => ERROR: num3 is not defined
// num4: // => ERROR: num4 is not defined
/* ================================ Q3 ================================ */
/* 
Modify the rockPaperScissors function from the previous lesson to save the score of how many times the user has won and how many the user has lost and return the score with every invocation.
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

let totalWin = 0;
let totalLose = 0;

const rockPaperScissors = function (move) {
  // use randomMove to get the value of the random move
  const randomMove = random();
  // randomMove; => rock (use it by referencing the name)
  if (move === randomMove) {
    return 'Won:' + totalWin + ', Lost:' + totalLose;
  } else if (move === 'rock') {
    if (randomMove === 'scissors') {
      totalWin += 1;
      return 'Won:' + totalWin + ', Lost:' + totalLose;
    } else {
      totalLose += 1;
      return 'Won:' + totalWin + ', Lost:' + totalLose;
    }
  } else if (move === 'paper') {
    if (randomMove === 'rock') {
      totalWin += 1;
      return 'Won:' + totalWin + ', Lost:' + totalLose;
    } else {
      totalLose += 1;
      return 'Won:' + totalWin + ', Lost:' + totalLose;
    }
  } else if (move === 'scissors') {
    if (randomMove === 'paper') {
      totalWin += 1;
      return 'Won:' + totalWin + ', Lost:' + totalLose;
    } else {
      totalLose += 1;
      return 'Won:' + totalWin + ', Lost:' + totalLose;
    }
  } else {
    return 'invalid move';
  }
};

/* 
rockPaperScissors("rock"); // => "Won: 1, Lost:0"
*/

/* ================================ Q4 ================================ */
/* 
Modify the rockPaperScissors function to have a score limit such as winning five times then reset the score back to zero.
*/
// a function that randomly outputs `rock` or `paper` or `scissors`
const randomReset = function () {
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

let totalWinReset = 0;
let totalLoseReset = 0;
let scoreLimit = 5;

const rockPaperScissorsReset = function (move) {
  if (totalWinReset + totalLoseReset === scoreLimit) {
    totalWinReset = 0;
    totalLoseReset = 0;
  }
  // use randomMove to get the value of the random move
  const randomMove = randomReset();
  // randomMove; => rock (use it by referencing the name)
  if (move === randomMove) {
    return 'Won:' + totalWinReset + ', Lost:' + totalLoseReset;
  } else if (move === 'rock') {
    if (randomMove === 'scissors') {
      totalWinReset += 1;
      return 'Won:' + totalWinReset + ', Lost:' + totalLoseReset;
    } else {
      totalLoseReset += 1;
      return 'Won:' + totalWinReset + ', Lost:' + totalLoseReset;
    }
  } else if (move === 'paper') {
    if (randomMove === 'rock') {
      totalWinReset += 1;
      return 'Won:' + totalWinReset + ', Lost:' + totalLoseReset;
    } else {
      totalLoseReset += 1;
      return 'Won:' + totalWinPercent + ', Lost:' + totalLoseReset;
    }
  } else if (move === 'scissors') {
    if (randomMove === 'paper') {
      totalWinReset += 1;
      return 'Won:' + totalWinReset + ', Lost:' + totalLoseReset;
    } else {
      totalLoseReset += 1;
      return 'Won:' + totalWinReset + ', Lost:' + totalLoseReset;
    }
  } else {
    return 'invalid move';
  }
};

/*
// lets assume the score limit is set to three
rockPaperScissorsReset("rock"); // => "Won: 2, Lost:2"
rockPaperScissorsReset("rock"); // => "Won: 2, Lost:3"
rockPaperScissorsReset("rock"); // => "Won: 1, Lost:0"
*/

/* ================================ Q5 ================================ */
/* 
Modify the rockPaperScissors function to keep track of the last winner and modify the random function to have a 25% chance of picking the same move if the user have lost the previous round other wise it picks a random move.
*/

// a function that randomly outputs `rock` or `paper` or `scissors`
const random25Percent = function (winningMove) {
  // gets a random number from 1-3
  let result;
  if (isUserLoseLast === true && Math.ceil(Math.random() * 4) === 4) {
    return winningMove;
  } else {
    result = Math.ceil(Math.random() * 3);
  }

  if (result === 1) {
    return 'rock';
  } else if (result === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

let totalWin25Percent = 0;
let totalLose25Percent = 0;
let isUserLoseLast = false;
let lastWinningMove;

const rockPaperScissors25Percent = function (move) {
  if (totalWin25Percent + totalLose25Percent === 5) {
    totalWin25Percent = 0;
    totalLose25Percent = 0;
  }
  // use randomMove to get the value of the random move
  const randomMove = random25Percent(lastWinningMove);
  // randomMove; => rock (use it by referencing the name)
  if (move === randomMove) {
    return 'Won:' + totalWin25Percent + ', Lost:' + totalLose25Percent;
  } else if (move === 'rock') {
    if (randomMove === 'scissors') {
      totalWin25Percent += 1;
      isUserLoseLast = false;
      return 'Won:' + totalWin25Percent + ', Lost:' + totalLose25Percent;
    } else {
      totalLose25Percent += 1;
      isUserLoseLast = true;
      lastWinningMove = randomMove;
      return 'Won:' + totalWin25Percent + ', Lost:' + totalLose25Percent;
    }
  } else if (move === 'paper') {
    if (randomMove === 'rock') {
      totalWin25Percent += 1;
      isUserLoseLast = false;
      return 'Won:' + totalWin25Percent + ', Lost:' + totalLose25Percent;
    } else {
      totalLose25Percent += 1;
      isUserLoseLast = true;
      lastWinningMove = randomMove;
      return 'Won:' + totalWin25Percent + ', Lost:' + totalLose25Percent;
    }
  } else if (move === 'scissors') {
    if (randomMove === 'paper') {
      totalWin25Percent += 1;
      isUserLoseLast = false;
      return 'Won:' + totalWin25Percent + ', Lost:' + totalLose25Percent;
    } else {
      totalLose25Percent += 1;
      isUserLoseLast = true;
      lastWinningMove = randomMove;
      return 'Won:' + totalWin25Percent + ', Lost:' + totalLose25Percent;
    }
  } else {
    return 'invalid move';
  }
};

/* 
rockPaperScissors25Percent("rock"); // => "Won: 0, Lost:1"
// lets assume that the same random move was picked because of the 25% chance
rockPaperScissors25Percent("rock"); // => "Won: 0, Lost:2"
rockPaperScissors25Percent("rock"); // => "Won: 1, Lost:0"
*/