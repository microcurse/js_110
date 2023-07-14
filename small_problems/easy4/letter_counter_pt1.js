// Write a function that takes a string consisting of zero or more space separated words and returns an 
// object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

/**
 * PEDAC
 * P. Understand the problem
 * 
 * Explicit Requirements:
 * - Input: a string
 * - Output: an object
 * - Each object's property represents the the number of characters in a word.
 * - The value of each key will represent how many words in the given string exist with the corresponding number
 * of characters.
 * - Words consist of any sequence of non-space characters
 * 
 * Implicit Requirements:
 * 
 * Questions:
 * 
 * 
 * E. Examples and test cases
 * wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
 * ['4', '5', '3', '6'];
 * 
 * wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
 * ['3', '6', '7', '3', '3', '3', '3', '7']
 * 
 * wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
 * ['6', '2', '4']
 * 
 * wordSizes('');                                            // {}
 * []
 * 
 * D. Data structure
 * strings and objects and arrays.
 * 
 * 
 * A. Algorithm
 * 1. Create an object which stores our result
 * 2. Create an array that contains elements representing the length of each space separated word
 *  - How do I replace each element with it's length?
 * 3. Populate the result object with the element of each array and increment it's value for each number
 *  - How do I increment the values of each key?
 *    - += outputs NAN when I try to increment
 *    - Solution to this is to first set the key's value to 0 if it doesn't already exist using the 
 *      short-circuit evaluation trick learned from practice problem 11 of Lesson 1 in JS110
 *  - Each key will only be created if that length exists. Therefore each value should start at one
 *  - Increment that value by one for each ocurrance in the given array.
 * 4. return result
 * 
 * 
 * C. Code a solution
 * 
 */

function wordSizes(string) {
  let result = {};
  let stringArr = string.split(' ');
  let stringArrLengths = [];

  if (string.length === 0) return result;

  stringArr.forEach(element => {
    stringArrLengths.push(element.length);
  });

  for (let i = 0; i < stringArrLengths.length; i++) {
    result[stringArrLengths[i]] = result[stringArrLengths[i]] || 0;
    result[stringArrLengths[i]] += 1;
  }

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
