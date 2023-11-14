/**
 * PEDAC
 * Improved "join"
 * 
 * Write a function that returns a comma delimited string along with either 'or' or 'and' to delimit
 * the last two numbers in the string.
 * 
 * Explicit Requirements
 * - Input: array, delimiters (', ', 'and', 'or')
 * - Output: string
 * - The output string is the elements in the array delimited by commas and the last two elements
 * are delimited by 'or' or 'and'.
 * - The function can accept a number of delimiters. The first argument is what delimits all 
 * elements besides the last 2.
 * 
 * Implicit Requirements
 * - N/A
 * 
 * Questions
 * - N/A
 * 
 * Exapmles / Test Cases
 * 
 * joinOr([1, 2, 3, 4, 5, 6, 7, 8, 9], ', ', 'or');
 * => Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, or 9
 * 
 * joinOr([1, 2], 'and');
 * => Choose a square: 1 and 2
 * 
 * joinOr([1, 2, 3]);
 * => Choose a square: 1, 2, or 3
 * 
 * joinOr([1, 2], 'or');
 * => Choose a square: 1 or 2
 * 
 * Data Structures
 * [1, 2, 3]
 * => "1, 2, or 3"
 * 
 * If the length of the array is 1, no delimiter
 * If the length of the array is 2, delimit with an 'or'
 * If the length of the array greater than 3, delimit all elements with ', ' and delimit the last 
 * two elements with an 'or'
 * 
 * Algorithm
 * - Create conditions for delimiters based on the array length
 *  - If length of array is more than 3
 *    - delimit all elements with delimiter
 *    - remove the last element from the array and add it to the result string with 
 *      the lastDelimiter
 * - Iterate through array and create string with delimiters
 * - Output result string
 * 
 * Code
 */

function joinOr(squares, delimiter = ', ', lastDelimiter = 'or') {
  let result = '';
  if (squares.length >= 3) {
    let lastElement = squares.pop();
    result = squares.join(delimiter).concat(', ' + lastDelimiter  + ' ', lastElement);
  } else if (squares.length === 2) {
    result = squares.join(' ' + delimiter + ' ');
  } else {
    return squares.join('');
  }

  return result;
}

console.log(joinOr([1, 2, 3, 4, 5, 6, 7, 8, 9], ', ', 'or'));
// joinOr([1, 2, 3, 4, 5, 6, 7, 8, 9], ', ', 'or');
// => Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, or 9

console.log(joinOr([1, 2], 'and'));
// joinOr([1, 2], 'and');
// // => Choose a square: 1 and 2

console.log(joinOr([1, 2, 3]));
// // => Choose a square: 1, 2, or 3

console.log(joinOr([1, 2], 'or'));
// // => Choose a square: 1 or 2
console.log(joinOr([5], 'or'));