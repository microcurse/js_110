/**
 * PEDAC
 * Understanding the Problem
 * 
 * Write a function that takes a string and returns an object containing the following three properties:
 * - the percentage of characters in the string that are lowercase letters
 * - the percentage of characters that are uppercase letters
 * - the percentage of characters that are neither
 * 
 * You may assume that the string will always contain at least one character.
 * 
 * Explicit requirements:
 * - Input: a string
 * - Output: an object
 * - The output object will contain three properties
 * - lowercase letters as a percentage of the whole string
 * - uppercase letters as a percentage of the whole string
 * - neither as a percentage of the whole string
 * 
 * Implicit requirements:
 * - The percentages are represented as a string
 * - Percentages are rounded to the nearest hundredth place
 * - Numbers, spaces, and special characters count towards 'neither'
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases
 * - letterPercentages('abCdef 123'); 
 * 10 total characters
 * 5 lowercase
 * 1 uppercase
 * 4 neither
 * // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
 *  
 * letterPercentages('AbCd +Ef');
 * // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
 * 
 * letterPercentages('123');
 * // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
 * 
 * Data Structures
 * - Percentages of a whole using the length of the input string
 * - Arrays
 * - Numbers
 * - Strings
 * 
 * Algorithm
 * - Declare and initialize an object variable to store results
 *  - This object has 3 property names along with an empty string
 * - Iterate over each element in the given string
 * - Keep count of each lowercase and uppercase letter
 * - If neither, keep count of that as well
 * - Calculate the percentage of each by dividing it by the length property
 * - Multiply this result by 100 to get the percentage
 * - Convert the number to a string
 * - Output the object
 * 
 */

function letterPercentages(letters) {
  const letterCases = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  for (let i = 0; i < letters.length; i += 1) {
    if (/[a-z]/.test(letters[i])) {
      letterCases.lowercase += 1;
    } else if (/[A-Z]/.test(letters[i])) {
      letterCases.uppercase += 1;
    } else {
      letterCases.neither += 1;
    }
  }

  return letterCases;
}

/**
 * Sub Function
 * Calculate percentages of a whole
 * 
 * Input: number
 * Output: a string representing a percentage
 * - The output should contain a decimal point and rounded to the nearest tenth with 2 decimal spots (hundredths)
 * 
 * Examples and Test Cases
 * 50 -> '50.00'
 * 10 -> '10.00'
 * 37.5 -> '37.50'
 * 
 * Data Structures
 * - Numbers
 * - Strings
 * 
 * Algorithm
 * - 
 * 
 */

function convertToPercentages(percentNum) {
  
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }