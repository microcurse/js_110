/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the following data structure, use a combination of methods, including filter, to 
 * return a new array identical in structure to the original, but containing only the numbers 
 * that are multiples of 3.
 * 
 * Explicit Requirements:
 * - Input: multidimensional array
 * - Output: multidimensional array with the same structure
 * - Output must have the same structure as the input but contains only numbers
 * that are multiples of 3
 * - Must use a combination of methods including filter
 * 
 * Implicit Requirements:
 * - If an array contains a single element that is not a multiple of 3, then output an empty array
 * so that the final output array has an identical structure to the original.
 * 
 * Questions:
 * 
 * Examples and test cases
 * [[2], [3, 5, 7], [9], [11, 15, 18]]
 * [[], [3], [9], [15]]
 * 
 * Data Structure
 * [
 *  [2],
 *  [3, 5, 7],
 *  [9],
 *  [11, 15, 18]
 * ]
 * 
 * [2]
 * 
 * 2 === 3 ? 2 : [];
 * If currently iterated element is divisible by 3 with no remainder, then return that element
 * to the array.
 * If it doesn't, then return an empty element.
 * 
 * Algorithm
 * - Create a variable to store the result
 * - Iterate over the outer array and return the same number of elements
 * - Check each element to see if it's a multiple of 3
 *  - If it is, store it in the result
 *  - If it isn't, then return an empty element(?)
 * - Return output
 * 
 * Code
 */

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThree = arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});

console.log(multiplesOfThree);