/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array.
 * Each element in the grocery list contains a fruit name and a number that represents the desired quantity of
 * that fruit. The output array is such that each fruit name appears the number of times equal to its desired 
 * quantity.
 * 
 * Explicit requirements:
 * - Input: two-dimensional array
 * - Output: one-dimensional array
 * - Each element contains a fruit name and a number that represents the desired quantity of that fruit
 * - The output array contains fruit names that appear the number of times equal to its desired qty
 * 
 * Implicit requirements:
 * - 
 * 
 * Questions:
 * - Can the array be empty?
 * - Can there only be one fruit?
 * 
 * Examples and Test Cases
 * buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
 * // returns ["apple", "apple", "apple", "orange", "banana", "banana"]
 * 
 * fruits[0] === ['apple', 3]
 * fruits[0][1] === 3;
 * 
 * Data Structures
 * - Multi-dimensional arrays
 * - loops
 * - Use 
 * 
 * Algorithm
 * - Define an empty array variable to store the result
 * - Iterate through the given two-dimensional array
 * - Create a loop that iterates the same number of times as the second element (element at index 1) of each sub array
 * - On each iteration, push the first element (element at index 0) to the result variable
 * - Return result variable
 * 
 */

function buyFruit(fruits) {
  let result = [];

  for (let idx = 0; idx < fruits.length; idx += 1) {
    for (let numFruits = fruits[idx][1]; numFruits > 0; numFruits -= 1) {
      result.push(fruits[idx][0]);
    }
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]