/**
 * PEDAC
 * 
 * Understanding the problem
 * Write a function that takes an integer argument and returns an array containing all integers
 * between 1 and the argument (inclusive), in ascending order.
 * 
 * You may assume that the argument will always be a positive integer.
 * 
 * Explicit requirements
 * - Input: Positive integer
 * - Output: An array
 *  - Output array contains all integers between 1 and the argument, inclusively
 * - Output is sorted in ascending order
 * - Input will always be a positive integer
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and test cases
 * sequence(5);    // [1, 2, 3, 4, 5]
 * sequence(3);    // [1, 2, 3]
 * sequence(1);    // [1]
 * 
 * Data Structure
 * 5  => 1, 2, 3, 4, 5
 * 3  => 1, 2, 3
 * 1  => 1
 * 10 => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 * 
 * - Arrays are appropriate here
 * - Seems like a for loop might be appropriate here in order to sequentially decrement the given
 *  integer and store it for later output.
 * 
 * Algorithm
 * 1. Declare a variable and initialize it with an empty array
 * 2. Define a for loop which is initialized to the input integer
 * 3. At each iteration of the for loop, store the current loop iteration to the result variable
 * 4. Decrement the loop iteration by 1
 * 5. Repeat steps 3 and 4 until the loop iteration reaches 0
 * 6. Return the result variable
 * 
 */
function sequence(num) {
  let result = [];
  for (let i = 1; i <= num; i += 1){
    result.push(i);
  }
  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]