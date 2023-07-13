// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
// A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters 
// matter.

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
 * - Case matters
 * - Special characters matter
 * - Numbers matter
 * 
 * Implicit Requirements:
 * 
 * Questions:
 * 
 * E. Examples and test cases
 * isPalindrome('madam');               // true
 * isPalindrome('Madam');               // false (case matters)
 * isPalindrome("madam i'm adam");      // false (all characters matter)
 * isPalindrome('356653');              // true
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
 * 1. Convert the string into a data type that allows for interaction with individual characters
 * 2. Determine what the middle of the string is
 *  - If the string has an odd length
 *    - Remove the middle character to create two equal length strings
 *      - How do we find the middle character?
 *      - take the length of the array and divide in half
 *    - compare both
 *  - If the string has an even length
 *    - compare both to see if they're a palindrome
 * 3. Output the result
 * 
 * C. Code a solution
 * 
 */

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true