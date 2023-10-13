/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that takes an array of integers as input, multiplies all of the integers together,
 * divides the result by the number of entries in the array, and returns the result as a string with 
 * the value rounded to three decimal places.
 * 
 * Explicit Requirements:
 * - Input: array of integeres
 * - Output: a string
 * - Multiply all elements together
 * - Divide the result of multiplications by number of elemetns in array
 * - Round the resulting number down to the nearesth thousandths place (three decimal places) before
 *   converting output to string
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [3, 5] -> 3 x 5 -> 15 -> 15/2 -> 7.500 -> "7.500"
 * [2, 5, 7, 11, 13, 17]
 * 2 x 5 x 7 x 11 x 13 x 17
 * 170170 / 6
 * 28361.666 -> "28361.666"
 * 
 * Data Structure
 * 
 * Algorithm
 * 
 * Code
 */

function multiplicativeAverage(integers) {
  let result = integers.reduce((acc, curr) => acc * curr) / integers.length;
  return String(Math.round(1000 * result) / 1000);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"