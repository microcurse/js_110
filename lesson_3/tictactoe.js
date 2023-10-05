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
const PLAYER = 'player';
const COMPUTER = 'computer';
const WHO_PLAYS_FIRST = { choose: ' ' };
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function chooseWhoPlaysFirst() {
  console.clear();
  prompt('Welcome to Tic Tac Toe!');
  prompt(`Let's play ${NUMBER_OF_WINS + 1} games.`);

  while (true) {
    prompt('Who should go first? (player or computer)');
    WHO_PLAYS_FIRST.choose = readline.question().toLowerCase();

    if (WHO_PLAYS_FIRST.choose === PLAYER[0]) {
      WHO_PLAYS_FIRST.choose = PLAYER;
    } else if (WHO_PLAYS_FIRST.choose === COMPUTER[0]) {
      WHO_PLAYS_FIRST.choose = COMPUTER;
    }

    if (WHO_PLAYS_FIRST.choose === PLAYER || WHO_PLAYS_FIRST.choose === COMPUTER) break;

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

function updateScores(winner, scores) {
  const SCORES = scores;
  if (winner === PLAYER) {
    SCORES.player += 1;
  } else if (winner === COMPUTER) {
    SCORES.computer += 1;
  }
}

function initializeBoard() {
  const BOARD = {};

  for (let square = 1; square <= 9; square += 1) {
    BOARD[String(square)] = INITIAL_MARKER;
  }

  return BOARD;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function joinOr(squares, delimiter = ', ', lastDelimiter = 'or') {
  let result = '';
  if (squares.length >= 3) {
    const LAST_ELEMENT = squares.pop();
    result = squares.join(delimiter).concat(`, ${lastDelimiter} `, LAST_ELEMENT);
  } else if (squares.length === 2) {
    result = squares.join(` ${lastDelimiter} `);
  } else {
    return squares.join('');
  }

  return result;
}

function playerChoosesSquare(board) {
  const BOARD = board;
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(BOARD), ', ')}):`);
    square = readline.question().trim();
    if (emptySquares(BOARD).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  BOARD[square] = HUMAN_MARKER;
}

function detectThreat(board, line, marker) {
  const LINE_MARKERS = line.map((element) => board[element]);
  const THREAT = LINE_MARKERS.filter((element) => element === marker);
  if (THREAT.length === 2) {
    return line.find((square) => board[square] === INITIAL_MARKER);
  }

  return null;
}

function computerAi(board, marker) {
  let square;
  for (let x = 0; x < WINNING_LINES.length; x += 1) {
    const LINE = WINNING_LINES[x];
    square = detectThreat(board, LINE, marker);
    if (square) break;
  }

  return square;
}

function computerRandomMove(board) {
  return Math.floor(Math.random() * emptySquares(board).length);
}

function computerChoosesSquare(board) {
  const BOARD = board;
  let square;

  square = computerAi(board, COMPUTER_MARKER);
  if (!square) square = computerAi(BOARD, HUMAN_MARKER);
  if (!square && BOARD[CENTER_SQUARE] === INITIAL_MARKER) {
    square = CENTER_SQUARE;
  } else if (!square && BOARD[CENTER_SQUARE] !== INITIAL_MARKER) {
    square = emptySquares(BOARD)[computerRandomMove(BOARD)];
  }

  BOARD[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    const [sq1, sq2, sq3] = WINNING_LINES[line];
    const CURRENT_LINE = [board[sq1], board[sq2], board[sq3]];
    const humanSquares = (square) => square === HUMAN_MARKER;
    const computerSquares = (square) => square === COMPUTER_MARKER;

    if (CURRENT_LINE.every(humanSquares)) return PLAYER;
    if (CURRENT_LINE.every(computerSquares)) return COMPUTER;
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
  if (currentPlayer === PLAYER) {
    playerChoosesSquare(board);
  } else if (currentPlayer === COMPUTER) {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === PLAYER) return COMPUTER;
  return PLAYER;
}

// Main Game Loop
while (true) {
  let board = initializeBoard();
  const SCORES = { player: 0, computer: 0 };

  chooseWhoPlaysFirst();
  const FIRST_PLAYER = WHO_PLAYS_FIRST.choose;
  let currentPlayer = FIRST_PLAYER;

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

    updateScores(detectWinner(board), SCORES);
    readline.question("Press 'enter' to continue");

    currentPlayer = FIRST_PLAYER;
    if (SCORES.player === NUMBER_OF_WINS || SCORES.computer === NUMBER_OF_WINS) break;
  }

  displayBoard(board, SCORES);
  prompt(`🎉 ${detectWinner(board)} is Tic Tac Toe Champion!! 🎉`);

  const PLAY_AGAIN_ANSWER = playAgain();
  if (PLAY_AGAIN_ANSWER !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
