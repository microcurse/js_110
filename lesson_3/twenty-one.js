/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */

const readline = require('readline-sync');

const SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_NUMBER = 21;
const COMPUTER_STAY_NUMBER = 17;
const ROUNDS_TO_WIN = 3;
function initializeDeck() {
  /**
   * Can each card be created as an object?
   *
   * Explicit requirements:
   * - INPUT: two arrays (SUITS, VALUES) containing strings
   * - OUTPUT: an object (CARD) containing a suit and a value
   *
   * Implicit requirements:
   * - N/A
   *
   * Examples and test cases:
   * - SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
   * - VALUES = ['2', '3', '4', '5']
   *
   * DECK = [ {SUIT: 'Diamonds', VALUE: '2'}, {SUIT: 'Clubs', VALUE: '4'} ]
   * DECK = {
   *  card: { suit: 'diamonds', value: '2' }
   *  card: { suit: 'diamonds', value: '2' } ?
   * }
   *
   * Problem is when creating a card for each SUIT/VALUE pair, the name of each object
   * within deck (card)needs to be unique.
   *
   */

  const INIT_DECK = [];
  // This creates a card using a value and a suit and concatenating them to the same array.
  VALUES.forEach((value) => {
    SUITS.forEach((suit) => {
      INIT_DECK.push([value, suit]);
    });
  });

  return INIT_DECK;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

const DECK = initializeDeck();

function shuffleDeck(array) {
  const NEW_ARRAY = array;
  for (let index = NEW_ARRAY.length - 1; index > 0; index -= 1) {
    const OTHER_INDEX = Math.floor(Math.random() * (index + 1));
    [NEW_ARRAY[index], NEW_ARRAY[OTHER_INDEX]] = [NEW_ARRAY[OTHER_INDEX], NEW_ARRAY[index]];
  }
}

function calculateCardsValue(cards) {
  const CARD_VALUES = cards.map((card) => card[0]);
  let sum = 0;

  CARD_VALUES.forEach((value) => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  CARD_VALUES.filter((value) => value === 'Ace').forEach(() => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function cardToString(cards, delimiter = ' of ', lastDelimiter = 'and') {
  if (cards.length === 2) {
    return cards.map((card) => card.join(delimiter)).join(` ${lastDelimiter} `);
  }

  let result = '';
  for (let i = 0; i < cards.length; i += 1) {
    const subArrStr = cards[i].map((item) => item.toString()).join(delimiter);

    if (i === 0) {
      result += subArrStr;
    } else if (i === cards.length - 1) {
      result += `, ${lastDelimiter} ${subArrStr}`;
    } else if (i === cards.length - 2) {
      result += `, ${subArrStr}`;
    } else {
      result += `, ${subArrStr}`;
    }
  }

  return result;
}

function busted(total) {
  return total > WINNING_NUMBER;
}

function displayGameMessages(player, cards) {
  prompt(`Your cards: ${cardToString(cards)}`);
  prompt(`Your total: ${player.value}`);
  prompt('(h)it or (s)tay?');
}

function askPlayerHitOrStay() {
  let answer;
  while (true) {
    answer = readline.question().toLowerCase();
    if (answer === 'hit') {
      answer = 'h';
    } else if (answer === 'stay') {
      answer = 's';
    }

    if (answer === 'h' || answer === 's') break;
    prompt('Sorry, input is invalid. Please enter (h)it or (s)tay');
  }

  return answer;
}

function playerTurn(deck, player) {
  while (true) {
    const PLAYERS_CARDS = player.cards;
    player.value = calculateCardsValue(PLAYERS_CARDS);
    displayGameMessages(player, PLAYERS_CARDS);
    const ANSWER = askPlayerHitOrStay();

    if (ANSWER === 's' || busted(player.value)) break;
    if (ANSWER === 'h') {
      player.cards.push(deck.shift());
      player.value = calculateCardsValue(PLAYERS_CARDS);
      if (busted(player.value)) break;
    }
  }
}

function dealersTurn(deck, computersCards) {
  while (true) {
    computersCards.value = calculateCardsValue(computersCards.cards);
    prompt(`The dealer has a total of: ${computersCards.value}`);

    if (computersCards.value >= COMPUTER_STAY_NUMBER || busted(computersCards.value)) break;

    const NEXT_CARD = deck.shift();

    prompt('Dealer hits');
    computersCards.cards.push(NEXT_CARD);
    computersCards.value = calculateCardsValue(computersCards.cards);
  }
}

function displayResult(winner) {
  if (winner) {
    prompt(`The ${winner} wins!`);
  } else {
    prompt("It's a tie!");
  }
}

function displayScoreBoard(score, round) {
  console.log(` ------------ ROUND #${round} ------------- `);
  console.log(`| Player Score: ${score.player} | Dealer Score: ${score.dealer} |`);
  console.log(' ----------------------------------- ');
  console.log(`Closest to ${WINNING_NUMBER} without going over wins the round.`);
  console.log(`First to ${ROUNDS_TO_WIN} wins takes the game`);
  console.log(' ');
}

function calculateResults(playersTotal, dealersTotal) {
  if (busted(dealersTotal)) return 'Player';
  if (busted(playersTotal)) return 'Dealer';
  if (playersTotal < dealersTotal) return 'Dealer';
  if (playersTotal > dealersTotal) return 'Player';

  return null;
}

function updateScore(score, winner) {
  if (winner === 'Player') {
    score.player += 1;
  } else if (winner === 'Dealer') {
    score.dealer += 1;
  }
}

function playAgain() {
  console.log('--------------------');
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
    prompt("Sorry, that's invalid. Please enter (y)es or (n)o");
  }

  return answer;
}

function displayGameWinner(score, round) {
  console.clear();
  displayScoreBoard(score, round);
  if (score.player === 3) {
    console.log('🎉 You won the game! 🎉');
  } else {
    console.log('🤖 The house wins the game! 🤖');
  }
}

function playRound(deck, score, round) {
  const player = { cards: deck.splice(0, 2), value: 0 };
  const dealer = { cards: deck.splice(3, 2), value: 0 };
  console.clear();
  displayScoreBoard(score, round);

  prompt(`Dealer shows: ${dealer.cards[0].join(' of ')}`);
  playerTurn(deck, player);

  if (busted(player.value)) {
    prompt(`Your total is: ${player.value}`);
    prompt('You busted!');
  } else {
    dealersTurn(deck, dealer);

    const winner = calculateResults(player.value, dealer.value);
    displayResult(winner);
    updateScore(score, winner);
  }

  readline.question('Press Enter to continue');
}

function playTwentyOne() {
  while (true) {
    let round = 1;
    shuffleDeck(DECK);
    const SCORE = { player: 0, dealer: 0 };

    while (true) {
      playRound(DECK, SCORE, round);

      if (SCORE.player === ROUNDS_TO_WIN || SCORE.dealer === ROUNDS_TO_WIN) break;
      round++;
    }

    displayGameWinner(SCORE, round);
    if (playAgain() !== 'y') break;
  }

  console.log('--------------------');
  console.log('Thanks for playing Twenty-One!');
}

playTwentyOne();