/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
 * 
 * Explicit Requirements:
 * - Input: a positive integer
 * - Output: an array
 * - The output array contains a list of the digits in the number as individual elements
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * 12345 -> [1, 2, 3, 4, 5]
 * 7 -> [7]
 * 
 * Data Structure
 * 
 * Algorithm
 * - Convert numbers to a string
 * - Split the string into individual characters
 * - Iterate through each element
 * - Convert that element into a number
 * - Repeat till there are no elements left in the array
 * - Return result
 * 
 * Code
 */

function digitList(integer) {
  return String(integer).split('').map((element) => Number(element));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]