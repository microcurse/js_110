/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes an array of integers between `0` and `19` and returns an array of
 * those integers sorted based on the english word for each number:
 * 
 * Explicit requirements
 * - Input: an array of integers
 * - Output: an array of those integers sorted based on the english word for each number
 * 
 * Implicit requirements
 * - Create a conversion table for the number to english word equivalent
 * - The array is going to contain the numbers not the english words themselves
 * 
 * Questions
 * - 
 * 
 * Examples and Test Cases
 * alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
 * [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
 * 
 * 
 * ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve" "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
 * 
 * [ 19, 4, 21, 1] -> [nineteen, four, twenty-one, one] -> [four, nineteen, one, twenty-one] -> [4, 19, 1, 21];
 * 
 * Data Structure
 * - We're working with arrays.
 * - Potentially need to create an object to assign the english word to each number
 * - Instead of an object, we can create an array with english words and the index of those words will
 *  correspond to the index of the word.
 * 
 * 
 * Algorithm
 * - Define an array of english words that correspond to its index
 * - Sort the given array using the number provided as an index to access its english word 
 * - Return the sorted array
 * 
 */

const englishNums =  ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

function alphabeticNumberSort(arr) {
  return [...arr].sort((a, b) => {
    if (englishNums[a] < englishNums[b]) {
      return -1;
    } else if (englishNums[a] > englishNums[b]) {
      return 1;
    } else {
      return 0;
    }
  });
}

const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(alphabeticNumberSort(testArr));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
console.log(testArr);

/**
 * Further Exploration
 * 
 * The `Array.prototype.sort` method can also take a function epxression as an argument. If you
 * didn't use one the first time, try refactoring the solution using a function expression.
 * 
 * 
 */

function alphabeticNumberSort(arr) {
  const wordSort = (a, b) => {
    if (englishNums[a] < englishNums[b]) {
      return -1;
    } else if (englishNums[a] > englishNums[b]) {
      return 1;
    } else {
      return 0;
    }
  }

  return [...arr].sort(wordSort);
}

console.log(alphabeticNumberSort(testArr));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
console.log(testArr);