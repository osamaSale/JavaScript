
//  Add two numbers without using the plus operator in JavaScript?

var getSum = function (a, b) {
    if (b == 0) {
      return a;
    } else {
      return getSum(a ^ b, (a & b) << 1);
    }
  };

  
 // console.log(getSum(1, 2));

  module.exports = { getSum }