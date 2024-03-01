/**
 * PEDAC
 * Understand the Problem
 * Write a function that takes a string, doubles every character in the string, and returns the result as a 
 * new string.
 * 
 * Explicit requirements:
 * - Input: a string
 * - Output: a new string
 *  - output string doubles every character from the input string
 * 
 * Implicit requirements:
 * - Given strings can be empty
 * - Double spaces and punctuation, not just letters.
 * 
 * Examples and test cases
 * repeater('Hello');        // "HHeelllloo"
 * repeater('Good job!');    // "GGoooodd  jjoobb!!"
 * repeater('');             // ""
 * 
 * Data Structure
 * Probably need to use arrays to work with each individual character for doubling.
 * 
 * Algorithm
 * 1. Define a new variable to store the result.
 * 2. Split the string up
 * 3. Iterate over each element
 * 4. Take the currently iterated element and add it to the result variable twice
 * 5. Return the variable which stored the result.
 * 
 * 
 */

function repeater(str) {
  let doubledStr = '';
  
  str.split('').forEach((char) => {
    doubledStr += char + char;
  });
  
  return doubledStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""