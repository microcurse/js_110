/**
 * PEDAC
 * 
 * Understand the problem
 * Write a function that takes a string, doubles every consonant character in the string, and returns the 
 * result as a new string. The function should not double vowels ('a', 'e', 'i', 'o', 'u'), digits, 
 * punctuation, or whitespace.
 * 
 * Explicit requirements
 * - Input: a string
 * - Output: a new string
 *  - output string is the input string with its consonants doubled.
 * - Do not double vowels, digits, punctuation, or whitespace.
 * 
 * Implicit requirements
 * - Empty input string will output empty
 * - Doubling a letter should also keep it's case
 * 
 * Examples and test cases
 * doubleConsonants('String');          // "SSttrrinngg"
 * doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
 * doubleConsonants('July 4th');        // "JJullyy 4tthh"
 * doubleConsonants('');                // ""
 * 
 * Data structures
 * Convert input string to an array in order to work with it.
 * 
 * Algorithm
 * - Define a variable to store and return the result
 * - Define a variable for all characters that should not be doubled
 * - Split the string into an array and iterate over each element
 * - Add the currently iterated element twice if it doesn't exist in the variable of characters that
 * should not be doubled.
 *  - If the element is a vowel, digit, punctuation, or whitespace, then add it to the result variable once.
 * - Return result
 * 
 */

function doubleConsonants(str) {
  let result = '';
  let strArr = str.split('');
  const CONSONANTS = /[bcdfghjklmnpqrstvwxyz]/i;
  
  strArr.forEach((char) => {
    if (CONSONANTS.test(char)) {
      result += char + char;
    } else {
      result += char;
    }
  });

  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""