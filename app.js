'use strict';

//TODO: attach card images to generatd values; generate random number and ue that num as index num for object
//Could also just build an array of objects and randomly select an object to pull from
const cards = [
  {value: 2, count: 1, suit: 'clubs', imagePath:"images/playing-cards/2_of_clubs.png"},
  {value: 2, count: 1, suit: 'diamonds', imagePath: },
  {value: 2, count: 1, suit: 'hearts', imagePath: },
  {value: 2, count: 1, suit: 'spades', imagePath: },
  {value: 3, count: 1, suit: 'clubs', imagePath: },
  {value: 3, count: 1, suit: 'diamonds', imagePath: },
  {value: 3, count: 1, suit: 'hearts', imagePath: },
  {value: 3, count: 1, suit: 'spades', imagePath: },
  {value: 4, count: 1, suit: 'clubs', imagePath: },
  {value: 4, count: 1, suit: 'diamonds', imagePath: },
  {value: 4, count: 1, suit: 'hearts', imagePath: },
  {value: 4, count: 1, suit: 'spades', imagePath: },
  {value: 5, count: 1, suit: 'clubs', imagePath: },
  {value: 5, count: 1, suit: 'diamonds', imagePath: },
  {value: 5, count: 1, suit: 'hearts', imagePath: },
  {value: 5, count: 1, suit: 'spades', imagePath: },
  {value: 6, count: 1, suit: 'clubs', imagePath: },
  {value: 6, count: 1, suit: 'diamonds', imagePath: },
  {value: 6, count: 1, suit: 'hearts', imagePath: },
  {value: 6, count: 1, suit: 'spades', imagePath: },
  {value: 7, count: 0, suit: 'clubs', imagePath: },
  {value: 7, count: 0, suit: 'diamonds', imagePath: },
  {value: 7, count: 0, suit: 'hearts', imagePath: },
  {value: 7, count: 0, suit: 'spades', imagePath: },
  {value: 8, count: 0, suit: 'clubs', imagePath: },
  {value: 8, count: 0, suit: 'diamonds', imagePath: },
  {value: 8, count: 0, suit: 'hearts', imagePath: },
  {value: 8, count: 0, suit: 'spades', imagePath: },
  {value: 9, count: 0, suit: 'clubs', imagePath: },
  {value: 9, count: 0, suit: 'diamonds', imagePath: },
  {value: 9, count: 0, suit: 'hearts', imagePath: },
  {value: 9, count: 0, suit: 'spades', imagePath: },
  {value: 10, count: -1, suit: 'clubs', imagePath: },
  {value: 10, count: -1, suit: 'diamonds', imagePath: },
  {value: 10, count: -1, suit: 'hearts', imagePath: },
  {value: 10, count: -1, suit: 'spades', imagePath: },
  {value: 10, count: -1, suit: 'clubs', imagePath: },
  {value: 10, count: -1, suit: 'diamonds', imagePath: },
  {value: 10, count: -1, suit: 'hearts', imagePath: },
  {value: 10, count: -1, suit: 'spades', imagePath: },
  {value: 10, count: -1, suit: 'clubs', imagePath: },
  {value: 10, count: -1, suit: 'diamonds', imagePath: },
  {value: 10, count: -1, suit: 'hearts', imagePath: },
  {value: 10, count: -1, suit: 'spades', imagePath: },
  {value: 10, count: -1, suit: 'clubs', imagePath: },
  {value: 10, count: -1, suit: 'diamonds', imagePath: },
  {value: 10, count: -1, suit: 'hearts', imagePath: },
  {value: 10, count: -1, suit: 'spades', imagePath: },
  {value: [1, 11], count: -1, suit: 'clubs', imagePath: },
  {value: [1, 11], count: -1, suit: 'diamonds', imagePath: },
  {value: [1, 11], count: -1, suit: 'hearts', imagePath: },
  {value: [1, 11], count: -1, suit: 'spades', imagePath: },
  {value: null, count: null, suit: null, imagePath: }
];

//TODO: If an "A" is dealt, give player option to use the Ace as a 1 0r 11 value.

//FUNCTIONS
//TODO: Deal new hand - 2 cards to player, one to dealer <==GAME CONSTRUCTOR
//TODO: hit method: insert cards into player and dealer <li>
//TODO: surrender method
//TODO: stand method
//TODO: add method: Function to add the values of cards, to be used to generate values for inital player cards, new value after hit, and dealer cardsonce both are revealed.

//EVENT LISTENERS
//TODO: on click of new hand button, randomly generate values for 2 player cards and 1 dealer upcard.
//TODO: on click of hit button, generate a new card/value and add it to the total score
//TODO: on click of stand button, reveal(generate) dealer second card. Series of messages telling user where the dealer is at and what action dealer needs to take

//END GAME
//TODO: BUSTO! ==> function to alert player or dealer bust
//TODO: Who won message, instructions for how to start a new hand. Should the message be different depending on whether player or dealer won?
