'use strict';

//TODO: attach card images to generatd values; generate random number and ue that num as index num for object
//Could also just build an array of objects and randomly select an object to pull from
const cards = [
  {value: 2, count: 1, suit: 'clubs', imagePath:'images/playing-cards/2_of_clubs.png'},
  {value: 2, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/2_of_diamonds.png'},
  {value: 2, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/2_of_hearts.png'},
  {value: 2, count: 1, suit: 'spades', imagePath: 'images/playing-cards/2_of_spades.png'},
  {value: 3, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/3_of_clubs.png'},
  {value: 3, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/3_of_diamonds.png'},
  {value: 3, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/3_of_hearts.png'},
  {value: 3, count: 1, suit: 'spades', imagePath: 'images/playing-cards/3_of_spades.png'},
  {value: 4, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/4_of_clubs.png'},
  {value: 4, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/4_of_diamonds.png'},
  {value: 4, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/4_of_hearts.png'},
  {value: 4, count: 1, suit: 'spades', imagePath: 'images/playing-cards/4_of_spades.png'},
  {value: 5, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/5_of_clubs.png'},
  {value: 5, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/5_of_diamonds.png'},
  {value: 5, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/5_of_hearts.png'},
  {value: 5, count: 1, suit: 'spades', imagePath: 'images/playing-cards/5_of_spades.png'},
  {value: 6, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/6_of_clubs.png'},
  {value: 6, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/6_of_diamonds.png'},
  {value: 6, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/6_of_hearts.png'},
  {value: 6, count: 1, suit: 'spades', imagePath: 'images/playing-cards/6_of_spades.png'},
  {value: 7, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/7_of_clubs.png'},
  {value: 7, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/7_of_diamonds.png'},
  {value: 7, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/7_of_hearts.png'},
  {value: 7, count: 0, suit: 'spades', imagePath: 'images/playing-cards/7_of_spades.png'},
  {value: 8, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/8_of_clubs.png'},
  {value: 8, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/8_of_diamonds.png'},
  {value: 8, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/8_of_hearts.png'},
  {value: 8, count: 0, suit: 'spades', imagePath: 'images/playing-cards/8_of_spades.png'},
  {value: 9, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/9_of_clubs.png'},
  {value: 9, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/9_of_diamonds.png'},
  {value: 9, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/9_of_hearts.png'},
  {value: 9, count: 0, suit: 'spades', imagePath: 'images/playing-cards/9_of_spades.png'},
  {value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/10_of_clubs.png'},
  {value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/10_of_diamonds.png'},
  {value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/10_of_hearts.png'},
  {value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/10_of_spades.png'},
  {value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/jack_of_clubs.png'},
  {value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/jack_of_diamonds.png'},
  {value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/jack_of_hearts.png'},
  {value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/jack_of_spades.png'},
  {value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/queen_of_clubs.png'},
  {value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/queen_of_diamonds.png'},
  {value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/queen_of_hearts.png'},
  {value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/queen_of_spades.png'},
  {value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/king_of_clubs.png'},
  {value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/king_of_diamonds.png'},
  {value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/king_of_hearts.png'},
  {value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/king_of_spades.png'},
  {value: [1, 11], count: -1, suit: 'clubs', imagePath: 'images/playing-cards/ace_of_clubs.png'},
  {value: [1, 11], count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/ace_of_diamonds.png'},
  {value: [1, 11], count: -1, suit: 'hearts', imagePath: 'images/playing-cards/ace_of_hearts.png'},
  {value: [1, 11], count: -1, suit: 'spades', imagePath: 'images/playing-cards/ace_of_spades.png'},
  {value: null, count: null, suit: null, imagePath: 'images/playing-cards/card-back.png'}
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
