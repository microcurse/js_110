/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this
 * without using `for`, `while`, or `do...while` loops - instead, use a series of method calls to perform the
 * sum.
 * 
 * Explicit requirements
 * - Input: positive integer
 * - Output: the sum of its digits
 * - Don't use `for`, `while`, or `do...while` loops
 * 
 * Implicit requirements
 * -
 * 
 * Questions
 * - Can the input be 0?
 * - Can there be 0's in the integer? 10, 100, 203 etc..?
 * 
 * Examples and Test Cases
 * sum(23);           // 5
 * sum(496);          // 19
 * sum(123456789);    // 45
 * 
 * 23 -> '23' -> '2', '3' -> 2, 3 -> 5
 * 
 * Data Structure
 * - Strings and arrays to separate the digits in the integer
 * 
 * Algorithm
 * 1. Convert integer to string
 * 2. Split integer to array
 * 3. Add elements of array together
 * 4. Output result
 * 
 */

function sum(num) {
  return String(num).split('').reduce((accum, digit) => accum + Number(digit), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45