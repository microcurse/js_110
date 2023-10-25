/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that takes one argument, an array of integers, and returns the average of all integers 
 * in the array, rounded down to the integer component of the average. The array will never be empty, and 
 * the numbers will always be positive integers.
 * 
 * Explicit Requirements:
 * - Input: an array of integers
 * - Output: a number
 * - The output numberi s the result of averaging all of the integers in the array, rounded down to the 
 * integer component of the average.
 * 
 * Implicit Requirements:
 * - Array will never be empty
 * - Numbers are always positive integers
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [1, 5, 87, 45, 8, 8]
 * 154 / 6 = 25.666 -> 25
 * 154 is the total sum of all the numbers in the array
 * 6 is the number of elements in the array
 * 25 is the reuslt of rounding the return value of 154/ 6 to a whole number.
 * 
 * 
 * Data Structure
 * Arrays
 * 
 * Algorithm
 * - Take the first element in the array
 * - add it to the second element
 * - keep the sum and add the next element to it
 * - repeat this until there are no elements left in the array
 * - divide the sum by the number of elements in the array
 * - round that element down
 * - print the result
 * 
 * Code
 */

function average(numbers) {
  return Math.floor(numbers.reduce((sum, num) => sum + num) / numbers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40