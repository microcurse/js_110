/**
 * Twenty-One!
 * 
 * Implementation Steps:
 * 1. Initialize deck
 * 2. Deal cards to player and dealer
 * 3. Player turn: hit or stay
 *    - repeat until bust or stay
 * 4. If player bust, dealer wins.
 * 5. Dealer turn: hit or stay
 *    - repeat until total >= 17
 * 6. If dealer busts, player wins.
 * 7. Compare cards and declare winner.
 * 
 * TODO
 * - Fix cardToString function
 * - Create playAgain function
 * - Clean up user input for hit or stay to accept 'h' or 's'
 * - Create a graphical representation?
 * 
 */

const readline = require('readline-sync');
const SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_NUMBER = 21;
const COMPUTER_STAY_NUMBER = 17;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  let deck = [];

  VALUES.forEach((value) => {
    SUITS.forEach((suit) => {
      deck.push([value, suit]);
    }); 
  });

  return deck;
}

function shuffleDeck(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function calculateCardsValue(cards) {
  let values = cards.map((card) => card[0]);
  let sum = 0;
  
  values.forEach((value) => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter((value) => value === 'Ace').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function cardToString(cards) {
  let result = '';
  cards.forEach((card) => {
    result += card.join(' of ');
    result += ", "
  });

  return result;
}

function busted(total) {
  return total > WINNING_NUMBER;
}

function playerTurn(deck, playersCards) {
  while(true) {
    playersCards.value = calculateCardsValue(playersCards.cards);
    prompt(`Your cards are: ${playersCards.cards}`);
    prompt(`Your total is: ${playersCards.value}`);
    prompt("hit or stay?");

    let answer = readline.question().toLowerCase();

    if (answer === 'stay' || busted(playersCards.value)) break;

    if (answer === 'hit') {
      playersCards['cards'].push(deck.shift());
      playersCards.value = calculateCardsValue(playersCards.cards);
      if (busted(playersCards.value)) break;
    }

    prompt(playersCards.value);
  }

}

function dealersTurn(deck, computersCards) {
  while(true) {
    computersCards['value'] = calculateCardsValue(computersCards.cards);
    prompt(`The dealer has a total of: ${computersCards.value}`);

    if (computersCards.value >= COMPUTER_STAY_NUMBER || busted(computersCards.value)) break;

    let nextCard = deck.shift();

    prompt(`Dealer hits`);
    computersCards['cards'].push(nextCard);
    computersCards['value'] = calculateCardsValue(computersCards.cards);
  }

}

function displayResult(winner) {
  if (winner) {
    prompt(`The ${winner} wins!`);
  } else {
    prompt(`It's a tie!`);
  }
}

function calculateResults(playersTotal, dealersTotal) {
  if (busted(dealersTotal)) {
    return 'Player';
  } else if (busted(playersTotal)) {
    return 'Dealer';
  } else if (playersTotal < dealersTotal) {
    return 'Dealer';
  } else if (playersTotal > dealersTotal) {
    return 'Player';
  }

  return null;
}

function playTwentyOne() {
  const DECK = initializeDeck();
  shuffleDeck(DECK);
  const PLAYERS_CARDS = { cards: DECK.splice(0, 2), value: 0 };
  const DEALERS_CARDS = { cards: DECK.splice(3, 2), value: 0 };
  let winner;

  playerTurn(DECK, PLAYERS_CARDS);

  if (busted(PLAYERS_CARDS.value)) {
    prompt(`Your total is: ${PLAYERS_CARDS.value}`);
    prompt(`You busted!`);
  } else {
    prompt(PLAYERS_CARDS.value);
    prompt("You chose to stay!");
    dealersTurn(DECK, DEALERS_CARDS);

    if (busted(DEALERS_CARDS.value)) {
      prompt(`Dealer busted`);
    } else {
      prompt(`The dealer stays at: ${DEALERS_CARDS.value}`);
    }

  }

  winner = calculateResults(PLAYERS_CARDS.value, DEALERS_CARDS.value);
  displayResult(winner);
}

playTwentyOne();