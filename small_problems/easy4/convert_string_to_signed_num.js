/**
 * PEDAC
 * P. Understand the problem
 * 
 * Write a function that takes a string of digits and returns the appropriate number as an integer. The string 
 * may have a leading + or - sign; if the first character is a +, your function should return a positive number; 
 * if it is a -, your function should return a negative number. If there is no sign, return a positive number.
 * 
 * 
 * Explicit Requirements:
 * - Input: a string
 * - Output: a number
 * - Similar to the Convert String To Number, we can use that stringToInteger function
 * - Base 10?
 * - If there is no sign, return a positive number
 * - If given a number with a negative sign, return a negative number
 * 
 * 
 * Implicit Requirements:
 * 
 * Questions:
 * 
 * 
 * E. Examples and test cases
 * "4321" === 4321 // logs true
 * "-570" === -570 // logs true
 * "+100" === 100 // logs true
 * 
 * D. Data structure
 * input will be a string and in order to output a number, we must convert it to an array so we can 
 * work with the characters. We also can use the same DIGITs object to correlate a string number to its
 * actual numeric value.
 * 
 * 
 * A. Algorithm
 * 1. Create an object to which will help correlate the string number to its numeric value.
 * 2. Check for a sign
 *  - Remove the sign and store it somewhere for later
 *  - If there is no sign, the returned integer should be positive
 *  - If there is a negative sign, the returned integer should be negative
 *    - Multiple the resulting integer by -1 to get a negative number
 * 3. Convert string to integer
 * 4. re-add the sign back into the integer.
 * 
 * 
 * C. Code a solution
 * 
 */
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }
  let result = 0;
  let arrayOfDigits = string.split('').map(char => DIGITS[char]);
  arrayOfDigits.forEach(element => (result = (10 * result) + element));

  return result;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    case '+':
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true