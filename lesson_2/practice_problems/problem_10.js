/**
 * PEDAC
 * 
 * Understand the Problem

 * 
 * Explicit Requirements:
 * - Input: 
 * - Output:
 * 
 * Implicit Requirements:
 * 
 * Questions:
 * 
 * Examples and test cases
 * 
 * Data Structure
 * 
 * Algorithm
 * 
 * Code
 */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a).reverse();
  }
});

console.log(arr);
console.log(newArr);