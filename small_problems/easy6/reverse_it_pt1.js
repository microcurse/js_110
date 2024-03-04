/**
 * PEDAC
 * 
 * Understanding The Problem
 * Write a function that takes a string argument and returns a new string containing the words from the string
 * argument in reverse order.
 * 
 * Explicit requirements
 * - Input: a string
 * - Output: a new string
 *  - String contains words from the input in reverse order
 * 
 * Implicit requirements
 * - If the input string is empty, return an empty string
 * - Words will keep their case
 * - There are no punctuations
 * 
 * Questions
 * - Does case matter?
 * - Can the input be an empty string?
 * - Will there be punctuation? If so where does it go?
 * 
 * Examples and Test Cases
 * reverseSentence('');                       // ""
 * reverseSentence('Hello World');            // "World Hello"
 * reverseSentence('Reverse these words');    // "words these Reverse"
 * 
 * Data Structure
 * - Arrays
 * 
 * Algorithm
 * 1. Split the string into an array
 * 2. Reverse the array
 * 3. Join the string
 * 4. Return the result
 * 
 */

function reverseSentence(words) {
  return words.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"