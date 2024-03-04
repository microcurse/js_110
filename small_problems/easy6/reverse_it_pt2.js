/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes a string argument containing one or more words and returns a new string containing
 * the words from the string argument. All five-or-more letter words should have their letters in reverse order.
 * The string argument will consist of only letters and spaces. Words will be separated by a single space.
 * 
 * Explicit requirements
 * - Input: a string
 *  - can contain one or more words
 * - Output: a new string
 *  - string contains words from the input string
 * - All five-or-more letter words should have their letters in reverse order
 * - Input string will only consist of letters and spaces.
 * - Words will be separated by a single space
 * 
 * Implicit Requirements
 * - If a word has less than 5 characters, it will keep it's place in the string.
 * 
 * Questions
 * - 
 * 
 * Examples and Test Cases
 * reverseWords('Professional');             // "lanoisseforP"
 * reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
 * reverseWords('Launch School');            // "hcnuaL loohcS"
 * 
 * Data Structure
 * - Arrays in order to maniuplate the words and characters in the string
 * 
 * Algorithm
 * 1. Split the input string into individual words in an array 
 * 2. Iterate over the array checking the length of each word
 * 3. If the word has more than 5 characters, split it into another array
 * 4. Reverse that word
 * 5. Join that array into a string
 * 6. Repeat for all words in the string array
 * 7. Rejoin the string
 * 8. Output the result
 * 
 * 
 */

const MIN_WORD_LENGTH = 5;

function reverseWords(str) {
  let strArr = str.split(' ');
  let result = [];

  strArr.forEach((word) => {
    if (word.length >= MIN_WORD_LENGTH) {
      result.push(reverseThis(word));
    } else {
      result.push(word);
    }
  });
  
  return result.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/**
 * Further Exploration
 * Solve this using the `map()` method.
 * 
 * The `map()` method always returns a new array of the same length as the array it's called on.
 */

function reverseWordsMap(str) {
  return str.split(' ').map((word) => {
    return word.length >= MIN_WORD_LENGTH ? reverseThis(word) : word;
  }).join(' ');
} 

function reverseThis(str) {
  return str.split('').reverse().join('');
}

console.log(reverseWordsMap('Exisistential'));             // "laitnetsisixE"
console.log(reverseWordsMap('Take a quick detour'));    // "Take a kciuq ruoted"
console.log(reverseWordsMap('Launch School'));            // "hcnuaL loohcS"