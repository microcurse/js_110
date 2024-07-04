/**
 * PEDAC
 * Understanding the Problem
 * Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.
 * 
 * Explicit requirements:
 * - Input: an integer
 * - Output: an integer that is the next featured number greater than the input
 * - A featured number is an odd number that is a multiple of 7, with all of its digits occurring exactly once each.
 * - Throw an error if there is no next featured number
 * - The largest featured number is 9876543201
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases
 * featured(12);           // 21
 * 13 -> odd but not a multiple of 7, keep going
 * 14 -> not odd, keep going
 * 15 -> odd but not multiple of 7, keep going
 * 16 -> not odd
 * 17 -> odd but not multiple of 7, keep going
 * 18 -> not odd
 * 19 -> odd but not multiple of 7
 * 20 -> not odd
 * 21 -> featured number, return this
 * 
 * featured(20);           // 21
 * featured(21);           // 35
 * featured(997);          // 1029
 * featured(9876543200);   // 9876543201
 * 
 * Data Structure
 * - Integer
 * 
 * Algorithm
 * 1. Define a loop which continues until it reaches the proper condition
 * 2. On each iteration, increment the given number by 1
 * 3. Use modulo to divide that number by 7
 * 4. If there is a remainder, keep going
 * 5. If there is no remainder, return the count
 * 6. Check all digits in the current count
 * 7. If any of them are strictly equal to eachother increment the count by 1
 * 8. Continue using modulo to find another multiple of 7
 * 9. Repeat step 5-8
 * 
 */

function featured(num) {
  const SEVEN = 7;
  const LARGEST_POSSIBLE_FEATURED_NUM = 9876543201;
  const ERROR_MSG = "There is no possible number that fulfills those requirements.";
  let count = num;

  do {
    count += 1;
    if (count > LARGEST_POSSIBLE_FEATURED_NUM) return ERROR_MSG;
  } while (count % SEVEN !== 0 || count % 2 !== 1 || !checkUniqueDigits(count));

  return count;
}

function checkUniqueDigits(num) {
  let numStr = num.toString();
  let seenDigits = [];

  for (const digit of numStr) {
    if (seenDigits.includes(digit)) {
      return false;
    }
  seenDigits.push(digit);
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."