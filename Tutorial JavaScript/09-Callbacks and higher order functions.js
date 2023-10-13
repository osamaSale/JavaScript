
// Callbacks and Higher Order Functions

//Practice
const countWords = function (string) {
  if (!string.length) return {};

  const result = {};
  const words = string.split(" ");
  words.forEach(function (word) {
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  });
  return result;
};

// countWords("hello hello world");
// countWords("hello");
// countWords("");

const averageGrade = function (grades) {
  if (!grades.length) return "Please enter at least one grade";

  return (
    grades.reduce(function (total, element) {
      return total + element;
    }) / grades.length
  );
};

// averageGrade([100, 80, 95, 67, 74]);
// averageGrade([100, 90, 80, 70]);
// averageGrade([]);

const evenLengthOddIndex = function (strings) {
  return strings.filter(function (element, index) {
    return !(element.length % 2) && index % 2;
  });
};

evenLengthOddIndex(["word", "care", "car", "food", "cast", "cat"]);
evenLengthOddIndex(["word", "care", "food", "car", "cast", "cat"]);
evenLengthOddIndex(["word", "cat", "food"]);

const incrementByIndex = function (array) {
  return array.map(function (element, index) {
    return element.map(function (number) {
      return number + index;
    });
  });
};

// incrementByIndex([[1, 2, 3], [2, 7, 9], [10, 3, 44]]);

const orderByType = function (array) {
  const strings = array.filter(function (element) {
    return typeof element === "string";
  });
  const numbers = array.filter(function (element) {
    return typeof element === "number";
  });
  const boolean = array.filter(function (element) {
    return typeof element === "boolean";
  });

  return strings.concat(numbers).concat(boolean);
};

orderByType([1, true, 10, "hello", "world", false, 90, "cat"]);

// Extra Practice

const loop = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// loop([1, 2, 3], function (number) {
//   console.log(number);
// });

const filter = function (array, callback) {
  const newArray = [];
  loop(array, function (element) {
    if (callback(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// filter([1, 2, 3], function (number) {
//   return number > 1;
// });

const map = function (array, callback) {
  const newArray = [];
  loop(array, function (element) {
    newArray.push(callback(element));
  });
  return newArray;
};

// map([1, 2, 3], function (number) {
//   return number * 10;
// });

const reduce = function (array, callback) {
  let accumulator = array.shift();
  loop(array, function (element) {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
};

// reduce([1, 2, 3], function (accumulator, number) {
//   return accumulator + number;
// });

const modifiedLoop = function (items, callback) {
  if (Array.isArray(items)) {
    for (let i = 0; i < items.length; i++) {
      callback(items[i], i);
    }
  } else {
    for (const key in items) {
      callback(items[key], key);
    }
  }
};

// modifiedLoop({ a: 1, b: 2, c: 3 }, function (number) {
//   console.log(number);
// });

const modifiedFilter = function (items, callback) {
  let result;
  if (Array.isArray(items)) {
    result = [];
    modifiedLoop(items, function (element, key) {
      if (callback(element)) {
        result.push(element);
      }
    });
  } else {
    result = {};
    modifiedLoop(items, function (element, key) {
      if (callback(element)) {
        result[key] = element;
      }
    });
  }
  return result;
};

modifiedFilter([1, 2, 3], function (number) {
  return number > 1;
});

modifiedFilter({ a: 1, b: 2, c: 3 }, function (number) {
  return number > 1;
});

const modifiedMap = function (items, callback) {
  let result;
  if (Array.isArray(items)) {
    result = [];
  } else {
    result = {};
  }
  modifiedLoop(items, function (element, key) {
    result[key] = callback(element);
  });
  return result;
};

// modifiedMap([1, 2, 3], function (number) {
//   return number * 10;
// });

// modifiedMap({ a: 1, b: 2, c: 3 }, function (number) {
//   return number * 10;
// });

const modifiedReduce = function (items, callback) {
  let accumulator = false;
  modifiedLoop(items, function (element, key) {
    if (!accumulator) {
      accumulator = items[key];
    }
    accumulator = callback(accumulator, element);
  });
  return accumulator;
};

// modifiedReduce([1, 2, 3], function (accumulator, number) {
//   return accumulator + number;
// });

// modifiedReduce({ a: 1, b: 2, c: 3 }, function (accumulator, number) {
//   return accumulator + number;
// });