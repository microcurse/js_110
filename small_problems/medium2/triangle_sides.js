/**
 * PEDAC
 * Understanding the Problem
 * Write a function that takes the lengths of the three sides of a triangle as an argument and returns one of the following four strings representing the triangle's classification: 'equilater', 'isosceles', 'scalene', or 'invalid'.
 * 
 * Explicit requirements:
 * - Input: three numbers
 * - Output: a string
 * - The output should be a string which represents one of three classification of a triangle:
 *  - Equiliateral: All three sides are of equal length.
 *  - Isosceles: Two sides are of equal length, while the third is different.
 *  - Scalene: All three sides are of different lengths.
 * - The three input numbers represent the length of each side
 * 
 * Valid Triangle:
 * - The sum of the lengths of the two shortest sides must be greater than the length of the longest side (shortest + middle > longest)
 * - every side must have a length greater than 0. (shortest > 0)
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases:
 * triangle(3, 3, 3);        // "equilateral"
 * triangle(3, 3, 1.5);      // "isosceles"
 * triangle(3, 4, 5);        // "scalene"
 * triangle(0, 3, 3);        // "invalid"
 * triangle(3, 1, 1);        // "invalid"
 * 
 * Data Structures:
 * - Numbers
 * - Strings
 * 
 * Algorithm
 * - Check if input numbers are a valid triangle
 * - If not a valid triangle, return 'invalid'
 * - Define three variables to store the lengths of each side:
 *   - shortest
 *   - middle
 *   - longest
 * - Assign the three numbers to their respective variables
 *   - To do this, we can assign the numbers into an array then sort them. The shortest would be the arr[0], middle would be arr[1], and longest would be arr[2].
 * - Create a table with the three triangle classifications
 *  - equilateral = arr[0] === arr[1] === arr[2]
 *  - isosceles = arr[0] === arr[1], or arr[2] === arr[1], or arr[0] === arr[2]
 *  - scalene = neither of the above
 * - Return the string which represents the triangle classification
 * 
 */

function triangle(side1, side2, side3) {
  let sidesArr = [side1, side2, side3].sort();
  let shortest = sidesArr[0];
  let middle = sidesArr[1];
  let longest = sidesArr[2];
  const NO_LENGTH = (element) => element === 0;

  if (shortest + middle < longest || sidesArr.some(NO_LENGTH)) return 'invalid'

  if (shortest === middle && middle === longest) {
    return 'equilateral';
  } else if (shortest === middle || middle === longest || shortest === middle) {
    return 'iscosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"