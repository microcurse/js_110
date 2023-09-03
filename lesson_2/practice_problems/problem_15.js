/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the following data structure, write some code to return an array which contains only 
 * the objects where all the numbers are even.
 * 
 * Explicit Requirements:
 * - Input: an array
 * - Output: an array
 * - Output array should only contain objects where all numbers are even
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * 
 * { a: [1, 2, 3] }
 * this object would be invalid because it has the number 1
 * 
 * { b: [2, 4, 6], c: [3, 6], d: [4] }
 * this object would be invalid because it has the number 3
 * 
 * { e: [8], f: [6, 10] }
 * this object would be valid
 * 
 * The whole collection should be checked to ensure all numbers within the object are even. The
 * first instance of an odd number would end execution and return nothing.
 * 
 * Data Structure
 * 
 * { a: [1, 2, 3] }
 * Iterate over this object's values
 * 
 * [1, 2, 3]
 * Check this array for odd numbers. 1 is an odd number, send something up to prevent this whole 
 * object from being returned
 * 
 * { b: [2, 4, 6], c: [3, 6], d: [4] }
 * Iterate over this object's values
 * 
 * [2, 4, 6]
 * Check this array for odd numbers. No odd numbers, move on to the next array
 * 
 * [3, 6]
 * Check this array for odd numbers. 3 is an odd number, send something up to prevent this whole 
 * object from being returned
 * 
 * { e: [8], f: [6, 10] }
 * Iterate over this object's values
 * 
 * [8]
 * Check this array for odd numbers. No odd numbers found
 * 
 * [6, 10]
 * Check this array for odd numbers. No odd numbers found. Send something up to confirm that this
 * whole object is good to go
 * 
 * 
 * Algorithm
 * - Create a variable to store the newly filtered array
 * - Iterate over each object to get all values
 * - Iterate all values and check for odd numbers
 * - If there's an odd number, exit iteration and check the next value
 * - If there are no odd numbers in the array, push the object to the result variable
 * 
 * 
 * Code
 */

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// function containsOnlyEvenNums(obj) {
//   let isEven = (number) => number % 2 === 0;

//   // Iterate over each individual array and check for even numbers
//   Object.values(obj).forEach(subArr => {
//     // Check for even numbers
//     if (!subArr.every(isEven)) {
//       // What do we do if the subArray contains all even numbers?
//       // The object should pass the test and be returned by the filter function
//       break;
//     }
//   });

// //   return obj;
// // }

let evenNumbersOnly = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(number => number % 2 === 0);
  })
})

console.log(evenNumbersOnly);