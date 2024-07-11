/**
 * PEDAC
 * Understanding the Problem
 * Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" -- that is, the function should mutate the array. You may assume that the array contains at least two elements.
 * 
 * Explicit requirements:
 * - Input: an array
 * - Output: the same array, sorted from smallest to largest
 * - The array always contains at least two elements
 * - Use the bubble sort algorithm
 * - The sorting should be done "in-place", meaning the array is mutated
 * 
 * Implicit requirements:
 * - Don't use the built-in sort method?
 * - The given array will contain elements of the same type. Integers and strings
 * 
 * Questions
 * - N/A
 * 
 * Examples and Test Cases
 * [6, 2, 7, 1, 4] -> [1, 2, 4, 6, 7]
 * ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'] -> 
 * ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
 * 
 * Data Structures
 * - Arrays
 * 
 * Algorithm
 * - Iterate over the array
 * - Compare the values of a pair of consecutive elements
 * - If the first value is greater than the second, the two elements are swapped in place
 * - Repeat this until there's a full pass of all elements without performing a swap
 * - Declare an array containing yes and no to keep track of the swaps in the current iteration
 * - If there's a swap, push a 'yes' into the tracking array
 * - If there isn't a swap, push a 'no' into the tracking array
 * - At the end of the iteration, check if the tracking array contains any 'yes'
 * - If it does, restart the loop
 * - If it doesn't, exit the loop
 * - Return the mutated array
 * 
 * Solved in: 28~ mins
 */

// function bubbleSort(array) {
//   let trackingArray = [];

//   for (let idx = 0; idx <= array.length; idx += 1) {

//     if (array[idx - 1] > array[idx]) {
//       [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
//       trackingArray.push('yes');
//     } else {
//       trackingArray.push('no');
//     }

//     // Check if there was a complete pass without any swaps
//     if (trackingArray.includes('yes')) {
//       idx = 0;
//       trackingArray = [];
//     };
//   }

//   return array;
// }

/**
 * Solving with recursion
 * 
 * Solved in: 52min
 * 
 */

function bubbleSort(arr, i = 0) {
  // Set a base case
  // What is the base case?
  // The base case is getting to the end of the iteration without swapping elements
  if (i === arr.length) return arr;

  for( let j = i + 1; j < arr.length; j += 1 ) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return bubbleSort(arr, i + 1);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]