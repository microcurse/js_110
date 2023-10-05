/**
 * PEDAC
 * 
 * Understanding the Problem
 * Modify the wordSizes function from the previous exercise to exclude non-letters when determining
 * word size. For instance, the word size of "it's" is 3, not 4.
 * 
 * Explicit requirements:
 * - Input: A string
 * - Output: an object
 * - Output should exclude non-letters when determining word size.
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and Test Cases
 * wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
 * wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
 * wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
 * wordSizes('');                                            // {}
 * 
 * Data Structure
 * Objects
 * 
 * Algorithm
 * - When assigning values to properties on each word iteration, we need to filter out non-letters
 *  from the result.
 * - Need to be careful not to exclude spaces.
 * - Filter out non-letters after they've already been separated into individual elements in an array
 * 
 */

function wordSizes(string) {
  let result = {};
  let stringArr = string.split(' ');
  let stringArrLengths = [];
  const LETTERS_ONLY = /[a-zA-Z]+/g
  
  if (string.length === 0) return result;
  let stringArrLettersOnly = stringArr.map((word) => word.match(LETTERS_ONLY).join(''));

  stringArrLettersOnly.forEach((element) => {
    stringArrLengths.push(element.length);
  });


  for (let i = 0; i < stringArrLengths.length; i++) {
    result[stringArrLengths[i]] = result[stringArrLengths[i]] || 0;
    result[stringArrLengths[i]] += 1;
  }

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 } }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
