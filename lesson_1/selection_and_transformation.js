// Example 1
// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(obj) {
//   let fruits = {};

//   for (const property in obj) {
//     if (obj[property] === 'Fruit') {
//       fruits[property] = obj[property];
//     }
//   }
//   return fruits;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// Example 2
// function doubleNumbers(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] *= 2;
//   }

//   return numbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12]

// Example 3
// function doubleOddElements(numbers) {
//   let doubledNums = [];

//   for (let counter = 0; counter < numbers.length; counter++) {
//     if (counter % 2 === 1) {
//       doubledNums.push(numbers[counter] * 2);
//     } else {
//       doubledNums.push(numbers[counter]);
//     }
//   }

//   return doubledNums;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddElements(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// // not mutated
// console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]

// Example 4
// Code a function that lets you multiply ever array item by a specified value. As with doubledNumbers,
// don't mutate the array, but return a new array instead.
function multiply(numbers, multiplier) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter++) {
    doubledNums.push(numbers[counter] * multiplier);
  }

  return doubledNums;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);