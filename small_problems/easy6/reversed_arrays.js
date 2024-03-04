/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array
 * passed into this method. The return value should be the same Array object.
 * 
 * You may not use `Array.prototype.reverse()`
 * 
 * Explicit requirements:
 * - Input: an array
 * - Output: a new array reversed
 * - Can't use `Array.prototype.reverse()`
 * - Mutation of the array is necessary
 * 
 * Implicit requirements:
 * - Given empty arrays return empty arrays
 * 
 * Questions
 * - 
 * 
 * Examples and Test Cases
 * let list = [1, 2, 3, 4];
 * let result = reverse(list);
 * console.log(result); // logs [4,3,2,1]
 * console.log(list === result); // logs true
 * 
 * Algorithm
 * 1. Iterate over the given array
 * 2. Remove the last element in the array
 * 3. add it to the front of the result array
 * 4. Repeat till there are no elements left in the given array
 * 5. Return result array
 * 
 */

function reverse(arr) {
  for (let i = 0; i <= arr.length; i += 1) {
    arr.unshift(arr.pop());
  };

  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true