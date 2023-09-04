/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the following data structure, write some code that defines an object where the key 
 * is the first item in each subarray, and the value is the second.
 * 
 * 
 * Explicit Requirements:
 * - Input: multidimensional array
 * - Output: object
 * - the key is the first item in each subarray
 * - the value is the second item in each subarray
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [
 *  ['a', 1],
 *  ['b', 2],
 *  ['sea', {'c': 3}]
 * ]
 * 
 * {
 *  a: 1,
 *  b: 2,
 *  sea: {'c': 3}
 * }
 * 
 * Data Structure
 * Iterate over the outer array to access subarrays. We then collect all elements in the subarrays
 * and define an object using the first and second elements as keys and values, respectively.
 * 
 * Algorithm
 * - Create an empty object literal to store the result
 * - Iterate over the outer array to access subarrays
 *  - Methods to use:
 *    - forEach()
 * - Use the first element to define the key of the result object
 * - Use the second element to define the value of the result object
 * - Output result
 * 
 * Code
 * 
 */

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

const obj = {};

arr.forEach(element => {
  obj[element[0]] = element[1];
});

console.log(obj);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// fromEntries solution
const obj2 = Object.fromEntries(arr);

console.log(obj2);