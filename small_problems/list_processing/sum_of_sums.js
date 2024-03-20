/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes an array of numbers and returns the sum of sums of each leading subsequence in
 * that array. Examine the examples to see what we mean. You may assum that the array always contains at least 
 * one number.
 * 
 * Explicit requirements:
 * - Input: an array of numbers
 * - Output: a single integer
 * - The output integer is the sum of sums of each leading subsequence in the given array
 * - The array always contains at least one number
 * 
 * Implicit requirements:
 * - 
 * 
 * Questions:
 * - 
 * 
 * Examples and Test Cases
 * sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
 * sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
 * sumOfSums([4]);              // 4
 * sumOfSums([1, 2, 3, 4, 5]);  // 35
 * 
 * Data Structures
 * - Arrays and subarrays
 * 
 * Algorithm
 * 1. Define a result variable and initialize it to 0 
 * 2. Define an empty subArr variable to store the subarrays
 * 3. Create subarrays of each element in the array
 *  a. Ex. (3) + (3 + 5) + (3 + 5 + 2)
 *  b. Iterate over the array and group each element together sequentially, to each subarray
 *    - Ex. [3], [3, 5], [3, 5, 2]
 *    1. When iterating over an element, store a copy of that element into a subarray
 *    2. On the next iteration, store the element at 0 index and the element at the next index into another     
 *       subarray
 *    3. Repeat steps 1 and 2 till there are no elements left in the input array
 * 4. Flatten the subarrays 
 * 5. Add the subarrays together
 * 6. Output the result
 * 
 */

function sumOfSums(arr) {
  let subArr = [];

  for (let idx = 1; idx <= arr.length; idx += 1) {
    subArr.push(...arr.slice(0, idx));
  }

  return sum(subArr);
}

function sum(subArr) {
  return subArr.reduce((accum, curr) => accum + curr, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35