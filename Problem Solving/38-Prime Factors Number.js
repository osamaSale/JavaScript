// How could you find all prime factors of a number?
const primeFactors = (n) => {
  let factors = [];
  divisor = 2;
  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};
/*   
console.log(primeFactors(12)); //[2,2,3] = 12
  console.log(primeFactors(69)); // [3 , 23] = 69
  console.log(primeFactors(100)); // [2,2,5,5] = 100
  console.log(primeFactors(101)); // [101]
  console.log(primeFactors(103)); // [103]
  console.log(primeFactors(104)); // [2,2,2,13]
  console.log(primeFactors(105)); // [ 3, 5, 7 ] 
  */
// [7] Print all prime numbers up to a given number?
const prime = (n) => {
  //Create new n+1 array and mark them as true
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  let primes = [];

  for (let i = 2; i <= n; i++) {
    //if the number is
    if (isPrime[i] === true) {
      primes.push(i);
    }

    //mark all the numbers divisible i as false
    let next = i * i;
    while (next <= n) {
      isPrime[next] = false;
      next += i;
    }
  }

  return primes;
};
/* console.log(prime(20)); // [2,  3,  5,  7, 11, 13, 17, 19]
console.log(prime(100)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
 */


//  Find the most significant prime factor of a given integral number?

const largetPrimeFactor = (n) => {
  let i = 2;
  while (i * i < n) {
    while (n % i == 0) {
      n /= i;
    }
    i++;
  }
  return n;
};
/*   
console.log(largetPrimeFactor(6)); // 3
console.log(largetPrimeFactor(15)); // 5
console.log(largetPrimeFactor(392832)); //31
console.log(largetPrimeFactor(1787866)); //893933 */
module.exports = { primeFactors  ,prime , largetPrimeFactor}