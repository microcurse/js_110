// Write another function that returns true if the string passed as an argument is a palindrome, or false 
// otherwise. This time, however, your function should be case-insensitive, and should ignore all 
// non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function 
// you wrote in the previous exercise.

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
 * isRealPalindrome('madam');               // true
 * isRealPalindrome('Madam');               // true (case does not matter)
 * isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
 * isRealPalindrome('356653');              // true
 * isRealPalindrome('356a653');             // true
 * isRealPalindrome('123ab321');            // false
 * 
 * D. Data structure
 * In order to interact with each character in the string, I will need to convert the string into an
 * array. The output must be a boolean true or false.
 * 
 * input string = 'madam' // true
 * input array = ['m', 'a', 'd', 'a', 'm']; // true
 * 
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
 */

// This checks for palindromes
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// This needs to remove non-alphanumeric characters from the given string
// This also needs to convert the string into all lowercase (same case);
function isRealPalindrome(string) {
  let alphanumeric = string.match(/[a-zA-Z0-9]+/g).join('').toLowerCase();
  return isPalindrome(alphanumeric);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false