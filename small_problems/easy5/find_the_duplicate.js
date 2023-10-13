/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the unordered array and the information that exactly one value in the array occurs twice 
 * (every other value occurs exactly once), determine which value occurs twice. Write a function that
 * will find and return the duplicate value that is in the array.
 * 
 * Explicit Requirements:
 * - Input: unordered array
 * - Output: a number
 * - The output should be the number that was a duplicate 
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [1, 5, 3, 1] -> 1
 * 
 * Data Structure
 * Array and number
 * 
 * Algorithm
 * - Iterate over array
 * - During the currently iterated element
 *  - Iterate over the whole array again
 *  - Checking each element if it matches with the currently iterated element
 * 
 * 
 * Code
 */

function findDup(arr) {
  let sortedArr = arr.slice().sort();
  let result = 0;

  for (let idx = 0; idx < sortedArr.length; idx += 1) {
    if (sortedArr[idx] === sortedArr[idx + 1]) {
      result = sortedArr[idx];
    }
  }

  return result;
}


console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73