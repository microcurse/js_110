/**
 * PEDAC
 * 
 * Understand the Problem
 * Write a function that takes a floating point number representing an angle between 0 and 360 degrees
 * and returns a string representing that angle in degrees, minutes, and seconds. You should use a 
 * degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and double quote
 * (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
 * 
 * Explicit Requirements:
 * - Input: floating point number
 * - Output: a string
 * - Output should represent the angle in degrees, monutes, and seconds
 * - (°) Use degree symbol for degrees, 
 * - (') single quote for minutes
 * - (") double quote for seconds
 * - There are 60 minutes in a degree
 * - 60 seconds in a minute
 * 
 * Implicit Requirements:
 * - Need leading zeros for single digit numbers to be output as required.
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * 30 -> 30°00'00"
 * 76.73 -> 76°43'48"
 * 
 * 60 minutes in a degree
 * 60 seconds in a minute
 * 
 * 60 * .73 = 43.8
 * 43 minutes
 * 
 * 60 * .8 = 48
 * 48 seconds
 * 
 * 254.6 -> 254°
 * 60 * .6 = 36 -> 254°36'00"
 * 
 * 93.034773 -> 93°
 * 60 * .034773 = 2.08638 -> 02'
 * 60 * .08638 = 5.1828 -> 05"
 * 93°02'05"
 * 
 * These test cases are made with the idea of rounding down 
 * 
 * Data Structure
 * Use the remainder operator's return value to calculate the minutes then another remainder operator 
 * on minutes to get the seconds.
 * 
 * Algorithm
 * - Calculate the degrees
 *  - Take the given number and use Math.floor to get a whole number.
 *   - This number is our degrees
 *  - Then use that value to get the decimal number of the minutes and store that in variable
 *  - Ex. 254.6 - 254 = .6
 * - Calculate the minutes
 *  - Multiply 60 by the decimal number representing a fraction of a degree (minutes)
 *  - If there is return value is not a whole number (has a decimal) continue to next step
 * - Calculate the seconds
 *  - Multiply 60 by the decimal number reresenting a fraction of a minute (seconds)
 * -  Use Math.floor to return the seconds without any further decimals.
 * - Output needs to be a string. So formatting the numbers correctly is important
 * - Create a template which outputs the string in the desired format.
 *  - Ex. 93°02'05" Degrees°Minutes'Seconds".
 * - Need to consider how to handle leading zeroes on single digit minutes or seconds.
 * 
 * Code
 */

const DEGREE_SYMBOL = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(floatNum) {
  let degrees = degreeCalc(floatNum);
  let minutes = Math.floor((floatNum - degrees) * MINUTES_PER_DEGREE);
  let seconds = Math.floor((floatNum - degrees - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);

  return String(degrees) + DEGREE_SYMBOL + padZeroes(minutes) + "'" + padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numStr = String(number);
  return numStr.length < 2 ? ('0' + numStr) : numStr;
}

function degreeCalc(number) {
  let numberCalc = Math.floor(number);
  const CEILING = 360;
  const FLOOR = 0;

  if (numberCalc > CEILING) {
    return numberCalc - CEILING;
  } else if (numberCalc < FLOOR) {
    return CEILING + numberCalc;
  }

  return numberCalc;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// Further Exploration
// If degree is greater than 360, subtract given number by 360, and reassign current number to the
// difference.
// Keep doing this until the given number is less than 360

// CEILING = 360
// FLOOR = 0

// givenNum = 380
// if givenNum > CEILING
// adjustment = givenNum - CEILING -> 20
// givenNum = adjustment -> 20

// givenNum = 400
// adjustment  = givenNum - CEILING -> 80
// givenNum = adjustment -> 80

// givenNum = -1
// if givenNum < FLOOR
// adjustment =  CEILING - givenNum -> 359
// givenNum = adjustment (pass negative sign) -> -359

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"