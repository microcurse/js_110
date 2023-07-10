// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

/**
 * PEDAC
 * P. Understand the problem
 * 
 * Explicit Requirements:
 * - Input: a string
 * - Output: an object
 * - Each character in the object will have a value equal to the number of times it appears in the string
 * - This is case sensitive so if there is an uppercase T and lowercase t they both are counted separately
 * 
 * Implicit Requirements:
 * 
 * E. Examples and test cases
 * { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
 * 
 * D. Data structure
 * an object
 * 
 * A. Algorithm
 * 1. Count how many times a single letter appears in the whole string
 *  - Split the string into an array so it can be iterated over
 *  - Spaces don't count, so those need to be removed
 *  - How do we count how many times a letter occurs?
 *  - Take the current letter and check the next letter
 *  - If the current letter is equal the next letter
 *    - Increment the count by 1
 * 2. Store that count
 * 3. Create an object where we can store each letter with a value of the number of the letter's occurances in the string
 * 
 * 
 * C. Code a solution
 * 
 */
let statementNoSpaces = statement.replace(/\s/g, '');
const obj = {};

statementNoSpaces.split('').forEach(char => {
  obj[char] = obj[char] || 0;
  obj[char] += 1;
});



console.log(obj);