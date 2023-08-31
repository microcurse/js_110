/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the following data structure, sort the array so that the sub-arrays are ordered 
 * based on the sum of the odd numbers that they contain.
 * 
 * let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
 * 
 * Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
 * 
 * [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
 * 
 * 
 * Explicit Requirements:
 * - Input: Multidimensional array
 * - Output: The same multidimensional array sorted based on the sum of odd numbers they contain
 * - Sort the array based on smallest odd number sums to largest
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [[1, 6, 7], [1, 5, 3], [1, 8, 3]]
 * [[1, 8, 3], [1, 6, 7], [1, 5, 3]]
 * 
 * sums
 * [[1 + 7], [1 + 5 + 3], [1 + 3]]
 * 
 * Data Structure
 * 
 * Algorithm
 * - Collect all odd numbers within each sub array
 * - Use their sum as a representative for sorting
 *  - using filter and reduce to get the sum works fine
 *  - the problem is how do I use that sum representation for sorting
 * - Compare each sum against the other in the array and sort accordingly
 * 
 * Code
 */

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// let result = arr.sort((subArrA, subArrB) => {
//   let sumA = subArrA.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0 );
//   let sumB = subArrB.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0 );
//   return sumA - sumB;
// });

let result = arr.map(subArr => {
  // Collect all odd numbers within each sub array
  // Use remainder operator to find odd numbers
  return subArr.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0 );
}).sort((a, b) => a - b);

console.log(arr);
console.log(result);