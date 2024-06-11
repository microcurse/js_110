/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.
 * 
 * Explicit requirements:
 * - Input: a number
 * - Output: a number
 * - The input is the the nth Fibonacci number
 * - Write a recursive function to acheive the output number
 * - The output is the nth Fibonacci number
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases
 * fibonacci(1);       // 1
 * fibonacci(2);       // 1
 * fibonacci(3);       // 2
 * fibonacci(4);       // 3
 * fibonacci(5);       // 5
 * fibonacci(12);      // 144
 * fibonacci(20);      // 6765
 * 
 * If n is 1, fibonacci is 1
 * If n is 2, fibonacci is 1
 * If n is 3, previous two numbers are 1 + 1 = 2
 * If n is 4, previous two numbers are 1 + 2 = 3
 * If n is 5, previous two numbers are 2 + 3 = 5
 * 
 * Data Structure
 * - Numbers
 * 
 * Algorithm
 * - If n is less than or equal to 2, return 1
 *  - This way we can set an exit condition of the first 2 numbers as 1 and 1
 * - Otherwise, return fibonacci(n - 1) + fibonacci(n - 2)
 * 
 */

function fibonacci(num) { 
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765