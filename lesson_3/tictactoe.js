/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const CENTER_SQUARE = 5;
const NUMBER_OF_WINS = 2;
const WINNING_LINES = [['1', '2', '3'], ['1', '5', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '5', '7'], ['3', '6', '9'], ['4', '5', '6'], ['7', '8', '9'],
];
const WHO_PLAYS_FIRST = { choose: ' ' };
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function chooseWhoPlaysFirst() {
  console.clear();
  prompt('Welcome to Tic Tac Toe!');
  prompt(`Let's play a best of ${NUMBER_OF_WINS + 1} games.`);

  while (true) {
    prompt('Who should go first? (player or computer)');
    WHO_PLAYS_FIRST.choose = readline.question().toLowerCase();

    if (WHO_PLAYS_FIRST.choose === 'p') {
      WHO_PLAYS_FIRST.choose = 'player';
    } else if (WHO_PLAYS_FIRST.choose === 'c') {
      WHO_PLAYS_FIRST.choose = 'computer';
    }

    if (WHO_PLAYS_FIRST.choose === 'player' || WHO_PLAYS_FIRST.choose === 'computer') break;

    prompt("Sorry, that's not a valid choice.");
  }
}

function displayScore(scores) {
  prompt(`Player score: ${scores.player} | Computer score: ${scores.computer}`);
}

function displayBoard(board, scores) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log(`First to ${NUMBER_OF_WINS} wins is Tic Tac Toe champion!`);
  console.log(`${WHO_PLAYS_FIRST.choose} plays first each round`);

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
  const Scores = scores;
  if (winner === 'Player') {
    Scores.player += 1;
  } else if (winner === 'Computer') {
    Scores.computer += 1;
  }
}

function initializeBoard() {
  const Board = {};

  for (let square = 1; square <= 9; square += 1) {
    Board[String(square)] = INITIAL_MARKER;
  }

  return Board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function joinOr(squares, delimiter = ', ', lastDelimiter = 'or') {
  let result = '';
  if (squares.length >= 3) {
    const lastElement = squares.pop();
    result = squares.join(delimiter).concat(`, ${lastDelimiter} `, lastElement);
  } else if (squares.length === 2) {
    result = squares.join(` ${lastDelimiter} `);
  } else {
    return squares.join('');
  }

  return result;
}

function playerChoosesSquare(board) {
  const Board = board;
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(Board), ', ')}):`);
    square = readline.question().trim();
    if (emptySquares(Board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  Board[square] = HUMAN_MARKER;
}

function detectThreat(board, line, marker) {
  const LineMarkers = line.map((element) => board[element]);
  const Threat = LineMarkers.filter((element) => element === marker);
  if (Threat.length === 2) {
    return line.find((square) => board[square] === INITIAL_MARKER);
  }

  return null;
}

function computerOffense(board) {
  let square;
  for (let x = 0; x < WINNING_LINES.length; x += 1) {
    const Line = WINNING_LINES[x];
    square = detectThreat(board, Line, COMPUTER_MARKER);
    if (square) break;
  }

  return square;
}

function computerDefense(board) {
  let square;
  for (let x = 0; x < WINNING_LINES.length; x += 1) {
    const Line = WINNING_LINES[x];
    square = detectThreat(board, Line, HUMAN_MARKER);
    if (square) break;
  }

  return square;
}

function computerRandomMove(board) {
  return Math.floor(Math.random() * emptySquares(board).length);
}

function computerChoosesSquare(board) {
  const Board = board;
  let square;

  square = computerOffense(board);
  if (!square) square = computerDefense(Board);
  if (!square && Board[CENTER_SQUARE] === INITIAL_MARKER) {
    square = CENTER_SQUARE;
  } else if (!square && Board[CENTER_SQUARE] !== INITIAL_MARKER) {
    square = emptySquares(Board)[computerRandomMove(Board)];
  }

  Board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    const [sq1, sq2, sq3] = WINNING_LINES[line];
    const CurrentLine = [board[sq1], board[sq2], board[sq3]];
    const humanSquares = (square) => square === HUMAN_MARKER;
    const computerSquares = (square) => square === COMPUTER_MARKER;

    if (CurrentLine.every(humanSquares)) return 'Player';
    if (CurrentLine.every(computerSquares)) return 'Computer';
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function playAgain() {
  prompt('Play again? (y or n)');
  let answer;
  while (true) {
    answer = readline.question().toLowerCase();
    if (answer === 'yes') {
      answer = 'y';
    } else if (answer === 'no') {
      answer = 'n';
    }

    if (answer === 'y' || answer === 'n') break;
    prompt("Sorry, that's invalid. Please enter yes or no");
  }

  return answer;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') return 'computer';
  return 'player';
}

// Main Game Loop
while (true) {
  let board = initializeBoard();
  const SCORES = { player: 0, computer: 0 };

  chooseWhoPlaysFirst();
  const FirstPlayer = WHO_PLAYS_FIRST.choose;
  let currentPlayer = FirstPlayer;

  // Round loop
  while (true) {
    board = initializeBoard();

    // Playing the game loop
    while (true) {
      displayBoard(board, SCORES);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board, SCORES);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    keepScore(detectWinner(board), SCORES);
    readline.question("Press 'enter' to continue");

    currentPlayer = FirstPlayer;
    if (SCORES.player === NUMBER_OF_WINS || SCORES.computer === NUMBER_OF_WINS) break;
  }

  displayBoard(board, SCORES);
  prompt(`🎉 ${detectWinner(board)} is Tic Tac Toe Champion!! 🎉`);

  const PlayAgainAnswer = playAgain();
  if (PlayAgainAnswer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
