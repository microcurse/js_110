/**
 * PEDAC
 * 
 * Understand the Problem
 * How would you order the following array of objects based on the year of publication of 
 * each book, from the earliest to the latest?
 *
 * Explicit Requirements:
 * - Input: array containing objects
 * - Output: array of objects sorted by published year
 * - Sorting must be from earliest to latest
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and test cases
 * published: '1967'
 * published: '1925'
 * published: '1869'
 * 
 * published: '1869'
 * published: '1925'
 * published: '1967'
 * 
 * 
 * Data Structure
 * We're starting off with an array full of objects. We need to access the publication year within
 * each object so that it can be sorted.
 * 
 * 
 * Algorithm
 * - Access the published year
 * - Convert the string representation of year into a number
 * - Sort by earliest to latest
 * 
 */

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => {
  return Number(a['published']) - Number(b['published']);
}));
