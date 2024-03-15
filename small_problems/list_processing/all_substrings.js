/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that returns a list of all substrings of a string. Order the returned list by where in
 * the string the substring begins. This means that all substrings that start at index position 0 should come 
 * first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur
 * at each position, return the substrings at a given index from shortest to longest.
 * 
 * Explicit requirements
 * - Input: a string
 * - Output: an array of substrings
 * - Order the returned list by where in the string the substring begins.
 * - All substrings that start at index position 0 come first, then all substrings that start at index
 *  position 1, and so on.
 * 
 * Implicit requirements
 * - Input will not be empty
 * 
 * Questions
 * - 
 * 
 * Examples and Test Cases
 * substrings('abcde');
 * 
 * // returns
 * [ "a", "ab", "abc", "abcd", "abcde",
 *   "b", "bc", "bcd", "bcde",
 *   "c", "cd", "cde",
 *   "d", "de",
 *   "e" ]
 * 
 * Data Structure
 * - Arrays
 * 
 * Algorithm
 * 1. Each index of the given string will signify a set of substrings that will follow
 * 2. Keep count of each set of substrings. This will help in creating the set of substrings.
 * 3. Keep iterating until there are no substrings left in the input
 * 4. Output the result
 * 
 */

function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0, idx + 1));
}

// function substrings(str) {
//   let result = [];

//   // Use spread syntax to concat or 'pour' the elements from the sub arrays created by leadingSubstrings into the result variable.

//   for (let idx = 0; idx < str.length; idx += 1) {
//     result.push(...leadingSubstrings(str.slice(idx)));
//   }

//   return result;
// }

/**
 * Further Exploration
 * Rewrite `substrings` using list processing functions. That is, convert the string into an array of
 * some sort and use functions like `map`, `filter`, or `reduce` to get the desired substrings. (You
 * will also need to use `join`.) Try not to use `forEach` as that is too similar to the `for` loop
 * approach.
 * 
 */

function substrings(str) {
  return str.split('').flatMap((_, idx) => leadingSubstrings(str.slice(idx)));
}

console.log(substrings('abcde'));

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
