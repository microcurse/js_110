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
  const INIT_DECK = [];
  VALUES.forEach((cardVal) => {
    SUITS.forEach((cardSuit) => {
      INIT_DECK.push({ suit: cardSuit, value: cardVal });
    });
  });

  return INIT_DECK;
}
const DECK = initializeDeck();

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function shuffleDeck(array) {
  const NEW_ARRAY = array;
  for (let index = NEW_ARRAY.length - 1; index > 0; index -= 1) {
    const OTHER_INDEX = Math.floor(Math.random() * (index + 1));
    [NEW_ARRAY[index], NEW_ARRAY[OTHER_INDEX]] = [NEW_ARRAY[OTHER_INDEX], NEW_ARRAY[index]];
  }
}

function calculateCardsValue(cards) {
  let sum = 0;
  let aceCount = 0;

  cards.forEach((card) => {
    const { value } = card;
    if (value === 'Ace') {
      sum += 11;
      aceCount += 1;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  while (aceCount > 0 && sum > WINNING_NUMBER) {
    sum -= 10;
    aceCount -= 1;
  }

  return sum;
}

function busted(total) {
  return total > WINNING_NUMBER;
}

function displayGameMessages(player, cards) {
  const CARD_MESSAGES = cards.map((card) => `${card.value} of ${card.suit}`).join(', ');
  prompt(`Your cards: ${CARD_MESSAGES}`);
  prompt(`Your total: ${player.totalValue}`);
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
    player.totalValue = calculateCardsValue(PLAYERS_CARDS);
    displayGameMessages(player, PLAYERS_CARDS);
    const ANSWER = askPlayerHitOrStay();

    if (ANSWER === 's' || busted(player.totalValue)) break;
    if (ANSWER === 'h') {
      player.cards.push(deck.shift());
      player.totalValue = calculateCardsValue(PLAYERS_CARDS);
      if (busted(player.totalValue)) break;
    }
  }
}

function dealersTurn(deck, dealer) {
  while (true) {
    dealer.totalValue = calculateCardsValue(dealer.cards);
    prompt(`The dealer has a total of: ${dealer.totalValue}`);

    if (busted(dealer.totalValue)) break;
    if (dealer.totalValue >= COMPUTER_STAY_NUMBER) break;

    const nextCard = deck.shift();
    prompt(`Dealer hits: ${nextCard.value} of ${nextCard.suit}`);
    dealer.cards.push(nextCard);
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

function handlePlayerBust(playerTotal) {
  prompt(`Your total is: ${playerTotal}`);
  prompt('You busted!');
}

function handlePlayerStay(playerTotal) {
  prompt(`Your total is: ${playerTotal}`);
  prompt('You chose to stay!');
}

function handleDealerResult(dealerTotal) {
  if (busted(dealerTotal)) {
    prompt('Dealer busted');
  } else {
    prompt(`The dealer stays at: ${dealerTotal}`);
  }
}

function playRound(deck, score, round) {
  const player = { cards: [], totalValue: 0 };
  const dealer = { cards: [], totalValue: 0 };

  // Draw initial cards
  player.cards.push(...deck.splice(0, 2));
  dealer.cards.push(...deck.splice(0, 2));

  console.clear();
  displayScoreBoard(score, round);

  prompt(`Dealer shows: ${dealer.cards[0].value} of ${dealer.cards[0].suit}`);
  playerTurn(deck, player);

  if (busted(player.totalValue)) {
    handlePlayerBust(player.totalValue);
  } else {
    handlePlayerStay(player.totalValue);
    dealersTurn(deck, dealer);
    handleDealerResult(dealer.totalValue);
  }

  const winner = calculateResults(player.totalValue, dealer.totalValue);
  displayResult(winner);
  updateScore(score, winner);

  readline.question('Press enter to continue');
}

function playTwentyOne() {
  while (true) {
    let round = 1;
    shuffleDeck(DECK);
    const SCORE = { player: 0, dealer: 0 };

    while (true) {
      playRound(DECK, SCORE, round);

      if (SCORE.player === ROUNDS_TO_WIN || SCORE.dealer === ROUNDS_TO_WIN) break;
      round += 1;
    }

    displayGameWinner(SCORE, round);
    if (playAgain() !== 'y') break;
  }

  console.log('--------------------');
  console.log('Thanks for playing Twenty-One!');
}

playTwentyOne();
