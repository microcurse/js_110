/**
 * PEDAC
 * 
 * Understand the Problem
 * How would you order the following array of number strings by descending numeric value 
 * (largest number value to smallest)?
 * 
 * Explicit Requirements:
 * - Input: an array
 * - Output: an array
 * - Sort each number in descending numeric value
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Questions:
 * - None
 * 
 * Examples and test cases
 * '10', '11', '9', '7', '8'
 * '11', '10', '9', '8', '7'
 * 
 * Data Structure
 * Convert string to number so that it can be used for comparison and sorting
 * 
 * Algorithm
 * - Convert strings to numbers
 *  - Use the unary + operator
 *  - Or use the Number function
 * - Compare and sort them in descending order
 *  - Use the sort method
 * - Convert them back into strings
 * - Return the result
 * 
 */

let arr = ['10', '11', '9', '7', '8'];

console.log(arr.sort((a, b) => Number(b) - Number(a)));