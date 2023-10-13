/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that combines two arrays passed as arguments, and returns a new array that contains
 * all elements from both array arguments, with each element taken in alternation.
 * 
 * You may assume that both input arrays are non-empty, and that they have the same number of elements.
 * 
 * Explicit Requirements:
 * - Input: two arrays
 * - Output: a single array
 * - The output is a combination of of both arrays, with each element taken in alternation
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [1, 2, 3], ['a', 'b', 'c'] -> [1, 'a', 2, 'b', 3, 'c'];
 * 
 * Data Structure
 * 
 * Algorithm
 *  - Create a loop that iterates a number of times equal to the total number of elements from 
 *    both arrays
 *  - On the first iteration, take an element from the first array and put it into the result
 *  - On the next iteration, take an element from the second array and put it into the result
 *  - Repeat until there are no elements left in either array (we've reached the number of iterations
 *    equal to the total number of elements from both arrays)
 * 
 * Code
 */

function interleave(firstArr, secondArr) {
  let result = [];
  for (let idx = 0; idx < firstArr.length; idx += 1) {
    result.push(firstArr[idx], secondArr[idx]);
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/* Further Exploration using the forEach method */
function interleave2(firstArr, secondArr) {
  let result = [];

  secondArr.forEach((_, idx) => {
    result.push(firstArr[idx], secondArr[idx]);
  });

  return result;
}

console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/* Further Exploration using the map method */
function interleave3(firstArr, secondArr) {
  let result = firstArr.map((_, idx) => {
    return [firstArr[idx], secondArr[idx]];
  });

  return [].concat(...result);
}


console.log(interleave3([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]