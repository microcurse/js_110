/**
 * PEDAC
 * 
 * Understand the Problem
 * If the computer has a chance to win, it should make the winning move.
 * 
 * Explicit Requirements:
 * - Input: the board object
 * - Output: a number
 * - The output number is the board space that the computer should occupy to win the game
 * - The computer should prioritize winning moves over defensive moves
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and test cases
 * let board = {
 *   1: 'O',
 *   2: 'X',
 *   3: ' ',
 *   4: 'O',
 *   5: ' ',
 *   6: 'X',
 *   7: ' ',
 *   8: ' ',
 *   9: 'X',
 * }
 * 
 * const WINNING_LINES = [
 *   [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
 *   [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
 *   [1, 5, 9], [3, 5, 7], // diagonals
 * ];
 * 
 * Check WINNING_LINES to see if 'O' has markers on the indexes represented by a WINNING_LINE 
 * sub array
 * 
 * Board object properties with 'O' (COMPUTER_MARKER) values:
 * [1, 4]
 * [1, 4, 7] // WINNING_LINE that has 'O' values
 * 
 * Function should return the number '7' as it's square.
 * 
 * 
 * Data Structure
 * 
 * Algorithm
 * - Iterate through each WINNING_LINE sub array
 * - Each number in the sub array represents the board object's properties
 * - Iterate through each number to check if the board object's property has a value of COMPUTER_MARKER
 * - If there are two elements, when using an element in the sub array to access the board object's
 *   value, which returns COMPUTER_MARKER
 *  - Identify that as a potential winning move
 *  - Find the element, which when used to access the board object property's value, whose value is
 *    INITIAL_MARKER
 * 
 * Code
 */

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7], // diagonals
];

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

let board = {
  1: 'O',
  2: 'X',
  3: ' ',
  4: 'O',
  5: ' ',
  6: 'X',
  7: ' ',
  8: ' ',
  9: 'X',
}
console.log(board);

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER)
}

function detectThreat(board) {
  let emptySquare = 0;

  let potentialThreat = WINNING_LINES.filter(subArr => {
    let count = 0;

    for (let i = 0; i <= subArr.length; i++) {
      if (board[subArr[i]] === 'X') count += 1;
    }
    
    if (count === 2) return subArr;
  });

  potentialThreat.filter(subArr => {
    for (let i = 0; i <= subArr.length; i++) {
      if (board[subArr[i]] === ' ') {
        emptySquare = subArr[i];
        return subArr
      };
    }
  });

  return emptySquare;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER 
    ) {
      return 'Computer';
    }
  }

  return null;
}

function computerOffense(board) {
  
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  if (detectThreat(board) > 0) {
    board[detectThreat(board)] = COMPUTER_MARKER;
  } else {
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

// computerDefense(board);
console.log(detectThreat(board));
// console.log(board);