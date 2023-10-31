/**
 * PEDAC
 * 
 * Understand the Problem
 * The time of day can be represented as the number of minutes before or after midnight. If the number of
 * minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before
 * midnight.
 * 
 * Write a function that takes a time using this minute-based format and returns the time of day in 24 hour
 * format (hh:mm). Your function should work with any integer input.
 * 
 * You may not use javascript's Date class methods.
 * 
 * Explicit Requirements:
 * - Input: a number representing minutes
 * - Output: a string representing 24hr time
 * - Positive input number represents time after midnight
 * - Negative input number represents time before midnight
 * - Output should read "HH:MM"
 * - Can't use JavaScript's Date class methods.
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * 0 -> "00:00" (midnight exactly)
 * -3 -> "23:57"
 * 35 -> "00:35"
 * 
 * 3000 -> "02:00"
 * 3000 / 60 (mins in hour)
 * 50hrs % 24hrs (hrs in day) = 2 -> "02:00"
 * 
 * 
 * Data Structure
 * MINUTES_PER_HOUR = 60
 * HOURS_PER_DAY = 24
 * - Need to first calculate total minutes. This number needs to be less than 60.
 * - If it's more than 60, the hours need to be incremented by 1
 * - Next, need to calculate total hours.
 * - If this number is larger than 24. Then the hours get reset to 0 and we count upward.
 * - If the given number is a negative, then the hours should be set to 24 and the given hours need to be
 * subtracted from the current hours.
 * 
 * Algorithm
 * - Use modulo to get the remainder of dividing the given number by MINUTES_PER_HOUR
 * - Then divide the given number by MINUTES_PER_HOUR and round down to the nearest 1s value to get the total
 *  hours.
 * - The output requires a 24 hour limit. Therefore 50 hours should equal to 2 o'clock.
 * - Create a new function that calculates the given number of hours from minutes into a 24 hour format.
 *  - INPUT: a number (minutes)
 *  - OUTPUT: a number (hours in 24 hour time)
 *  - Limit of 24 hours in a day. If the number is positive, count the hours up until 23.
 *  - If the number of hours is 23 or higher, then set hours to 0.
 *  
 *  This now needs to calculate negative numbers, which count backwards from 23:59.
 *  ex. -3 = '23:57'
 * 
 * Code
 */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

// Convert minutes given to time
function timeOfDay(totalMinutes) {
  let minutes;
  let hours;
  
  if (Math.sign(totalMinutes) === -1) {
    minutes = calculateNegativeMinutes(totalMinutes);
    hours = calculateNegativeHours(totalMinutes);
    if (hours === HOURS_PER_DAY) hours = 23;
  } else {
    minutes = totalMinutes % MINUTES_PER_HOUR;
    hours = calculateHours(totalMinutes);
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function calculateNegativeMinutes(totalMinutes) {
  if (totalMinutes % MINUTES_PER_HOUR === 0) {
    return 0;
  } else if (totalMinutes % MINUTES_PER_HOUR < 0) {
    return MINUTES_PER_HOUR + (totalMinutes % MINUTES_PER_HOUR);
  } else {
    return Math.abs(totalMinutes) % MINUTES_PER_HOUR;
  }
}

function calculateNegativeHours(totalMinutes) {
  let hours = Math.floor(totalMinutes / MINUTES_PER_HOUR);
  if (hours % HOURS_PER_DAY === 0) {
    return 0;
  } else if (hours % HOURS_PER_DAY < 0) {
    return HOURS_PER_DAY + (hours % HOURS_PER_DAY);
  } else {
    return Math.abs(hours) % HOURS_PER_DAY;
  }
}

function calculateHours(totalMinutes) {
  let hours = Math.floor(totalMinutes / MINUTES_PER_HOUR);
  if (hours === HOURS_PER_DAY) return 0;
  if (hours < HOURS_PER_DAY) return hours;

  return Math.floor(hours / HOURS_PER_DAY)
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");