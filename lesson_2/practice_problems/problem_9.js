/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the following data structure, return a new array with the same structure, 
 * but with the values in each subarray ordered -- alphabetically or numerically as 
 * appropriate -- in ascending order.
 * 
 * Explicit Requirements:
 * - Input: multi dimensional array
 * - Output:  a new multi-dimensional array
 * - Output array must have the same structure as the input array
 * - Must be a new array with values sorted in order alphabetically or numerically
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and test cases
 * [['b', 'c', 'a'], [2, 11, -3]]
 * [['a', 'b', 'c'], [-3, 2, 11]]
 * 
 * Data Structure
 * Access each sub array to sort each one accordingly
 * 
 * Algorithm
 * - Iterate through the outer array
 * - Iterate through each sub array
 * - Sort
 *  - Identify if the currently iterated element is a string
 *    - slice out the string or number and sort accordingly 
 * - Return result
 * 
 * Code
 */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(newArr);