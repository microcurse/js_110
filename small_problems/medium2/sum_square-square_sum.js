/**
 * PEDAC
 * Understanding the Problem
 * Write a function that computes the difference between the square of the sum of the first 'count' positive integers and the sum of the squares of the first 'count' positive integers.
 * 
 * Explicit requirements:
 * - Input: integer
 * - Output: integer
 * - The output is the difference between the square of the sum of the first 'count positive integers and the sum of the squares of the first 'count positive integers.
 * - 
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases
 * sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
 * square of the sum of the first count (1 + 2 + 3)**2
 * sum of the squares of the first count (1**2 + 2**2 + 3**2)
 * 
 * sumSquareDifference(10);     // 2640
 * sumSquareDifference(1);      // 0
 * sumSquareDifference(100);    // 25164150
 * 
 * Data Structures
 * - Integers
 * - Loops to keep count of positive integers
 * 
 * Algorithm
 * - Declare a variable to store the result
 * - Define a loop that iterates a number of times equal to the given integer
 * - Increment the count by 1 on each iteration
 * - Store each count into an array
 *  - ex [1, 2, 3]
 * - Add each number together and square it
 * - Assign the result to a variable for subtraction later
 * - Define another loop which iterates the same number of times
 * - On each iteration, square the current count and store it into an array
 * - Add each element together and store it in another variable for subtraction
 * - Assign the difference between the two integers into the result variable
 * - Return the result variable
 * 
 *  Solved in: 18mins
 */

function sumSquareDifference(num) {
  return (sumOfNums(num) ** 2) - squareOfSum(num);
}

function sumOfNums(num) {
  if (num === 1) return 1;
  return num + sumOfNums(num - 1);
}

function squareOfSum(num) {
  if (num === 1) return 1;
  return (num ** 2) + squareOfSum(num - 1);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150