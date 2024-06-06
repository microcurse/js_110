/**
 * PEDAC
 * 
 * Understanding the problem:
 * Take a number `735291` and rotate by one digit to the left, getting `352917`. Keep the first two digits fixed in place and rotate again to get `321759`. Next, keep the first digit fixed in place and rotate the remaining digits to get `329175`. Keep the first three digits fixed in place and rotate again to get `321597`. Finally, keep the first four digits fixed in place and rotate the final two digits to get `321579`. The resulting number is called the maxiumum rotation of the original number.
 * 
 * 
 * Write a function that takes an integer as an argument and returns the maximum rotation of
 * that integer. You can (and probably should) use the `rotateRightmostDigits` function from
 * the previous exercise.
 * 
 * Explicit Requirements:
 * - Input: a number
 * - Output: a number representing the maximum rotation of the original number
 * - Take number and rotate by one digit to the left
 * - Keep the first digit fixed in place and rotate the remaining digits
 * - Keep the first two digits fixed in place and rotate the remaining digits
 * - Keep the first three digits fixed in place and rotate the remaining digits
 * - Keep the first four digits fixed in place and rotate the remaining digits
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases:
 * maxRotation(735291);          // 321579
 * maxRotation(3);               // 3
 * maxRotation(35);              // 53
 * maxRotation(105);             // 15 -- the leading zero gets dropped
 * maxRotation(8703529146);      // 7321609845
 * 
 * Rotation the first number
 * 735291 -> 7 35291 -> 35291 7 -> 352917
 * 
 * Keep the first digit fixed in place and rotate the remaining digits
 * 352917 -> 3 52917 -> 3 52917 -> 3 5 2917 -> 3 2917 5 -> 329175
 * 
 * In the above test case, we can actually ignore the first digit (3) once we separate it from the rest of the numbers. That way, we can rotate the next first number of the remaining digits using a similar method to the first rotation.
 * 
 * Keep the first two digits fixed in place and rotate again to get `321759`
 * 329175 -> 32 9175 -> 32 9 175 -> 32 175 9 -> 321759
 * 
 * Keep the first three digits fixed in place and rotate again to get `321597`
 * 321759 -> 321 759 -> 321 7 59 -> 321 59 7 -> 321597
 * 
 * Finally, keep the first four digits fixed in place and rotate the final two digits to get `321579`.
 * 321597 -> 3215 97 -> 3215 79 -> 321579
 * 
 * Data Structure:
 * On the first rotation, the first number gets rotated to the end of the number. On the second iteration, the first number is "frozen" and the remaining numbers are rotated. This process continues until the last number is rotated.
 * 
 * 
 * Algorithm
 * - Create a function called `maxRotation` that takes a number as an argument
 * - Create a variable called `count` and assign it the length of the number converted to a string
 * - Create a for loop that starts at the length of the number and ends at 1
 * - On each iteration, reassign the number to the result of calling the `rotateRightmostDigits` function
 * - Return the number
 */

function maxRotation(number) {
  let count = String(number).length;

  for (let i = count; i > 1; i--) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

function rotateRightmostDigits(number, count) {
  let strNumber = String(number);
  let firstPart = strNumber.slice(0, strNumber.length - count);
  let secondPart = strNumber.slice(strNumber.length - count);

  let rotated = secondPart.slice(1) + secondPart[0];

  return Number(firstPart + rotated);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845