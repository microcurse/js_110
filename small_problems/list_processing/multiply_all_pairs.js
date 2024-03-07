/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes two array arguments, each containing a list of numbers, and returns 
 * a new array containing the products of all combinations of number pairs that exist between the two
 * arrays. The returned array should be sorted in ascending numerical order.
 * 
 * Explicit requirements
 * - Input: two arrays of integers
 * - Output: a new array
 * - Output array is the products of all combinations of number pairs that exist between the two given input arrsy
 * - The returned array should be sorted in ascending numerical order
 * - Only multiple 2 numbers, one from each array
 * - Neither argument will be an empty array
 * 
 * Implicit requirements
 * - pairs that produce the same products as other pairs will show duplicates in the output array
 * 
 * Questions
 * - 
 * 
 * Examples and Test Cases
 * multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
 * 
 * Data Structure
 * - Arrays
 * 
 * Algorithm
 * 1. Define an empy aray variable to store the result
 * 2. Iterate over first array
 * 3. For each element in the first array, iterate over the second array
 * 4. Multiply that element with each element in the second array and push the result in the result variable
 * 5. repeat until there are no elements left in second array
 * 6. Repeat until there are no elements left in the first array
 * 7. Sort the result array and return result
 * 
 */

function multiplyAllPairs(nums1, nums2) {
  let result = [];
  nums1.forEach((num) => {
    nums2.forEach((num2) => {
      result.push(num * num2);
    });
  });

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]