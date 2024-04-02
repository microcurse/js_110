/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes a string argument and returns `true` if all of the alphabetic characters inside
 * the string are uppercase; `false` otherwise. Ignore characters that are not alphabetic.
 * 
 * Explicit Requirements
 * - Input: a string
 * - Output: a boolean `true` or `false`
 * - Return true if all alphabetic characters in the string are uppercase. Return false otherwise.
 * - Ignore characters that are not alphabetic.
 * 
 * Implicit Requirements
 * - If the string is empty, return true.
 * - If the string contains punctuation, return true.
 * - If the string contains spaces, return true.
 * 
 * Questions
 * - What should we return if the string is empty?
 * - What about punctuation?
 * 
 * Examples and Test Cases
 * isUppercase('t');               // false
 * isUppercase('T');               // true
 * isUppercase('Four Score');      // false
 * isUppercase('FOUR SCORE');      // true
 * isUppercase('4SCORE!');         // true
 * isUppercase('');                // true
 * 
 * Data Structure
 * - Arrays
 * - For loops until we can refactor down
 * 
 * Algorithm
 * - If the array is empty, return true (guard clause)
 * - Remove all spaces from the input string
 * - Iterate through the array and compare the current element to the current element UPPERCASED
 * - If any of them don't equal it's UPPERCASED self, then immediately return false
 * 
 */

function isUppercase(str) {
  if (!str) return true;

  // use every method to check if every element in the given array (string) passes the callback test (whether or not it's uppercase).
  return str.split('').every(char => char === char.toUpperCase());
}
 
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true