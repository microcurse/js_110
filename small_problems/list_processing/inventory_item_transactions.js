/**
 * PEDAC
 * 
 * Understanding the Problem
 * Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an
 * array containing only the transactions for the specified inventory item.
 * 
 * Explicit requirements:
 * - Input: a number and an array of objects
 * - Output: An array of objects containing only transactions for the specified inventory item
 * - The output array should only contain objects with id's that match the first argument passed to the function
 * 
 * Implicit requirements:
 * - 
 * 
 */

function transactionsFor(itemId, transactions) {
  return transactions.filter(item => item.id === itemId);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
console.log(transactionsFor(103, transactions));
console.log(transactionsFor(102, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]