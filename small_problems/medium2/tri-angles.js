/**
 * Understanding the Problem
 * Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.
 * 
 * Explicit Requirements:
 * - Input: 3 numbers representing the angles of a triangle
 * - Output: a string representing the type of angle
 * - The input must be a valid triangle
 *  - To be a valid triangle, the sum of the angles must be exactly 180 degrees, and ever angle must be greater than 0. If either of these conditions are not satisified, the triangle is invalid
 * - A triangle is classified as follows:
 *  - Right: One angle is a right angle (exactly 90 degrees).
 *  - Acute: All three angles are less than 90 degrees.
 *  - Obtuse: One angle is greater than 90 degrees.
 * - All angles have integer values, so I won't have to worry about floating point errors.
 * - The arguments are always in degrees
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases:
 * triangle(60, 70, 50);       // "acute"
 * 60 + 70 + 50 = 180
 * Are all angles < 90? => yes => "acute"
 * 
 * triangle(30, 90, 60);       // "right"
 * 30 + 90 + 60 = 180
 * Are all angles < 90? => no 
 * 
 * Data Structures:
 * - Integers
 * 
 * Algorithm
 * - Check if the input is a valid triangle
 * - If it isn't, immediately output 'invalid'
 * - Check if the given triangle is one of three
 *  - Right = One angle === 90
 *  - Acute = All three angles < 90
 *  - Obtuse = One angle > 90
 * - Output the string representing the type of triangle
 * 
 */

function triangle(angle1, angle2, angle3) {
  let anglesArr = [angle1, angle2, angle3];

  if (!isValidTriangle(anglesArr)) return 'invalid';

  if (anglesArr.some(rightAngle)) {
    return 'right';
  } else if (anglesArr.every(acuteAngle)) {
    return 'acute';
  } else if (anglesArr.some(obtuseAngle)) {
    return 'obtuse';
  }

}

const rightAngle = (angle) => angle === 90;
const acuteAngle = (angle) => angle < 90;
const obtuseAngle = (angle) => angle > 90;

function isValidTriangle(anglesArr) {
  if (anglesArr.includes(0)) return false;
  if (anglesArr.reduce((sum, acc) => sum + acc) === 180) return true;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"