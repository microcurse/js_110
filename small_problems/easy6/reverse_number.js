/**
 * PEDAC
 * Understand the problem
 * Write a function that takes a positive integer as an argument and returns that number with 
 * its digits reversed.
 * 
 * Explicit requirements:
 * - Input: positive integer
 * - Output: That number with its digits reversed
 * 
 * Implicit requirements:
 * - Trailing zeroes in input will drop when reversed in the output
 * 
 * Questions:
 * - N/A
 * 
 * Examples and test cases
 * reverseNumber(12345);    // 54321
 * 12345 - 5 = 12340
 * 12340 - 40 = 12300
 * 12300 - 300 = 12000
 * 12000 - 2000 = 10000
 * 
 * reverseNumber(12213);    // 31221
 * reverseNumber(456);      // 654
 * reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
 * reverseNumber(1);        // 1
 * 
 * Data structure
 * Potentially an array in order to reverse the order of the digits using methods
 * 
 * Algorithm
 * 1. Convert integer to a string
 * 2. split the string into an array
 * 3. reverse the array
 * 4. join the reversed array
 * 5. convert string back to integer
 * 6. return integer
 * 
 */

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}
 
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1