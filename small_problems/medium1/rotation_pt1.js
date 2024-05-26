/**
 * PEDAC
 * 
 * Understanding the problem
 * Write a function that rotates an array by moving the first element to the end of the array. Do not 
 * modify the original array.
 * 
 * 
 * Explicit Requirements:
 * - Input: an array
 * - Output: a new array
 * - If the input is not an array, return undefined.
 * - If the input is an empty array, return an empty array.
 * - Don't modify the original array
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions
 * - N/A
 * 
 * Examples and Test Cases
 * rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
 * rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
 * rotateArray(['a']);                    // ["a"]
 * rotateArray([]);                       // []
 * rotateArray();                         // undefined
 * 
 * Data Structure
 * - Arrays
 * 
 * Algorithm
 * - Create a guard clause to immediately output undefined or an empty array
 *  - How can identify if the paramter is an array
 *    - Use the Array.isArray method
 * - Make a copy of the array to not mutate the original
 * - Remove the first element of that array
 *  - First element can be removed using shift()
 *  - Store it somewhere
 * - Place it at the end of the array
 *  - Can be placed at the end using push()
 * - Return the mutated copy of the array
 * 
 */

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;

  let rotateMe = arr.slice();

  let firstLetter = rotateMe.shift(); // first element removed

  rotateMe.push(firstLetter);
  return rotateMe;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]