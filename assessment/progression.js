/**
 * You're given an array of integers. You must return the number of 'arithmetic progressions' of size 
 * that are possible from that list.
 * 
 * In each progression, the differences between the elements must be the same.
 * 
 * Explicit Requirements:
 * - Input: array
 * - Output: sub arrays
 * - All array elements will be unique and the array will be sorted.
 * - Output arrays will have 3 elements
 * - 
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Examples and test cases:
 * [1, 2, 3, 5, 7, 9] ==> 5
 * The above has 5 progressions, seen below:
 * [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]
 *
 * [1, 2, 3, 5, 7, 9] => 5 total progressions
 * [1, 2, 3] = 1 between each element
 * [1, 3, 5] = 2 between each element
 * [1, 5, 9] = 4 between each element
 * [3, 5, 7] = 2 between each element
 * [5, 7, 9] = 2 between each element
 * 
 * What constitues a 'progression'? Equal number difference between each element in sequence.
 * 
 * Keep the progression start number until there are no progressions found. Make the next number
 * the progression number and continue with numbers after it.
 * 
 * [1, 2, 3, 5, 7, 9]
 * progression compare num: 1
 * How far is 1 from 2? 1
 * How far is 2 from 3? 1
 * 
 * 1, 2, 3 is a progression array - stop iterating over the array
 * 
 * [1, 2, 3, 5, 7, 9]
 * progression compare num: 1
 * how far is 1 from 3? 2
 * skip checking 2
 * how far is 3 from 5? 2
 * 
 * 1, 3, 5 is a progression array - stop iterating over the array
 * 
 * [1, 2, 3, 5, 7, 9]
 * progression compare num: 1
 * skip checking 2 and 3
 * how far is 1 from 5? 4
 * how far is 5 from 7? 2
 * how far is 5 from 9? 4
 * 
 * 1, 5, 9 is a progression array - stop iterating over the array
 * 
 * [1, 2, 3, 5, 7, 9]
 * progression compare num: 1
 * skip checking 2, 3, 5
 * how far is 1 from 7? 6
 * how far is 7 from 9? 2
 * 
 * end iteration for first number: 1
 * 
 * [1, 2, 3, 5, 7, 9]
 * progression compare num: 2
 * how far is 2 from 3? 1
 * how far is 2 from 5? 2
 * 
 * It's important that the difference between the first two elements are the same as the last two
 * elements
 * 
 * Data Structure:
 * Arrays
 * 
 * Algorithm
 * - Create variable to store the count of progressions
 * - Iterate through each elemnt in the array
 * - On each iteration, compare the difference between the first and second element
 * - Compare the difference between the second and third element.
 *  - if these elements have the same difference, increment the count by 1
 * - Output the result
 * 
 */

function progressions(nums) {
  return nums
    .slice(0, nums.length - 2) // stop when there are no next 2 numbers
    .reduce((count, num, idx) => {
      nums.slice(idx + 1).forEach(nextNum => { // start iteration from the next index
        let thirdNum = nextNum + (nextNum - num); // create third number for the progression
        if (nums.includes(thirdNum)) count += 1;
      });

      return count;
  }, 0);
}

// Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10


/*
Algorithm:
-declare `count` variable to store the number of progressions found
  -for each number in input array called `currentNum`
    -iterate over the subsequent numbers in the array
      -create an array of `currentNum` and the current number
      -if there is a number in the rest of the array so that 
       current number - `currentNum` === that number - current number
        -increment `count` by 1
      -stop when there are no next two numbers
  -return `count`      
*/

// function progressions(nums) {
//   return nums
//     .slice(0, nums.length - 2) // stop when there are no next 2 numbers
//     .reduce((count, num, idx) => {
//       nums.slice(idx + 1).forEach(nextNum => { // start iteration from the next index
//         let thirdNum = nextNum + (nextNum - num); // create third number for the progression
//         if (nums.includes(thirdNum)) count += 1;
//       });

//       return count;
//   }, 0);
// }