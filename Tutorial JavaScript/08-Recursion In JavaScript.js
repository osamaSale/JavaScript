
// Recursion In JavaScript

// Practice
const sumCubes = function (numbers) {
  if (!numbers.length) {
    return 0;
  }
  return Math.pow(numbers[0], 3) + sumCubes(numbers.slice(1));
};

// sumCubes([1, 2]);
// sumCubes([1, 2, 3]);
// sumCubes([5, 3, 3]);
// sumCubes([]);

const factorial = function (number) {
  if (!number) {
    return 1;
  }
  return number * factorial(number - 1);
};

// factorial(5);
// factorial(3);
// factorial(1);
// factorial(0);

const getLength = function (string) {
  if (!string.length) {
    return 0;
  }
  return 1 + getLength(string.slice(1));
};

// getLength("hello"); // => 5
// getLength("John"); // => 4
// getLength(""); // => 0

const countCharacter = function (string, character) {
  if (!string.length) {
    return 0;
  }
  if (string[0] === character) {
    return 1 + countCharacter(string.slice(1), character);
  }
  return countCharacter(string.slice(1), character);
};

// countCharacter("hello", "l"); // => 2
// countCharacter("hello", "e"); // => 1
// countCharacter("hello", "z"); // => 0

const oddOrEven = function (number) {
  if (number === 1) {
    return "Number is odd";
  }
  if (number === 0) {
    return "Number is even";
  }
  return oddOrEven(number - 2);
};

// oddOrEven(8);
// oddOrEven(1);

// Extra Practice
const maximumNumber = function (numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  if (numbers[0] > numbers[1]) {
    numbers.splice(1, 1);
  } else {
    numbers.splice(0, 1);
  }
  return maximumNumber(numbers);
};

// maximumNumber([0, 5, 2, 10, 8, 6]);

const multiply = function (numberOne, numberTwo) {
  if (!numberTwo) {
    return 0;
  }
  return numberOne + multiply(numberOne, numberTwo - 1);
};

// multiply(2, 3);
// multiply(4, 5);

const family = {
  name: "John",
  child: {
    name: "Bill",
    child: {
      name: "Mark",
      child: {
        name: "Terry",
        child: null,
      },
    },
  },
};

const familyTree = function (family) {
  if (!family.child) {
    return family.name;
  }
  return family.name + " " + familyTree(family.child);
};

// familyTree(family); // => "John Bill Mark Terry"

const flattenArray = function (array) {
  if (array.length === 1 && !Array.isArray(array[0])) {
    return [array[0]];
  }
  if (Array.isArray(array[0])) {
    return flattenArray(array[0]);
  }
  return [array[0]].concat(flattenArray(array.slice(1)));
};

// flattenArray([1, 2, 3, [4, 5, [6, 7]]]);
// flattenArray([[1, 2, [3, 4]]]);