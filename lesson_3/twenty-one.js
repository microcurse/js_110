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
 *  - Currently works, however, it still needs an oxford comma between the last two elements.
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

function cardToString(cards, delimiter = ' of ', lastDelimiter = 'and') {

  /**
   * Input: [[8, Diamonds], [10, Spades]]
   * Output '8 of Diamonds and 10 of Spades'
   * Input with 3 elements: [[8, Diamonds], [10, Spades]. [Ace, Spades]]
   * Output '8 of Diamonds, 10 of Spades, and Ace of Spades'
   * - Each card (inner array) is separated by 'of'
   *  - VALUE of SUIT
   * - If there are more than two cards, comma separate each one.
   * - The last two cards are separated by 'and'
   * 
   */
  if (cards.length === 2) {
    return cards.map(card => card.join(delimiter)).join(` ${lastDelimiter} `);
  }

  let result = '';

  for (let i = 0; i < cards.length; i++) {
    const subArrStr = cards[i].map(item => item.toString()).join(delimiter);

    if (i === 0) {
      result += subArrStr;
    } else if (i === cards.length - 1) {
      result += ` ${lastDelimiter} ${subArrStr}`;
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

function playerTurn(deck, playersCards) {
  while(true) {
    playersCards.value = calculateCardsValue(playersCards.cards);
    prompt(`Your cards: ${cardToString(playersCards.cards)}`);
    prompt(`Your total: ${playersCards.value}`);
    prompt("(h)it or (s)tay?");
    let answer;

    while (true) {
      answer = readline.question().toLowerCase();
      if (answer === 'hit') {
        answer = 'h';
      } else if (answer === 'stay') {
        answer = 's';
      }

      if (answer === 'h' || answer === 's') break;
      prompt("Sorry, input is invalid. Please enter (h)it or (s)tay");
    }

    console.clear();

    if (answer === 's' || busted(playersCards.value)) break;

    if (answer === 'h') {
      playersCards['cards'].push(deck.shift());
      playersCards.value = calculateCardsValue(playersCards.cards);
      if (busted(playersCards.value)) break;
    }

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
    prompt("Sorry, that's invalid. Please enter yes or no");
  }

  return answer;
}

function playTwentyOne() {
  while (true) {
    console.clear();
    const DECK = initializeDeck();
    shuffleDeck(DECK);
    const PLAYERS_CARDS = { cards: DECK.splice(0, 2), value: 0 };
    const DEALERS_CARDS = { cards: DECK.splice(3, 2), value: 0 };
    let winner;

    // Reveal initially dealt cards
    prompt(`Dealer is showing: ${DEALERS_CARDS.cards[0].join(' of ')}`);
    // prompt(`You're showing: ${cardToString(PLAYERS_CARDS.cards)}`);

    playerTurn(DECK, PLAYERS_CARDS);

    if (busted(PLAYERS_CARDS.value)) {
      prompt(`Your total is: ${PLAYERS_CARDS.value}`);
      prompt(`You busted!`);
    } else {
      prompt(PLAYERS_CARDS.value);
      prompt("You chose to stay!");

      console.clear();

      dealersTurn(DECK, DEALERS_CARDS);

      if (busted(DEALERS_CARDS.value)) {
        prompt(`Dealer busted`);
      } else {
        prompt(`The dealer stays at: ${DEALERS_CARDS.value}`);
      }

    }

    winner = calculateResults(PLAYERS_CARDS.value, DEALERS_CARDS.value);
    displayResult(winner);
    
    if (playAgain() !== 'y') break;
  }

  console.log('--------------------');
  console.log(`Thanks for playing Twenty-One!`);
}

playTwentyOne();