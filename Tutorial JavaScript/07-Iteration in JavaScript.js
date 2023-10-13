// Iteration in JavaScript

// Practice
const sum = function (numbers) {
    let sum = 0
    for (let i =0; i < numbers.length; i++){
      sum += numbers[i]
    }
    return sum
  };
  
  // sum([1, 2, 3, 4, 5, 6]);
  
  const filter = function (numbers) {
    let oddNumbers = []
    for (let i =0; i < numbers.length; i++){
      if (numbers[i] % 2 !== 0){
        oddNumbers.push(numbers[i])
      }
    }
    return oddNumbers
  };
  
  //filter([0, 1, 2, 3, 4, 5, 6]);
  
  const maximumNumber = function (numbers) {
    // let maxNumber = Number.NEGATIVE_INFINITY
    let maxNumber = -Infinity
    
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > maxNumber){
        maxNumber = numbers[i]
      }
    }
    return maxNumber
  };
  
  // maximumNumber([0, 5, 2, 10, 8, 6])
  
  // Make sure to loop over the bills object
  const bills = {
    waterBill: 25,
    electricityBill: 50,
    hospitalBill: 1000,
  };
  
  const totalBill = function (billsObject) {
    let sum = 0
    for (let key in billsObject){
      sum += billsObject[key]
    }
    return sum
  };
  
  // totalBill(bills); // => 1075
  
  
  const messageOne = {
    username: "John",
    message: "Hello",
    date: "01/01/2020",
    someKey: "someValue",
  };
  
  const messageTwo = {
    username: 10,
    message: "Hello",
    date: "01/01/2020",
  };
  
  
  const validateMessage = function (message) {
      for (let key in message){
        if ( key !== "username" &&  key !== "message" &&  key !== "date"){
          delete message[key]
        }
        else {
          if ( typeof  message[key] !== "string"){
               return "invalid message" 
          }
        }
      }
        return message
  };  
  
  // validateMessage(messageOne); 
  // validateMessage(messageTwo);
  
  // Extra Practice
  
  // make sure to use the same array
  const onlyEven = function (numbers) {
    for (let i =0; i < numbers.length; i++){
      if (numbers[i] % 2 !== 0){
        numbers.splice(i, 1)
        i--
      }
    }
    return numbers
  };
  
  // onlyEven([0, 1, 2, 3, 4, 5, 6]);
  // onlyEven([1, 9, 2, 3, 4]);
  
  // make sure to use the same array
  const sort = function (numbers) {
      for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
           if (numbers[i] < numbers[j] ){
             const temp = numbers[i]
             numbers[i] = numbers[j]
             numbers[j] = temp
           }
        }
      }
      return numbers
  };
  
  // sort([0, 1, 2, 3, 4, 5, 6]); // => [6, 5, 4, 3, 2, 1, 0]
  // sort([3, 6, 2, 0, 4, 1, 5]); // => [6, 5, 4, 3, 2, 1, 0]
  
  const convertToArray = function (object) {
    const array = []
    for (let key in object){
      array[key] = object[key]
    }
    return array
  };
  
  // convertToArray({ 0: "one", 1: "two", 2: "three" });
  // convertToArray({ 1: "two", 0: "one", 2: "three" });
  
  const compare = function (array, object) {
    const objVals = {}
  
    for (let key in object){
      objVals[object[key]] = 1
    }
    for (let i = 0; i < array.length; i++){
      if (!objVals[array[i]]){
        return false
      }
    }
    return true
  };
  
  // compare(["one", "two", "three"], { 0: "one", 1: "two", 2: "three" });
  // compare(["one", "two", "four"], { 0: "one", 1: "two", 2: "three" }); 
  // compare(["one", "two"], { foo: "one", bar: "two", baz: "three" });
  // compare(["one", "two", "three"], { foo: "one", bar: "two" });
  
  const deleteKeys = function (array, object) {
      for (let i = 0; i < array.length; i++){
              if (object[array[i]]){
                delete object[array[i]]
              }     
        }
        return object
  };
  
    //  deleteKeys(["one", "two"], { "one": "one", "two": "two", "three": "three" }); // => { three: "three" }
    //  deleteKeys(["four", "five", "bar"], { "foo": "one", "bar": "two", "baz": "three" }); // => { foo: "one" baz: "three" }
  
  
    const sumArguments = function () {
  
      let sum = 0
      for (let i = 0; i < arguments.length; i++){
          sum += arguments[i]
       }
       return sum
  };
  
  // sumArguments(1, 2);
  // sumArguments(1, 2, 3, 4); 
  // sumArguments(4, 5, 6, 7, 8);
  // sumArguments(1);
  // sumArguments();