/**
 * PEDAC
 * Understanding the Problem
 * Sum all the numbers of a given array (cq. list), except the highest and the lowest element (by value, not by index).
 * 
 * The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
 * 
 * Mind the input validation
 * 
 * Explicit requirements:
 * - Input: an array of numbers
 * - Output: Sum of all numbers except the highest and lowest elements
 * - Sum by value, not by index
 * 
 * Implicit requirements:
 * - Since we're summing by value and not by index, if an array contains [1, 1, 3, 9, 20, 21, 21]. Then we sum the numbers 1, 3, 9, 20, 21.
 * - Excluding the highest and lowest numbers by value not by index means we shouldn't use sort to get those values.
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases:
 * [6, 2, 1, 8, 10] => [6, 2, 8] => 6 + 2 + 8 = 16
 * The lowest is 1
 * The highest is 10
 * 
 * Data Structures:
 * - Arrays
 * - Numbers
 * 
 * Algorithm
 * - Get the largest and smallest numbers
 * - Remove them from the array
 * - Sum the rest of the numbers
 * - Return the result
 * 
 * Solved in: 52 mins
 * 
 * Crazy solution inspiration from the solutions thread:
 * 
 * Use Math.min and Math.max to find the largest and smallest number in the array by passing in the array using spread syntax.
 * 
 * THEN, instead of trying to remove one each of smallestNumber and largestNumber from the array, just subtract it from the total sum! We now avoid worrying about how to remove just one of each of those numbers if there are duplictes! 🤯
 * 
 */

function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) return 0;
  
  // Get the largest number and smallest numbers
  let smallestNumber = Math.min(...array)
  let largestNumber = Math.max(...array);
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum - smallestNumber - largestNumber;
}

console.log(sumArray(null)                     ); // 0 
console.log(sumArray([ ])                      ); // 0 
console.log(sumArray([ 3 ])                    ); // 0 
console.log(sumArray([ 3, 5 ])                 ); // 0 
console.log(sumArray([ 6, 2, 1, 8, 10 ])       ); // 16
console.log(sumArray([ 0, 1, 6, 10, 10 ])      ); // 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])); // -28
console.log(sumArray([ -6, 20, -1, 10, -12 ])  ); // 3 