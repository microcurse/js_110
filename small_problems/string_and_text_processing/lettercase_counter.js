/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes a string and returns an object containing three properties: one representing 
 * the number of characters in the string that are lowercase letters, one representing the number of 
 * characters that are uppercase letters, and one representing the number of characters that are neither.
 * 
 * Explicit requirements
 * - Input: a string
 * - Output: an object containing three properties:
 * - The first property represents the number of characters in the string that are lowercase letters
 * - The second property represents the number of characters that are uppercase letters
 * - The third property represents the number of charactesr that are neither
 * - Special characters and numbers increase the 'neither' property value
 * 
 * Implicit requirements
 * - Properties are created regardless if the value is 0
 * 
 * Questions
 * - Can any or all of the properties have a value of 0?
 * - Are the properties still created even if there are zero of ex. lowercase letters?
 * 
 * Examples and Test Cases
 * letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
 * letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
 * letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
 * letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
 * 
 * Data Structures
 * - Objects
 * - Iteration over objects
 * - Creation of own enumerable property names and values
 * 
 * Algorithm
 * - Iterate over the string
 * - Keep count of each: lowercase letter, uppercase letter, neither
 * - Create an object with 3 properties
 *  - lowercase, uppercase, neither
 *  - These properties will have an initial value of 0
 * - Set criteria for lowercase, uppercase, neither
 * - Compare each element that's iterated to the criteria
 * - If the current element matches any of the criteria, increment the respective property's value
 * - Return the object
 * 
 */

function letterCaseCount(str) {
  let counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }
  const LETTERS = /[a-zA-Z]/;

  for (let char of str) {
    if (LETTERS.test(char)) {
      if (char === char.toLowerCase()) {
      counts['lowercase'] += 1;
      } else {
      counts['uppercase'] += 1;
      }
    } else {
      counts['neither'] += 1;
    }
  };
  
  return counts;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }