/**
 * PEDAC
 * 
 * Understand the problem:
 * Sort Strings by Most Adjacent Consonants
 * Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent
 * consonants a particular string contains. If two strings contain the same highest number of adjacent
 * consonants, they should retain their original order in relation to each other. Consonants are considered
 * adjacent if they are next to each other in the same word or if there is a space between two consonants
 * in adjacent words.
 * 
 * Note that for this problem, the letters 'y' and 'w' should be treated as consonants.
 * 
 * Explicit requirements:
 * - Input: an array of strings
 * - Output: a new array of strings
 *  - The strings are sorted to the highest number of adjacent consonants a particular string contains.
 * - If two strings contain the same highest number of adjacent consonants, they should retain their
 * original order in relation to each other.
 * - Consonants are considered adjacent if they are next to each other in the same word or if there is
 * a space between two consonants in adjacent words.
 * - 'y' and 'w' are treated as consonants.
 * 
 * Implicit requirements:
 * - There can be separate words in a single element in the array.
 * - The output array is sorted in descending order.
 * - Single consonants in a string do not affect sort order in comparison to strings with no consonants. 
 * Only adjacent consonants affect sort order.
 * 
 * Questions:
 * - Are the strings case-sensitive?
 * - Are the input strings real english words?
 * - What's the direction of the sort order? Ascending or descending?
 * - Can there be two words in a single element in the array? The phrase "consonants are considered adjacent
 * if there is a space between two consonants in adjacent words" suggests that there can be two words in a
 * single element in the array.
 * - Do strings always contain multiple words?
 * - Can strings contain a single word?
 * - Can strings be empty?
 * - Is it possible for a string to contain no adjacent consonants?
 * 
 * Examples and test cases:
 * 
 * let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
 * console.log(sortStringsByConsonants(list1));
 * // ['dddaa', 'ccaa', 'aa', 'baa']
 *  
 * ['aa', 'baa', 'ccaa', 'dddaa']
 * 
 * 'aa' => 0 adjacent consonants 
 * 'baa' => 0 adjacent consonants
 * 'ccaa' => 2 adjacent consonants
 * 'dddaa' => 3 adjacent consonants
 * 
 * ['dddaa', 'ccaa', 'aa', 'baa']
 * 
 * let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
 * console.log(sortStringsByConsonants(list2));
 * // ['salt pan', 'can can', 'batman', 'toucan']
 * 
 * ['can can', 'toucan', 'batman', 'salt pan']
 * 
 * 'can can' => 2 adjacent consonants
 * 'toucan' => 0 adjacent consonants
 * 'batman' => 2 adjacent consonants
 * 'salt pan' => 3 adjacent consonants
 * 
 * ['salt pan', 'can can', 'batman', 'toucan']
 * 
 * let list3 = ['bar', 'car', 'far', 'jar'];
 * console.log(sortStringsByConsonants(list3));
 * // ['bar', 'car', 'far', 'jar']
 * 
 * let list4 = ['day', 'week', 'month', 'year'];
 * console.log(sortStringsByConsonants(list4));
 * // ['month', 'day', 'week', 'year']
 * 
 * 
 * Data structures:
 * {
 * 'aa': 0,
 * 'baa': 0,
 * 'ccaa': 2,
 * 'dddaa': 3
 * }
 * 
 * Algorithm:
 * 1. Identify what a 'consonant' is OR identify what a 'consonant' isn't.
 *  - vowels are the opposite of consnants. Here are the vowels: 'a', 'e', 'i', 'o', 'u'.
 * 2. an 'adjacent consonant' is when two 'consonants' are next to each other in a string or spearated by a 
 * space.
 * 3. Create an empty object called 'bunchaStrings' 
 *  - This will store the strings as properties and 'count of adj consonants' as values later.
 * 4. In order to determine 'adjencent consonants', we need to iterate over the string.
 *  - check each character if it's a 'consonant'
 *  - if no 'consonants' exist, return 0
 *  - if a 'consonant' exists, increment the 'count of adj consonants' by 1
 *  - if the following element is a 'consonant', increment the 'count of adj consonants' by 1
 *  - else, set 'adj consonant count' equal to 0
 *  - repeat step 4 until there are no elements left in the string
 * 5. Create a property in the 'bunchaStrings' object using the currently iterated string as the property name
 * and the 'count of adj consonants' as it's value. 
 * 6. Create a new array and populate the array with the strings in order of the highest 'count of adj 
 * consonants' first.
 * 7. Return that new array.
 * 
 * Notes on my algorithm:
 * I got a bit too implementation heavy during the initial stage of the algorithm. I need to start off
 * by thinking at a higher-level before getting in too deep. Ultimately, I acheived a similar conclusion
 * and a rather sound algorithm. Because of this, I did not account for spaces in the input string.
 * 
 * - I need to remember to utilize properties such as length to help when needing to count the number of 
 * elements in a string or an array.
 * 
 */

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function sortStringsByConsonants(arrOfStrings) {
  return arrOfStrings.sort((a, b) => {
    return (countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));
  });
}

function countMaxAdjacentConsonants(str) {
  let cleanStr = str.split(' ').join('');
  let count = 0;
  let tempStr = '';

  cleanStr.split('').forEach((char) => {
    if (!VOWELS.includes(char)) {
      tempStr += char;

      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      tempStr = '';
    }
  });

  return count;
}

// // Test cases for sub-problem
// console.log(countMaxAdjacentConsonants('dddaa')); // 3
// console.log(countMaxAdjacentConsonants('ccaa'));  // 2
// console.log(countMaxAdjacentConsonants('baa'));   // 0
// console.log(countMaxAdjacentConsonants('aa'));    // 0


// Test cases for full problem
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']