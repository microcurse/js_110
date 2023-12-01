/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */

const readline = require('readline-sync');

const SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_NUMBER = 21;
const COMPUTER_STAY_NUMBER = 17;
const ROUNDS_TO_WIN = 3;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  const DECK = [];

  VALUES.forEach((value) => {
    SUITS.forEach((suit) => {
      DECK.push([value, suit]);
    });
  });

  return DECK;
}

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

function playerTurn(deck, player) {
  while (true) {
    const PLAYERS_CARDS = player.cards;
    player.value = calculateCardsValue(PLAYERS_CARDS);
    prompt(`Your cards: ${cardToString(PLAYERS_CARDS)}`);
    prompt(`Your total: ${player.value}`);
    prompt('(h)it or (s)tay?');
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

    if (answer === 's' || busted(player.value)) break;
    if (answer === 'h') {
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
  } else {
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

function playTwentyOne() {
  // This plays the game
  let round = 1;
  while (true) {
    const DECK = initializeDeck();
    shuffleDeck(DECK);
    const SCORE = { player: 0, dealer: 0 };

    // This plays a round of twenty-one
    while (true) {
      const PLAYER = { cards: DECK.splice(0, 2), value: 0 };
      const DEALER = { cards: DECK.splice(3, 2), value: 0 };
      console.clear();
      displayScoreBoard(SCORE, round);

      prompt(`Dealer is showing: ${DEALER.cards[0].join(' of ')}`);
      playerTurn(DECK, PLAYER);

      if (busted(PLAYER.value)) {
        prompt(`Your total is: ${PLAYER.value}`);
        prompt('You busted!');
      } else {
        prompt(`Your total is: ${PLAYER.value}`);
        prompt('You chose to stay!');

        dealersTurn(DECK, DEALER);

        if (busted(DEALER.value)) {
          prompt('Dealer busted');
        } else {
          prompt(`The dealer stays at: ${DEALER.value}`);
        }
      }

      const WINNER = calculateResults(PLAYER.value, DEALER.value);
      displayResult(WINNER);
      updateScore(SCORE, WINNER);

      if (SCORE.player === ROUNDS_TO_WIN || SCORE.dealer === ROUNDS_TO_WIN) break;
      readline.question('Press any key to continue');
      round += 1;
    }

    if (playAgain() !== 'y') break;
  }

  console.log('--------------------');
  console.log('Thanks for playing Twenty-One!');
}

playTwentyOne();
