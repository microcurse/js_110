/**
 * PEDAC
 * 
 * Understand the Problem
 * As seen in the previous exercise, the time of day can be represented as the number of minutes before or 
 * after midnight. If the number of minutes is positive, the tiem is after midnight. If the number of minutes 
 * is negative, the time is before midnight.
 * 
 * Write two functions that each take a time of day in 24 hour format, and return the number of minutes before
 * and after midnight, respectively. Both functions should return a value in the range of 0..1439.
 * 
 * Explicit Requirements:
 * - Input: A string representing time in a 24 hour format
 * - Output: a number
 * - The number should represent the number of minutes in the 24 hour format.
 * - If the number is positive, the time is after midnight (00:00). If the number of minutes is negative,
 * the time is before midnight (23:59);
 * - If it's negative, we're counting backwards from 00:00, 23:59 (1 minute), 23:58 (2 minutes), 
 * 23:00 (60 minutes) etc..
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * "00:00") === 0
 * 
 * afterMidnight -> "12:34" === 754
 * This counts up from 00:00/24:00
 * 
 * beforeMidnight -> "12:34" === 686
 * This counts down from 00:00/24:00, 23:59, 23:58, etc..
 * 
 * 
 * Data Structure
 * 
 * Algorithm
 * 
 * afterMidnight function algorithm
 * 1. Separate and convert the hours and minutes into numbers
 * 2. Then multiply the number of hours by MINUTES_PER_HOUR to get the total number of minutes
 * 3. Add the multiplication of hours to minutes by the given minutes
 * 4. Return the total minutes
 * 
 * beforeMidnight function algorithm
 * 1. Separate and convert the hours and minutes into numbers
 * 2. Multiply the number of hours by MINUTES_PER_HOUR to get the total number of minutes
 * 3. Add the multiplication of hours to minutes by the given minutes
 * 4. Subtract the MINUTES_PER_DAY from the total minutes
 * 5. Return the result
 * 
 * Code
 */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; // 1440

function afterMidnight(strTime) {
  if (strTime === '00:00' || strTime === '24:00') return 0;
  let hours = Number(strTime.slice(0, 2));
  let minutes = Number(strTime.slice(3, 5));

  let totalMinutes = (MINUTES_PER_HOUR * hours) + minutes;
  return totalMinutes;
}

function beforeMidnight(strTime) {
  if (strTime === '00:00' || strTime === '24:00') return 0;
  let hours = Number(strTime.slice(0, 2));
  let minutes = Number(strTime.slice(3, 5));

  let totalMinutes = MINUTES_PER_DAY - ((MINUTES_PER_HOUR * hours) + minutes);
  return totalMinutes;
}

// console.log(afterMidnight("12:34"));
// console.log(beforeMidnight("12:34"));

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
console.log(afterMidnight("08:20"));
console.log(beforeMidnight("23:10"));