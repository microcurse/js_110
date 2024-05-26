/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes a string as an argument and returns that string with the first character of
 * every word capitalized and all subsequent characters in lowercase.
 * 
 * You may assume that a word is any sequence of non-whitespace characters
 * 
 * Explicit requirements
 * - Input: a string
 * - Output: a string
 * - Output string has the first character of every word capitalized and subsequent characters lowercase.
 * - A word is any sequence of non-whitespace characters
 * - A word that has special characters or numbers will not be capitalized
 * 
 * Implicit requirements
 * - 
 * 
 * Questions
 * - Can the input string be empty?
 * - Can the input string contain only whitespace characters?
 * - Can the input string contain only special characters?
 * - Can the input string contain only numbers?
 * 
 * Examples and Test Cases
 * wordCap('four score and seven');       // "Four Score And Seven"
 * wordCap('the javaScript language');    // "The Javascript Language"
 * wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
 * 
 * Data Structures
 * - Arrays
 * - Strings
 * - Loops
 * 
 * Algorithm
 * - Split the string into an array of words
 * - Iterate over the array of words
 * - Check word for special characters
 *  - If word contains special characters, return it immediately
 * - Capitalize the first letter of each word
 *  - Isolate the first letter
 *  - Uppercase it
 *  - Rejoin it with the rest of the letters
 * - Return the array of words joined together
 * 
 */

function wordCap(str) {
  let result = [];

  str.split(' ').forEach(word => {
    if (/[^a-zA-Z0-9\s]/.test(word)) {
      result.push(word);
    } else {
      result.push(word.slice(0, 1).toUpperCase() + word.slice(1));
    }
  });

  return result.join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'