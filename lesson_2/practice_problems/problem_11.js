/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the following data structure, use the map method to return a new array identical 
 * in structure to the original but, with each number incremented by 1. Do not modify the 
 * original data structure.
 * 
 * Explicit Requirements:
 * - Input: array
 * - Output: array
 * - Incremement each number by one
 * - Don't modify the original data structure (array)
 * - Use the map method
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * [
 *  { a: 1 },
 *  { b: 2, c: 3 },
 *  { d: 4, e: 5, f: 6}
 * ]
 * 
 * a: 1 -> a: 2
 * 
 * b: 2 -> b: 3
 * c: 3 -> c: 4
 * 
 * d: 4 -> d: 5
 * e: 5 -> e: 6
 * f: 6 -> f: 7
 * 
 * 
 * Accessing the value of each property within the objects in the array.
 * 
 * arr[0]['a'] += 1
 * arr[1]['b'] += 1
 * arr[1]['c'] += 1
 * arr[2]['d'] += 1
 * arr[2]['e'] += 1
 * arr[2]['f'] += 1
 * 
 * 
 * Data Structure
 * 
 * Algorithm
 * - Create a variable to store the result of calling the map method on the given data structure.
 * - Iterate over all objects in the array
 * - Target each property's value
 *   - For each one of the object, identify the value which needs to be incrememented
 *    - How do we incremement each value?
 *    - How do I target each property's value?
 * - Incremement each property's value by 1
 * - ???
 * - Profit
 * 
 * Code
 */

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  // let keys = Object.keys(obj);
  // can target first propety name by using keys[0]
  //obj[keys[0]] += 1; // this increments the value appropriately
  // problem is, it only targets the first property according to the array created with Object.keys
  // iterate over all elements in the keys array, not just the first one
  let iteratedObj = {};

  for (let prop in obj) {
    iteratedObj[prop] = obj[prop];
    iteratedObj[prop] += 1;
  }
  // Object.keys(obj).forEach(element => {
  //   iteratedObj[element] = obj[element] + 1;
  // });

  return iteratedObj;
});

console.log(newArr);
console.log(arr);