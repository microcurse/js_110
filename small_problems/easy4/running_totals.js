// Write a function that takes an array of numbers and returns an array with the same number of elements, but 
// with each element's value being the running total from the original array.

/**
 * PEDAC
 * P. Understand the problem
 * 
 * Explicit Requirements:
 * - Input: array of numbers
 * - Output: an array of numbers with the same number of elements
 * - Each element's value is replaced with a running total from the original array
 * 
 * Implicit Requirements:
 * - Given array's elements are all numbers
 * - If given an empty array, return an empty array
 * 
 * Questions:
 * 
 * 
 * E. Examples and test cases
 * runningTotal([2, 5, 13]);             // [2, 7, 20]
 * runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
 * runningTotal([3]);                    // [3]
 * runningTotal([]);                     // []
 * 
 * D. Data structure
 * Arrays
 * 
 * [2, 5, 13]
 * 2 = [2]
 * [5, 13]
 * 2 + 5 = 7 -> [2, 7]
 * [13]
 * 7 + 13 = 20 -> [2, 7, 20];
 * 
 * 
 * A. Algorithm
 * 1. Create a variable with an empty array to store the result.
 * 2. Store the first element in and add it to the next element
 * 2. Store that value as the the next element.
 *  - How do we store that value as the next element?
 *    - Use
 * 3. Repeat steps 1-3 until there are no more elements in the array
 * 5. Return the result
 * 
 * 
 * Running total is when you add the first element to the next element. The result of that will replace 
 * the second element. That element becomes the first in the sum and you add it to the next element. That becomes
 * the following element. Keep going till there are no elements left.
 * 
 * C. Code a solution
 * 
 */

function runningTotal(arr) {
  let result = [];
  let sum = 0;

  if (arr.length <= 1) return arr;

  for (let counter = 0; 0 < arr.length; counter++) {
    if (result.length === 0) {
      result.push(arr.shift());
    } 
    sum = result[counter] + arr.shift();
    result.push(sum);
  }
  return result;
}


// LS Solution:

// function runningTotal(arr) {
//   let result = [];
//   let sum = 0;

//   for (let index = 0; index < arr.length; index++) {
//     result.push((sum += arr[index]));
//   }

//   return result;
// }

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []