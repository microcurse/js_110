/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that returns a list of all palindromic substrings of a string. That is, each
 * substring must consist of a sequence of characters that read the same forward and backward. 
 * The substrings in the returned list should be sorted by their order of appearnce in the input
 * string. Duplicate substrings should be included multiple times.
 * 
 * You may (and should) use the `substrings` function you wrote in the previous exercise.
 * 
 * For the purpose of this exercise, you should consider all characters and pay attention to case;
 * that is, `AbcbA` is a palindrome, but `Abcba` and `Abc-bA` are not. In addition, assume that single
 * characters are not palindromes.
 * 
 * Explicit requirements:
 * - Input: a string
 * - Output: an array of palindromes
 * - Palindromes are defined as a sequence of characters that read the same forward and backward
 * - Substrings in the array should be sorted by their order of appearance in the input string
 * - Duplicate substrings should be included multiple times
 * - Case matters
 * - Use the substrings function from previous exercises
 * - Special characters matter
 * - Single charcters are not palindromes
 * 
 * Implicit requirements:
 * - Palindromes must have a minimum of 2 characters
 * 
 * Questions:
 * -
 * 
 * Examples and Test Cases
 * palindromes('abcd');       // []
 * palindromes('madam');      // [ "madam", "ada" ]
 * 
 * palindromes('knitting cassettes');
 * // returns
 * // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
 * 
 * Data Structures
 * - Arrays
 * - Strings
 * - Substrings
 * 
 * Algorithm
 * 1. Define an empty array variable to store the result
 * 2. Iterate over the input string create substrings
 * 3. Store those substrings inside of the result array
 * 4. Filter all palindromes in the result array
 *  a. Check if the currently iterated substring is a palindrome
 *  b. Palindromes are a sequence of characters that read the same forward and backward
 *  c. If it is a palindrome, add it to the filter method's returned array
 * 5. Output result
 * 
 */

function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return str.split('').flatMap((_, idx) => leadingSubstrings(str.slice(idx)));
}

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]