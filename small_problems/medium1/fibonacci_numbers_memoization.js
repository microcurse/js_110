/**
 * PEDAC
 * Understanding the Problem
 * Refactor the recursive fibonacci function to use memoization.
 * 
 * Hint: One approach to memoization is to use a lookup table, such as an object, for storing and accessing previously computed values.
 * 
 * Explicit requirements:
 * - Input: a number
 * - Output: a number
 * - The input is the the nth Fibonacci number
 * - Write a recursive function to acheive the output number
 * - Use memoization to store the results of the recursive function
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - What is "memoization"?
 * - Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed.
 * 
 * Examples and Test Cases
 * fibonacci(20);       // 6765
 * fibonacci(50);       // 12586269025
 * fibonacci(75);       // 2111485077978050
 * 
 * Data Structure
 * - Object
 * 
 * Algorithm
 * - Create an object look up table for storing and accessing previously computed values.
 * 
 * 
 */

let fibLookup = {};

function fibonacci(num) { 
  if (num <= 1) return num;
  if (fibLookup[num]) {
    return fibLookup[num];
  }
  fibLookup[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return fibLookup[num];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(21));       // 10946
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050