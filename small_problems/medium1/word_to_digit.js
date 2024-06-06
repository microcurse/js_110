/**
 * PEDAC
 * 
 * Understanding the problem
 * Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" -- 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' -- converted to its corresponding digit character.
 * 
 * Explicit requirements:
 * - Input: string
 * - Output: digit character as a string
 * - Output is a string representation of the digit
 * - Replace the string word with the digit in the full string sentence
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions
 * - N/A
 * 
 * Exapmles and Test Cases
 * wordToDigit('Please call me at five five five one two three four. Thanks.'); // "Please call me at 5 5 5 1 2 3 4. Thanks."
 * 
 * Data Structures
 * - Integers
 * - Strings
 * - A collection of strings that equal to it's integer counterpart
 * - Separate the given string into an array of substrings
 * 
 * Algorithm
 * - Create a conversion table of words to their integer translation
 * - Split the string into an array of substrings
 * - Iterate over each substring
 * - If the element is a number word, convert it to the integer counterpart
 * - Remove that word from the array and replace it with the integer
 * - Continue doing this till there are no elements left in the array
 * - Concatenate the substrings array and output the converted string
 * 
 */

const WORD_DIGITS = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

function wordToDigit(sentence) {
  Object.keys(WORD_DIGITS).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    sentence = sentence.replace(regex, WORD_DIGITS[word]);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The weight is done."