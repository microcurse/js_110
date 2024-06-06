/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
 * 
 * Explicit requirements:
 * - Input: integer
 * - Output: an integer representing the index of the found Fibonacci number.
 * - The argument passed to the function represents the number of digits in the integer
 * - The test case represents the index of the Fibonacci sequence where the first occurence of a number with the argument's number of digits.
 * - Use 'n' to denote a BigInt integer
 * - The argument is always an integer greater than or equal to 2
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and Test Cases
 * findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
 * findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
 * 
 * 2n means we need to create a Fibonacci sequence that continues until the first 2 digit number is created. In this case, the first 2 digit number is 13 which is the 7th index of the sequence.
 * 
 * 3n means we need to create a Fibonacci sequence that continues until the first 3 digit number is created. In this test case, the first 3 digit number is 144 which is the 12th index of the sequence.
 * 
 * Data Structure
 * - A Fibonacci sequence of numbers can be contained in an array?
 * - A Fibonacci sequence of numbers that continues outputting numbers until that output has a the number of digits which match the argument. Then, somehow, calculate the index of that output number. 
 * 
 * Algorithm
 * - Create a loop which creates a Fibonacci sequence.
 * 
 * 
 * Sub-Algorithm: Create a Fibonacci sequence
 * - Loop should start at one
 * - Add the previous number (currerntly 0) to the next number (currently 1)
 * - On the following iteration, add the next number to the previous number and reassign it to the next number. Reassign the previous next number to the previous number.
 * 
 */

function findFibonacciIndexByLength(digitLength) {
  let prevNum = 0n;
  let nextNum = 1n;
  let currNum = 1n;
  let index = 1n;

  while (String(currNum).length < digitLength) {
    nextNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nextNum;
    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.