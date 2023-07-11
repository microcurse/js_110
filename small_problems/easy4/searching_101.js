// Write a program that solicits six numbers from the user and logs a message that describes whether 
// the sixth number appears among the first five numbers.

/**
 * PEDAC
 * P. Understand the problem
 * 
 * Explicit Requirements:
 * - Input: a number
 * - Output: a string
 * - The user will provide a series of 6 numbers
 * - A message (string) will be output once the 6th number is input
 * - The inputs must be numbers
 * - The output message needs to have the proper
 * 
 * Implicit Requirements:
 * 
 * Questions:
 * What happens if the user input is not a number?
 *  - Throw an error when the input is not a number and ask the user to input a number?
 * Does the output message require the proper contractions? 1st, 2nd, 3rd, ...
 *
 * E. Examples and test cases
 * Enter the 1st number: 25
 * Enter the 2nd number: 15
 * Enter the 3rd number: 20
 * Enter the 4th number: 17
 * Enter the 5th number: 23
 * Enter the last number: 17
 * 
 * The number 17 appears in 25,15,20,17,23.
 * 
 * -----
 * 
 * Enter the 1st number: 25
 * Enter the 2nd number: 15
 * Enter the 3rd number: 20
 * Enter the 4th number: 17
 * Enter the 5th number: 23
 * Enter the last number: 18
 * 
 * The number 18 does not appear in 25,15,20,17,23.
 * 
 * D. Data structure
 * It looks like we can store the given numbers in an array. That way, it should be easy to look for
 * the 6th number within that collection.
 * 
 * input numbers = [25, 15, 20, 17, 23]
 * number to check = 17
 * 
 * A. Algorithm
 * 1. Ask the user for input
 * 2. Store the input
 * 3. Repeat steps 1 & 2 six times
 * 3. Store the 6th input separately
 * 4. Check the collection of 5 numbers and see if the 6th number exists in the collection
 * 5. Output a string that lets the user know if it appears in the collection or not
 * 
 * Aglorithm for including contractions
 * 1. Create a comarpison table for st, nd, rd
 * 2. Check the last digit in the given number
 * 3. Any number that doesn't end in 1, 2, or 3 automatically gets 'th'
 * 
 * C. Code a solution
 * 
 * Further Exploration:
 * What if the problem was looking for a number that satisfies some condition (e.g., a number greater than 25),
 * instead of a specific number? Would the current solution still work? Why or why not?
 * 
 * Answer:
 * It would not work with the current solution. This is because the if statement which checks if a number
 * is included cannot check if there is a number greater than a given number.
 * 
 * 
 */

const readlineSync = require("readline-sync");
const MAX_INPUTS = 5;
let counter = 1;
let numbersArr = [];
let compareNum = 0;

while(counter <= MAX_INPUTS) {
  let counterWithContraction = '';
  switch (counter) {
    case 1:
      counterWithContraction = "1st";
      break;
    case 2:
      counterWithContraction = "2nd";
      break;
    case 3:
      counterWithContraction = "3rd";
      break;
    case 4:
      counterWithContraction = "4th";
      break;
    case 5:
      counterWithContraction = "5th";
      break;
  }
  let userInput = readlineSync.question(`Please enter the ${counterWithContraction} number: `);
  numbersArr.push(userInput);
  counter += 1;
}

let userInput = readlineSync.question(`Please enter the last number: `);
compareNum = userInput;

const greaterThanTwentyFive = (num) => num > compareNum;

if (numbersArr.some(greaterThanTwentyFive)) {
  console.log(`There is a number in ${numbersArr} that is greater than ${compareNum}`);
} else {
  console.log(`There are no numbers in ${numbersArr} that are greater than ${compareNum}`);
}