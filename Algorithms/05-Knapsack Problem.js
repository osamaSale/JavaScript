// Knapsack Problem

/* 
Knapsack Problem
A classic optimization problem where the goal is to select items in a way
that maximizes the total value without exceeding a given weight.

*/


function knapsack(capacity, n, values, weights) {
    // Check capacity and items on zero
    if (capacity === 0 || n === 0) {
        return 0
    }
    // if weight of current element is less than or equal to capacity we can either include or exclude the item
    if (weights[n] <= capacity) {
        return Math.max(
            values[n] + knapsack(capacity - weights[n], n - 1, values, weights),
            knapsack(capacity, n - 1, values, weights)
        );
    }
    return knapsack(capacity, n - 1, values, weights)
}

// Input:

const values = [10, 20, 30, 40];
const weights = [30, 10, 40, 20];
const capacity = 40;


/* console.log(knapsack(capacity, values.length - 1, values, weights))
 */
// Output: 60


















