/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that counts the number of occurrences of each element in a given array. Once counted, 
 * log each element alongside the number of occurrences. Consider the words case sensitive 
 * eg. ("suv" !== "SUV");
 * 
 * Explicit Requirements:
 * - Input: an array
 * - Output: console output of a string
 * - The output contains a word with how many times it occurs in the array
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * 
 * Data Structure
 * 
 * Algorithm
 * - Iterate through array
 * - Create an object from each element in the array using the element as the property
 * - Increment the property's value by 1 for each occurrence of that word
 * - Create an output which follows this format: word => 1
 * 
 * Code
 */

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

function countOccurrences(arr) {
  const result = {};

  arr.forEach((element) => {
    result[element] = result[element] || 0;
    result[element] += 1;
  });

  for (const [key, value] of Object.entries(result)) {
    console.log(`${key} => ${value}`);
  }
}

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1