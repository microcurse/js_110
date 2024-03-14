/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes a string argument and returns a list of substrings of that string. Each substring
 * should begin with the first letter of the word, and the list should be ordered from shortest to longest.
 * 
 * Explicit requirements
 * - Input: a string
 * - Output: an array of strings
 * - Each substring should begin with the first letter of the word
 * - The list should be ordered from shortest to longest
 * 
 * Implicit requirements
 * - The input string will always be a string
 * - The input string will always have at least one character
 * 
 * Examples and Test Cases
 * leadingSubstrings('abc');      // ['a', 'ab', 'abc']
 * leadingSubstrings('a');        // ['a']
 * leadingSubstrings('xyzzy');    // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
 * 
 * 'abc' => ['a', 'ab', 'abc']
 * How many loops total? = 'abc'.length => 3
 * 
 * loops 1 time => 'a'
 * loops 2 times => 'ab'
 * loops 3 times => 'abc'
 * 
 * Data Structure
 * - Array
 * 
 * Algorithm
 * 1. Define an empty array variable to store the result
 * 2. Iterate over the input string
 * 3. For each iteration, slice the string from 0 to the current index and push the result in the result array
 * 4. Repeat until there are no characters left in the input string
 * 5. Return the result array
 * 
 */

// function leadingSubstrings(str) {
//   let result = [];
//   for (let idx = 1; idx <= str.length; idx += 1) {
//     result.push(str.slice(0, idx));
//   }

//   return result;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/**
 * Further Exploration
 * 
 * Rewrite `leadingSubstrings` using list processing functions. That is, convert the string into an array of some
 * sort and use functions like `map`, `filter`, or `reduce` to get the desired substrings. (You will also need to use
 * `join`.) Try not to use `forEach` as that is too similar to the `for` loop approach.
 * 
 * 
 */

// Map solution
function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0, idx + 1));
}

// // Filter solution
// function leadingSubstrings(str) {

// }

// Reduce solution
function leadingSubstrings(str) {
  return str.split('').reduce((result, _, idx) => {
    result.push(str.slice(0, idx + 1));
    return result;
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]