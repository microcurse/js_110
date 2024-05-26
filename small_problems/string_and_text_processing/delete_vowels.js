/**
 * PEDAC
 * 
 * Undestanding the Problem
 * 
 * Write a function that takes an array of strings and returns an array of the same string values, but with 
 * all vowels (a, e, i, o, u) removed.
 * 
 * Explicit requirements
 * - Input: an array of strings
 * - Output: an array of same strings without vowels
 * - Remove vowels from the output
 * 
 * Implicit requirements
 * -
 * 
 * Questions
 * - Do we need to mutate the output array?
 * 
 * Examples and Test Cases
 * removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
 * removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
 * removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
 * 
 * Data Structure:
 * - Arrays and strings
 * - Subarrays of characters
 * 
 * Algorithm
 * - Define an array variable containing the vowels
 * - How to check the string for vowels?
 *  - includes
 *  - regex, match
 * - How to remove the vowels from the string?
 * - filter array method can both select and remove (refuse to include) elements in the returned array
 * - Iterate over each string in the given array
 * - Split that string into an array of characters
 * - If any of those characters are not vowels, include them into the return array
 * - Push the return value of the filtered characters into the result variable
 * - Return result
 * 
 */

// function removeVowels(strArr) { 
//   const VOWELS = ['a','e','i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   let result = [];

//   strArr.forEach(word => {
//     result.push(word.split('').filter(char => !VOWELS.includes(char)).join(''));
//   });
  
//   return result;
// }

function removeVowels(strArr) {
  const VOWELS = /[aeiou]/gi;
  return strArr.map(word => word.replace(VOWELS, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]