/**
 * PEDAC
 * P. Understand the problem
 * 
 * Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the 
 * string representation of that integer.
 * 
 * 
 * Explicit Requirements:
 * - Input: a number
 * - Output: a string
 * - Output is the string version of the given number
 * - All inputs are non-negative integers
 * 
 * Implicit Requirements:
 * 
 * Questions:
 * What is the old-fashioned way?
 * 
 * E. Examples and test cases
 * 4321        // "4321"
 * 4321 - 1 = 4320
 * 4320 - 20 = 4300
 * 4300 - 300 = 4000
 * 4000 - 4000 = 0
 * 
 * 0           // "0"
 * 5000        // "5000"
 * 1234567890  // "1234567890"
 * 
 * D. Data structure
 * Convert the integer into an array somehow? So that each element/number can be worked with and converted to a 
 * string.
 * 
 * A. Algorithm
 * 1. How do we convert the number to a string?
 *  - Need a way to correlate the number with a string
 *  - Use the index of an array to identify the element containing a string that reflects the index
 * number.
 * 3. 
 * 
 * C. Code a solution
 * 
 */

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"