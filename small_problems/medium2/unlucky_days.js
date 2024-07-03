/**
 * PEDAC
 * Understanding the Problem
 * Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.
 * 
 * Explicit requirements:
 * - Input: a four digit integer representing the year
 * - Output: an integer representing the number of Friday The 13ths in the year
 * - Friday the 13th, obviously, only happens on a Friday that lands on the 13th
 * - The year is always greater than 1752
 * - The calendar uses the modern Gregorian Calendar
 * 
 * Implicit requirements:
 * - There can only be 1 Friday the 13th per month
 * - 12 months in a year
 * - Friday is always the 
 * - Use the Date constructor to set a baseline for getting all dates specified from the input integer
 * - The Date constructor outputs a string which represents the current Day, Month, Date, Year, Time, Time zone
 * - Use milliseconds
 * 
 * 
 * Questions:
 * - How do I determine which dates are on specific days from a given year?
 * 
 * Examples and Test Cases
 * fridayThe13ths(1986);      // 1
 * 1986 -> Jan -> check for all Fridays in the month
 * fridayThe13ths(2015);      // 3
 * fridayThe13ths(2017);      // 2
 * 
 * const day1 = birthday.getDay();
 * Sunday - Saturday : 0 - 6
 * 
 * Data Structure:
 * - Integers
 * - Date function
 * 
 * Algorithm
 * - Declare a variable to store the result
 * - Define a loop that iterates 12 times, one for each month
 * - Iterate through the month
 * - Check all Fridays in the month for the date 13
 * - Increment the result by 1 for each met condition
 * - Keep going until there are no months left
 * - Return the result
 * 
 */

function fridayThe13ths(year) {
  let count = 0;
  const FRIDAY = 5;
  const UNLUCKY_DAY = 13;

  for (let month = 0; month < 12; month += 1) {
    const givenYear = new Date(`${month} ${UNLUCKY_DAY} ${year}`);
    if (givenYear.getDay() === FRIDAY) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2