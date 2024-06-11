/**
 * PEDAC
 * Understanding the Problem
 * Rewrite your recursive fibonacci function so that it computes its results without using recursion.
 * 
 * Explicit requirements:
 * - Input: a number
 * - Output: a number
 * - The input is the the nth Fibonacci number
 * - Write a procedural function to acheive the output number
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases
 * fibonacci(20);       // 6765
 * 1 + 1 = 2
 * 1 + 2 = 3
 * 2 + 3 = 5
 * 3 + 5 = 8
 * 
 * fibonacci(50);       // 12586269025
 * fibonacci(75);       // 2111485077978050
 * 
 * Data Structure
 * - Numbers
 * 
 * Algorithm
 * - Create a loop which iterates nth number of times
 * - Add 0 + 1 to start the sequence
 * - prevNum = 0, currNum = 1, nextNum = prevNum + currNum
 * - prevNum = currNum, currNum = nextNum, nextNum = prevNum + currNum
 * - Repeat as many times as the given nth argument
 * - Return currNum
 * 
 * 
 */

function fibonacci(nth) {
  let prevNum = 0;
  let currNum = 1;
  
  for (let i = 2; i <= nth; i += 1) {
    [prevNum, currNum] = [currNum, prevNum + currNum];
  }

  return currNum;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050