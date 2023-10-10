/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that takes two arrays as arguments and returns an array containing the union of
 * the values from the two. There should be no duplication of values in the returned array, even if
 * there are duplicates in the original arrays. You may assume that both arguments will always be
 * arrays.
 * 
 * Explicit Requirements:
 * - Input: two arrays
 * - Output:  a single array containing the union of the values from the two arrays
 * - No duplication of values in returned array, even if there are duplicates in the original arrays
 * - Both arguments will always be arrays
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
 * [1, 3, 5], [3, 6, 9] -> [1, 3, 5, 6, 9]
 * [1, 1, 2, 3], [2, 4, 6, 8] -> [1, 2, 3, 4, 6, 8]
 * 
 * Data Structure
 * Arrays
 * 
 * Algorithm
 * - Iterate over first array
 * - Put the first element from that array into the resulting array
 * - Check if the next element already exists in resulting array
 * - If not, put it in the resulting array
 * - If already exists, skip.
 * - Repeat this until we've iterated over all elements in each array
 * - Iterate over the next array and repeat all steps until there are no more elements
 * - Print the resulting array
 * 
 * Code
 */

function union(...args) {
  let result = [];
  args.forEach((element) => copyNonDups(result, element));
  return result;
}

function copyNonDups(resultArr, arr) {
  arr.forEach((element) => {
    if (!resultArr.includes(element)) {
      resultArr.push(element);
    }
  });
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 1, 3], [3, 3, 4, 5]));    // [1, 3, 4, 5]