// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and the values 
// are the positions in the array:
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

/**
 * PEDAC
 * P. Understand the problem
 * 
 * Explicit Requirements:
 * - Input: an array
 * - Output: an object
 * - Each string in the array will become the property name and the index of each element will become it's value
 * 
 * Implicit Requirements:
 * 
 * E. Examples and test cases
 * ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"]
 * "Fred" is index 0
 * "Barney" is index 1
 * "Wilma" is index 2
 * "Betty" is index 3
 * "Pebbles" is index 4
 * "Bambam" is index 5
 * 
 * D. Data structure
 * an object
 * 
 * A. Algorithm
 * 1. Collect the indexes of each element in the array and store their values
 *  - Use the Object.keys method to create an array that contains all the indexes of flintstones
 * 2. Create an object where the property names are each element in the array
 *  - Create a property using each flintstone and assign it a value of its index
 *    - To get the index of the currently iterated element, use the Array.prototype.indexOf method.
 * 3. Assign the value of the collected indexes to their respective property names
 * 4. Return the object
 * 
 * C. Code a solution
 * 
 */

const flintstonesIndexed = {}

flintstones.forEach((element, index) => {
  flintstonesIndexed[element] = index;
});

console.log(flintstonesIndexed);