// Write a function that returns true if its integer argument is palindromic, or false otherwise. A 
// palindromic number reads the same forwards and backwards.

/**
 * PEDAC
 * P. Understand the problem
 * 
 * Explicit Requirements:
 * - Input: string
 * - Output: boolean true or false
 * - Palindrome is when a word reads the same forwards and backwards
 * - Palindrome's can have a singular middle character that is the same or have two middle characters that are
 * the same
 * - Case insensitive matters
 * - Special characters matter
 * - Numbers matter
 * 
 * Implicit Requirements:
 * 
 * Questions:
 * 
 * E. Examples and test cases
 * isPalindromicNumber(34543);        // true
 * isPalindromicNumber(123210);       // false
 * isPalindromicNumber(22);           // true
 * isPalindromicNumber(5);            // true
 * 
 * D. Data structure
 * 
 * A. Algorithm
 * 1. Convert the string into all lowercase
 * 2. Set a condition to remove all non-alphanumeric characters
 *  - iterate through the string and remove all non-alphanumeric characters
 * 2. Compare the given string with the given string reversed
 * 3. Output the result
 * 
 * C. Code a solution
 * 
 * 
 * Further Exploration:
 * 
 * Suppose the number argument begins with one or more 0s. Will the solution still work? Why or why not? 
 * Is there any way to address this?
 */

function isPalindromicNumber(number) {
  let stringNum = number.toString();
  return stringNum === stringNum.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(022));          // false
console.log(isPalindromicNumber(00500));        // true
