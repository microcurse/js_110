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
 * Alternative solution algorithm
 * - Collect all board properties with values containing HUMAN_MARKER and store that into an array
 * - What needs to be done to the sub array in order to identify it as a potential win?
 *  - Iterate over each WINNING_LINE
 *    - if that line includes 2 out of the 3 board square indexes containing HUMAN_MARKERs then return
 *      the 3rd board square index.
 * 
 * Algorithm based on advice from Kwang
 * Get a count of how many of the board positions in a given WINNING_LINE are occuped by the human,
 * and how many are empty. This should disregard the position that it's in (first, second, third).
 * If 2 of the markers are human and one is empty, use occupy that space.
 * 
 * - Iterate through each WINNING_LINE sub array
 *  - If there are two human markers in the sub array and an empty space
 *    - Occupy that empty space
 * 
 * 
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
  1: ' ',
  2: 'O',
  3: 'O',
  4: ' ',
  5: 'X',
  6: 'X',
  7: 'X',
  8: ' ',
  9: ' ',
}
console.log(board);

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER)
}

function detectThreat(board, line) {

  // line = [1, 2, 3] 
  // use line to access value of that board position
  // board[1] --> INITIAL_MARKER
  // board[2] --> HUMAN_MARKER
  // board[3] --> COMPUTER_MARKER

  let emptySquare;
  let lineMarkers = line.map(marker => board[marker]); // [' ', 'X', 'O'];

  // Filter method will let us create a new array containing only X's or O's
  let computers = lineMarkers.filter(marker => marker === COMPUTER_MARKER); // ['O']
  let humans = lineMarkers.filter(marker => marker === HUMAN_MARKER); // ['X']

  // Check if lineMarkers has two X's or two O's
  
  if (computers.length === 2 || humans.length === 2) {
    // find the empty marker and return its board square position
    emptySquare = lineMarkers.find(square => board[square] === INITIAL_MARKER);
  }


  // let potentialThreat = WINNING_LINES.filter(subArr => {
  //   let humans = subArr.filter(position => board[position] === HUMAN_MARKER).length;
  //   let empty = subArr.filter(position => board[position] === INITIAL_MARKER).length;
  //   return (humans === 2 && empty === 1);
  // });

  // if (potentialThreat.length === 0) return 0;

  // return potentialThreat[0].filter(position => board[position] === INITIAL_MARKER);

  // If no threats are detected, return undefined
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

function computerChoosesSquare(board) {
  let square;
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  // Determine whether there is a win for either the computer or the human
  // If there's a threat of the human winning, pick defense
  // If there is a chance of the computer winning, pick offense

  // Iterate over each WINNING_LINE and check for either a "potential win" or "potential loss"
  for (let x = 0; x < WINNING_LINES.length; x++ ) {
    let line =  WINNING_LINES[x]; // currently iterated line
    
    // check currently iterated WINNING_LINE for threats

    // detectThreat checks
    // Input: array
    // Output: a number
    // - When a threat is detected, determine whether it's a win or a loss treat
    // - Can we determine win or loss threat within the detectThreat?
    // - Check for the existence of either two HUMAN_MARKERs or two COMPUTER_MARKERs
    // - Return the board position occupied with INITIAL_MARKER
    // - If no threats detected, return undefined

    if (detectThreat(board, line)) {
      square = detectThreat(board, line);
    }
  }
  
  // Problems:
  // - line isn't defined outside of the for loop, therefore cannot be passed into detectThreat properly
  if (square) {
    board[square] = COMPUTER_MARKER;
  } else {
    square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }

  // if (computerOffense(board) > 0) {
  //   let square = computerOffense(board);
  //   board[square] = COMPUTER_MARKER;
  // } else if (detectThreat(board) > 0) {
  //   let square = detectThreat(board);
  //   board[square] = COMPUTER_MARKER;
  // } else {
  //   let square = emptySquares(board)[randomIndex];
  //   board[square] = COMPUTER_MARKER;
  // }
}

computerChoosesSquare(board);
// console.log(detectThreat(board));
console.log(board);