const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUMBER_OF_WINS = 2;
const WINNING_LINES = [ ['1', '2', '3'],
                        ['1', '5', '9'],
                        ['1', '4', '7'],
                        ['2', '5', '8'],
                        ['3', '5', '7'],
                        ['3', '6', '9'],
                        ['4', '5', '6'],
                        ['7', '8', '9'],
                      ];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board, scores) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`); 
  console.log(`First to ${NUMBER_OF_WINS} wins is Tic Tac Toe champion!`); 

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

  displayScore(scores);
}

function keepScore(winner, scores) {
  /**
   * Every time a player or computer wins, increase their score.
   * Do not use global variables
   * 
   * Input: a string (winner of the match)
   * Output: a string (the score)
   * 
   */

  if (winner === 'Player') {
    scores.player += 1;
  } else if (winner === 'Computer') {
    scores.computer += 1;
  }
  
}

function displayScore(scores) {
  prompt(`Player score: ${scores.player} | Computer score: ${scores.computer}`);
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

function joinOr(squares, delimiter = ', ', lastDelimiter = 'or') {
  let result = '';
  if (squares.length >= 3) {
    let lastElement = squares.pop();
    result = squares.join(delimiter).concat(', ' + lastDelimiter  + ' ', lastElement);
  } else if (squares.length === 2) {
    result = squares.join(' ' + delimiter + ' ');
  } else {
    return squares.join('');
  }

  return result;
}

function playerChoosesSquare(board) {
  let square; 

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board), ', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
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

  let immediateThreat = potentialThreat.filter(subArr => {
    for (let i = 0; i <= subArr.length; i++) {
      if (board[subArr[i]] === ' ') {
        emptySquare = subArr[i];
        return subArr
      };
    }
  });

  return emptySquare;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  if (detectThreat(board) > 0) {
    let square = detectThreat(board);
    board[square] = COMPUTER_MARKER;
  } else {
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
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

// Main Game Loop
while(true) {
  let board = initializeBoard();
  let round = 0;
  const SCORES = {
    player: 0,
    computer: 0
  }

  // Round loop
  while (true) {
    board = initializeBoard();

    // Playing the game loop
    while (true) {
      displayBoard(board, SCORES);
    
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      
    }
    
    displayBoard(board, SCORES);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    };

    keepScore(detectWinner(board), SCORES);
    readline.question("Press 'enter' to continue");
    
    round++;
    if (SCORES.player === NUMBER_OF_WINS || SCORES.computer === NUMBER_OF_WINS) break;
  }

  displayBoard(board, SCORES);
  prompt(`🎉 ${detectWinner(board)} is Tic Tac Toe Champion!! 🎉`)
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

// function playRound(board, scores) {

// }

prompt('Thanks for playing Tic Tac Toe!');