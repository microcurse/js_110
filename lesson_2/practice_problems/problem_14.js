/**
 * PEDAC
 * 
 * Understand the Problem
 * Given the following data structure write some code to return an array containing the 
 * colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, 
 * and the colors should be capitalized.
 * 
 * Explicit Requirements:
 * - Input: object
 * - Output: an array
 * - Array should contain colors of the fruits and sizes of the vegetables.
 * - Sizes are uppercased and colors should be capitalized
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * 
 * Examples and test cases
 * 
 * grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
 * carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
 * [['red', 'green], 'medium']
 * 
 * Data Structure
 * 
 * - Note that we have objects and primitive values in the output array.
 * - When populating the result variable, these values will be pushed into the array
 * in order of iteration.
 * - Need a criteria for checking the type property's value for either 'fruit' or 'vegetable'
 * during each iteration to determine which other values should populate the result variable (output)
 * 
 * 
 * - How do we capitalize?
 *  - using slice(0, 1).toUpperCase() + slice(1);
 * 
 * Algorithm
 * - Iterate through object
 * - Each property (fruit or veggie) is then iterated over. The property's values is another object
 * that we will need to iterate over or use the appropriate property accessor to evaluate the type
 * property's value.
 * 
 * Code
 */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// let result = [];

// for (let prop in obj) {
//   if (obj[prop]['type'] === 'fruit') {

//     let colorsArr = obj[prop]['colors'];

//     colorsArr.forEach(element => {
//       // We're iterating through each element in the colors value (array)
//       colorsArr.push(element.slice(0, 1).toUpperCase() + element.slice(1));
//     });
//     result.push(colorsArr);
//   } else if (obj[prop]['type'] === 'vegetable') {
//     result.push(obj[prop]['size'].toUpperCase());
//   }
// }

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let result = Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(element => capitalize(element));
  } else {
    return attributes['size'].toUpperCase();
  }
});

console.log(result);