/**
 * PEDAC
 * 
 * Understand the Problem
 * "Detect Threat"
 * Create a function that makes the computer defensive-minded so that when an immediate threat exists,
 * it will try to defend the 3rd square. An immediate threat occurs when the human player has 2 squares
 * in a row with a 3rd square unoccupied. If there is no immediate threat, the computer can pick a 
 * random square.
 * 
 * Explicit Requirements:
 * - Input: an object (the board)
 * - Output: A stringified number 
 * - The output number represents the 3rd square which blocks a potential win from the player
 * - An immediate threat is when the player has markers on 2 spaces on the board object with indexes 
 *   that exist in an inner array within the WINNING_LINES nested array.
 * - If no immediate threat, the computer can pick a random square.
 * - 
 * 
 * Implicit Requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and test cases
 * board = {
 *  1: 'X',
 *  2: 'X',
 *  3: ' ',
 *  4: ' ',
 *  5: ' ',
 *  6: 'O',
 *  7: ' ',
 *  8: ' ',
 *  9: ' ',
 * }
 * 
 * Player's line that will result in a win:
 * ['1', '2', '3']
 * 
 * We need to utilize the detectWinner function to check the first 2 squares that could lead to a win
 * 
 * Data Structure
 * 
 * Algorithm
 * - Iterate through all potential WINNING_LINES and create a comparison variable for each line
 * - Use the current board with bracket notation to check each space for HUMAN_MARKERs
 * - If there are at least 2 HUMAN_MARKERS with indexes that match a sub array in WINNING_LINES
 * - return the element at index 2 of the sub array as the computer's selection
 * 
 * Problems
 * This currently does not effectively defend when selecting 6 and 9 for example.
 * Currently the computerDefense function only detects a threat if the WINNING_LINES creates it's
 * comparison in sequence.
 * 
 * Example:
 * [' ', '6', '9']
 * There is an immediate threat on square 3, however since computerDefense only sees '0' and '6'
 * It returns null and a random square is selected
 * 
 * Possible solutions?
 * - Collect all board properties with values containing HUMAN_MARKER
 * - If it contains HUMAN_MARKER, create a sub array.
 * 
 * Code
 * 
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
  2: ' ',
  3: ' ',
  4: ' ',
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

function computerDefense(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER
    ) {
      return sq3;
    }
  }

  return null;
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

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  if (computerDefense(board) !== null) {
    let square = computerDefense(board);
    board[square] = COMPUTER_MARKER;
  } else {
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

console.log(computerChoosesSquare(board));
console.log(board);