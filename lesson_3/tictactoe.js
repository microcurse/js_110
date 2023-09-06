/**
 * 
 * Tic Tac Toe
 * 
 * High Level Breakdown
 * 1. Display the initial empty 3x3 board.
 * 2. Ask the user to mark a square.
 * 3. Computer marks a square.
 * 4. Display the updated board state.
 * 5. If it's a winning board, display the winner.
 * 6. If the board is full, display tie.
 * 7. If neither player won and the board is not full, go to #2
 * 8. Play again?
 * 9. If yes, go to #1
 * 10. Goodbye!
 * 
 * 
 */
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// 1. Display the initial empty 3x3 board.
function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {}

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER)
}


// 2. Ask the user to mark a square.
function playerChoosesSquare(board) {
  let square; 

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = PLAYER_MARKER;
}

// 3. Computer marks a square.
function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}


let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
computerChoosesSquare(board);

// 4. Display the updated board state.
displayBoard(board);
// 5. If it's a winning board, display the winner.
// 6. If the board is full, display tie.
// 7. If neither player won and the board is not full, go to #2
// 8. Play again?
// 9. If yes, go to #1
// 10. Goodbye!