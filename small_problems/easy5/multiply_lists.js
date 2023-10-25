/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that take two array arguments, each containing a list of numbers, and returns a new array
 * that contains the product of each pair of numbers from the arguments that have the same index. You may
 * assume that the arguments contain the same number of elements.
 * 
 * Explicit Requirements:
 * - Input: two arrays
 * - Output: a new array
 * - The new array contains the product of each pair of numbers from the arguments that have the same index
 * - Each input array contain the same number of elements.
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [3, 5, 7]
 * [9, 10, 11]
 * 
 * 3 * 9 -> 27
 * 5 * 10 -> 50
 * 7 * 11 -> 77
 * 
 * [27, 50, 77]
 * 
 * Data Structure
 * 
 * Algorithm
 * - Iterate over the first array
 * - Multiply the first element of each array together
 * - Save the resulting multiplication to a new array
 * - Multiply the next element of each array together
 * - Repeat until there are no elements in the array
 * - Return result
 * 
 * Code
 */

function multiplyList(firstArr, secondArr) {
  return firstArr.map((element, index) => element * secondArr[index]);
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]