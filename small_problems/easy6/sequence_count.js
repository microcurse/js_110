/**
 * PEDAC
 * 
 * Understanding the Problem
 * Create a function that takes two integers as arguments. The first argument is a `count`, and the second is the
 * starting number of a seuqence that your function will create. The function should return an array containing 
 * the same number of elements as the `count` argument. The value of each element should be a multiple of the
 * starting number.
 * 
 * You may assume that the `count` argument will always be an integer greater than or equal to `0`. The starting
 * number can be any integer. If the `count is `0`, the function should return an empty array.
 * 
 * Explicit requirements
 * - Input: two integers
 *  - First integer is a `count`
 *  - Secound integer is the starting number of a sequence
 * - Output: an array
 *  - Contains the same number of elements as the `count` integer
 * - The value of each element should be a multiple of the starting number
 * - `count` integer will always be an integer greater than or equal to `0`
 * - Starting number can be any integer
 * - If the `count` is `0`, the function should return an empty array
 * 
 * Implicit requirements
 * -
 * 
 * Questions
 * -
 * 
 * Examples and Test Cases
 * sequence(5, 1);          // [1, 2, 3, 4, 5]
 * sequence(4, -7);         // [-7, -14, -21, -28]
 * sequence(3, 0);          // [0, 0, 0]
 * sequence(0, 1000000);    // []
 * 
 * Data Structure
 * - Arrays
 * 5, 1 => Create a loop that loops 5 times. Increment a `count` based on the second integer
 * 
 * Algorithm
 * 1. Declare a variable named `result` and initialize it to an empty array for later output
 * 2. Declare a variable named `squence` for the starting number and initialize it with the second argument
 * 3. Define a loop that iterates the same number of times as the first argument `count`
 * 4. Push the sequence number to the result array
 * 5. Increment the sequence by itself for each iteration of the loop
 * 6. Do this until the loop iterates the same number of times as the `count`
 * 7. Return result 
 * 
 */

function sequence(count, startingNum) {
  let result = [];
  let sequence = startingNum;
  for (let i = 1; i <= count; i += 1) {
    result.push(sequence);
    sequence += startingNum;
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []