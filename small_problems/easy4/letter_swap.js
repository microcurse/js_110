/**
 * PEDAC
 * 
 * Given a string of words separated by spaces, write a function that swaps the first and last letters
 * of every word.
 * 
 * Explicit Requirements:
 * - Input: string of words separated by spaces
 * - Output: string of words separated by spaces
 * - Swap the first and last letters of every word
 * 
 * Implicit Requirements:
 * - Every word contains at least one letter
 * - String will always contain at least one word
 * - Each string contains nothing but words and spaces
 * - Each word has no leading, trailing, or repeated spaces
 * 
 * Examples/ Test Cases
 * swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
 * swap('Abcde');                          // "ebcdA"
 * swap('a');                              // "a"
 * 
 * 'Oh what a wonderful day it is'
 * 'hO thaw a londerfuw yad ti si'
 * 
 * Data Structures
 * Strings and arrays. We will need to convert the string into an array in order to transfrom it.
 * 
 * Algorithm
 * - Split the string into an array and iterate over each word
 * - If the word.length === 1, return that word
 * - Split the word into an array to iterate over each character
 * - Take the first character and store it into a variable
 * - Take the last character and store it into another variable
 * - Put the first character at the end of the array
 * - Put the last character at the front of the array
 * - Join the array
 * - Return the resulting array
 * 
 */


function swap(string) {
  let stringArr = string.split(' ');
  if (string.length === 1) return string;

  let words = stringArr.map((word) => {
    let wordArr = word.split('');

    let firstChar = wordArr.shift();
    let lastChar = wordArr.pop();

    word = lastChar + wordArr.join('') + firstChar;

    return word;
  }).join(' ');

  return words;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"