// Functions In JavaScript


/* ==================================================================== */
/* ========================= Practice Section ========================= */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Figure out the syntax errors in the following functions, and fix them
const myFunction = function parameter) {}
// => missing ( before the parameter
const my Second Function = function (parameter) {}
// => the name should be mySecondFunction
const function = function (parameter) {}
// => cant use reserved word function as a name of this function
we can name it functionSum
const functionName = function (paramOne paramTwo) {}
// => missing , between paramOne and paramTwo
*/

/* ================================ Q2 ================================ */
/* 
Write a function fullName that accepts string arguments, firstName and lastName then returns a string containing your full name combined
*/

const fullName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};


/* 
console.log(fullName("John", "Doe")); // => "John Doe"
console.log(fullName("Mark", "Smith")); // => "Mark Smith"
 */

/* ================================ Q3 ================================ */
/*
Write a function average that accepts two number arguments and returns the average of these numbers
*/

const average = function (a, b) {
    return (a + b) / 2;
};

/* 
console.log(average(20, 25)); // => 22.5
console.log(average(15, 7)); // => 11
*/

/* ================================ Q4 ================================ */
/* 
Using the defined functions below and your average function to guess the output of the following expressions
*/

const square = function (number) {
    return number * number;
};

const cube = function (number) {
    return number * number * number;
};

/* 
cube(25) + 20; // => 15645
square(5) + cube(2); // => 33
square(10 / 5) + cube(2 + 1); // => 31
average(square(average(6, 2)), cube(4)); // => 40 
*/

/* ================================ Q5 ================================ */
/*
Write a function toThePowerOf that accepts two number arguments, base, exponent and returns the base to the exponent power.
HINT: Look up Math.pow() on MDN
*/

const toThePowerOf = function (base, exponent) {
    return Math.pow(base, exponent);
};

/* 
toThePowerOf(2, 3); // => 8
toThePowerOf(4, 2); // => 16
*/

/* ==================================================================== */
/* ====================== Extra Practice Section ====================== */
/* ==================================================================== */

/* ================================ Q1 ================================ */
/* 
Write a function floor that accepts one number argument, number and returns the number as an integer.
HINT: Look up Math on MDN and find the correct built in method to use.
*/

const floor = function (number) {
    return Math.floor(number);
};

/* 
floor(5); // => 5
floor(2.4); // => 2
floor(0.2); // => 0
floor(1.7); // => 1 
*/

/* ================================ Q2 ================================ */
/*
Write a function calculateProfit that accepts three arguments unitsSold, unitCost, unitPrice and returns the net profit.
*/

const calculateProfit = function (unitsSold, unitCost, unitPrice) {
    return unitsSold * (unitPrice - unitCost);
};

/* 
calculateProfit(10, 5, 15); // => 100
calculateProfit(4, 2, 5); // => 12 
*/

/* ================================ Q3 ================================ */
/*
Write a function calculateTotalBillAmount that accepts three arguments total, taxPercentage, tip and returns the total after adding the tax and the tip.
*/

const calculateTotalBillAmount = function (total, taxPercentage, tip) {
    return total * (1 + taxPercentage) + tip;
};

/* 
console.log(calculateTotalBillAmount(10, 0.16, 0)); // => 11.6
console.log(calculateTotalBillAmount(40, 0.16, 2)); // => 48.4
*/

/* ================================ Q4 ================================ */
/* 
Write a function ageInDays that accepts a number argument ageInYears and returns the age in days (ignore leap years).
*/
const ageInDays = function (ageInYears) {
    return ageInYears * 365;
};


/* 
console.log(ageInDays(10)); // => 3650
console.log(ageInDays(19)); // => 6935
*/

/* ================================ Q5 ================================ */
/*
Write two functions calculateConeVolume and calculateConeSurfaceArea that accepts two number arguments height and radius and returns the volume and surface area for a Right Circular Cone
*/

const calculateConeVolume = function (height, radius) {
    return Math.PI * radius ** 2 * (height / 3);
};

const calculateConeSurfaceArea = function (height, radius) {
    return Math.PI * radius * (radius + (height ** 2 + radius ** 2) ** 0.5);
};


// your solution's return value might differ depending on the equation you used or the rounding,
// in the following invocations the output is just an estimate not the exact value.

/* 
console.log(calculateConeVolume(10, 6)); // => ≈ 376 || 376.99 || 376.9911184307752
console.log(calculateConeSurfaceArea(10, 6)); // => ≈ 332 || 332.91 ||332.91904316461034
 */
