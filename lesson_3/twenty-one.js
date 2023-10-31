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
 */

/**
 * Data structure for the deck
 * 
 * Separate arrays
 * Pros
 * - Easy to randomly select a suit and a value for a card using a random index
 * 
 * Cons
 * - Could potentially select the same card and suit
 */

const SUITS = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

/**
 * Jack, Queen, King has a value of 10
 * Ace has a value of either 1 or 11
 * 
 */

const DECK = [];

VALUES.forEach((value) => {
  SUITS.forEach((suit) => {
    DECK.push([value, suit]);
  }); 
});

console.log(DECK);
console.log(DECK.length);
console.log(DECK[0], DECK[1]);