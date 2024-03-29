/**
 * PEDAC
 * 
 * Understanding the Problem
 * Building on the previous exercise, write a function that returns `true` or `false` based on whether or not an
 * inventory `item` is available. As before, the function takes two arguments: an inventory `item` and a list of
 * `transactions`. The function should return `true` only if the sum of the `quantity` values of the `item`'s 
 * transactions is greater than zero. Notice that there is a `movement` property in each transaction object. A
 * `movement` value of `'out'` will decrease the `item`'s `quantity`.
 * 
 * Explicit requirements
 * - Input: an array of objects
 * - Output: a boolean `true` or `false
 * - Output true if the sum of the quantity values of the item's that match the transaction id are greater than
 *  zero. Output false otherwise.
 * - If the movement property's value is 'in', sum the total quantity values. If the value is 'out', subtract 
 *  from the total quantity.
 * 
 * Implicit requirements
 * - 
 * 
 * Questions
 * - 
 * 
 * Examples and Test Cases
 * [{ id: 101, movement: 'in',  quantity:  5 },
 * { id: 105, movement: 'in',  quantity: 10 },
 * { id: 101, movement: 'out', quantity: 17 },]
 * 
 * id: 101
 * [{ id: 101, movement: 'in',  quantity:  5 },
 * { id: 101, movement: 'out', quantity: 17 },]
 * in -> 5
 * total = 5
 * out -> 17
 * total = -12
 * output -> false
 * 
 * Algorithm
 * - Iterate over array of objects
 * - Filter out all objects that match the item id passed as the first argument
 * - If the 'movement' property's value is 'in' increment a totalQty variable with the 'quantity' property's
 *  value
 * - How do we figure out if the 'movement' property's value is 'in'?
 *  - Iterate over the array and use dot notation.
 *  - We can output all the values of the the properties into an array, 
 *    - If the element at the 1 index of the values array is equal to 'in'
 *    - increment the totalQty variable by the value of the element at the 2 index of the array.
 * - Return true if totalQty is greater than 0, else return false
 * 
 */


function transactionsFor(itemId, transactions) {
  return transactions.filter(item => item.id === itemId);
}

// function isItemAvailable(itemId, transactions) {
//   let workingWith = transactionsFor(itemId, transactions);
//   let totalQty = 0;

//   workingWith.forEach((transaction) => {
//     let valuesArr = Object.values(transaction);
//     if (valuesArr[1] === 'in') {
//       totalQty += valuesArr[2];
//     } else if (valuesArr[1] === 'out') {
//       totalQty -= valuesArr[2];
//     }
//   });

//   return totalQty > 0;
// }

// Solution using reduce
function isItemAvailable(itemId, transactions) {
  let workingWith = transactionsFor(itemId, transactions);
  let totalQty = workingWith.reduce((sum, transaction) => {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else if (transaction.movement === 'out') {
      return sum - transaction.quantity;
    }
  }, 0);

  return totalQty > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
