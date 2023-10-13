// Fibonacci Sequence

// F(n) = F(n-1) + F(n-2)


/* 
Fibonacci Sequence

A series of numbers where each number is the sum of the two preceding
ones, often used as an example for dynamic programming.

*/

function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
/* 
console.log(fibonacci(1))  // 1
console.log(fibonacci(12)) // 233 
*/