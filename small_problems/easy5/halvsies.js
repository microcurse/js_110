/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that takes an array as an argument and returns an array that contains two elements,
 * each of which is an array. Put the first half of the original array elements in the first element of
 * the return value, and put the second half in the second element. If the original array contains an 
 * odd number of elements, place the middle element in the first half.
 * 
 * Explicit Requirements:
 * - Input: an array
 * - Output: two arrays
 * - The first array contains the first half of elements from the input array
 * - The second array contains the second half of elements from the input array
 * - If the input array contains an odd number elements, put the middle element in the first half
 * - Output a nested array containined two elements which are arrays even if the given input is an 
 *  empty array
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [1, 2, 3, 4] -> [[1, 2], [3, 4]]
 * [1, 5, 2, 4, 3] -> [[1, 5, 2], [4, 3]]
 * [5] -> [[5], []]
 * [] -> [[], []]
 * 
 * Data Structure
 * arrays and nested arrays
 * - The output will always be an array containing two elements, each element is an array
 * - Use .length to get the middle of the given array
 *  - Use an inclusive approach to collecting the first half. That way, if the given array
 *    has an odd number of elements, we can put the middle element in the first half.
 * - Use a guard clause for when the given array contains a single element or less (empty)
 * 
 * Algorithm
 *  - Create a result variable to store the output
 *  - Iterate through the array
 *  - While the currently iterated element has an index which is less than or equal to half of the 
 *    length of the total array.
 *  - Push current element into the result variable
 *  - Break out of while loop once the iteration reaches over half of the length of the array
 *  - Output result
 * 
 * Code
 */

function halvsies(arr) {
  let result = [];
  let half = Math.ceil(arr.length / 2);

  if (arr.length === 0) return [[], []];
  result.push(arr.slice(0, half));
  result.push(arr.slice(half, arr.length));

  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]