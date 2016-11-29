'use strict';

//TODO: attach card images to generatd values; generate random number and ue that num as index num for object
//Could also just build an array of objects and randomly select an object to pull from
const cards = [
  {name: 'two', value: 2, count: 1, suit: 'clubs', imagePath:'images/playing-cards/2_of_clubs.png'},
  {name: 'two', value: 2, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/2_of_diamonds.png'},
  {name: 'two', value: 2, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/2_of_hearts.png'},
  {name: 'two', value: 2, count: 1, suit: 'spades', imagePath: 'images/playing-cards/2_of_spades.png'},
  {name: 'three', value: 3, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/3_of_clubs.png'},
  {name: 'three', value: 3, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/3_of_diamonds.png'},
  {name: 'three', value: 3, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/3_of_hearts.png'},
  {name: 'three', value: 3, count: 1, suit: 'spades', imagePath: 'images/playing-cards/3_of_spades.png'},
  {name: 'four', value: 4, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/4_of_clubs.png'},
  {name: 'four', value: 4, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/4_of_diamonds.png'},
  {name: 'four', value: 4, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/4_of_hearts.png'},
  {name: 'four', value: 4, count: 1, suit: 'spades', imagePath: 'images/playing-cards/4_of_spades.png'},
  {name: 'five', value: 5, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/5_of_clubs.png'},
  {name: 'five', value: 5, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/5_of_diamonds.png'},
  {name: 'five', value: 5, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/5_of_hearts.png'},
  {name: 'five', value: 5, count: 1, suit: 'spades', imagePath: 'images/playing-cards/5_of_spades.png'},
  {name: 'six', value: 6, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/6_of_clubs.png'},
  {name: 'six', value: 6, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/6_of_diamonds.png'},
  {name: 'six', value: 6, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/6_of_hearts.png'},
  {name: 'six', value: 6, count: 1, suit: 'spades', imagePath: 'images/playing-cards/6_of_spades.png'},
  {name: 'seven', value: 7, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/7_of_clubs.png'},
  {name: 'seven', value: 7, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/7_of_diamonds.png'},
  {name: 'seven', value: 7, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/7_of_hearts.png'},
  {name: 'seven', value: 7, count: 0, suit: 'spades', imagePath: 'images/playing-cards/7_of_spades.png'},
  {name: 'eight', value: 8, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/8_of_clubs.png'},
  {name: 'eight', value: 8, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/8_of_diamonds.png'},
  {name: 'eight', value: 8, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/8_of_hearts.png'},
  {name: 'eight', value: 8, count: 0, suit: 'spades', imagePath: 'images/playing-cards/8_of_spades.png'},
  {name: 'nine', value: 9, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/9_of_clubs.png'},
  {name: 'nine', value: 9, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/9_of_diamonds.png'},
  {name: 'nine', value: 9, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/9_of_hearts.png'},
  {name: 'nine', value: 9, count: 0, suit: 'spades', imagePath: 'images/playing-cards/9_of_spades.png'},
  {name: 'ten', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/10_of_clubs.png'},
  {name: 'ten', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/10_of_diamonds.png'},
  {name: 'ten', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/10_of_hearts.png'},
  {name: 'ten', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/10_of_spades.png'},
  {name: 'jack', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/jack_of_clubs.png'},
  {name: 'jack', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/jack_of_diamonds.png'},
  {name: 'jack', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/jack_of_hearts.png'},
  {name: 'jack', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/jack_of_spades.png'},
  {name: 'queen', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/queen_of_clubs.png'},
  {name: 'queen', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/queen_of_diamonds.png'},
  {name: 'queen', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/queen_of_hearts.png'},
  {name: 'queen', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/queen_of_spades.png'},
  {name: 'king', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/king_of_clubs.png'},
  {name: 'king', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/king_of_diamonds.png'},
  {name: 'king', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/king_of_hearts.png'},
  {name: 'king', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/king_of_spades.png'},
  {name: 'ace', value: [1, 11], count: -1, suit: 'clubs', imagePath: 'images/playing-cards/ace_of_clubs.png'},
  {name: 'ace', value: [1, 11], count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/ace_of_diamonds.png'},
  {name: 'ace', value: [1, 11], count: -1, suit: 'hearts', imagePath: 'images/playing-cards/ace_of_hearts.png'},
  {name: 'ace', value: [1, 11], count: -1, suit: 'spades', imagePath: 'images/playing-cards/ace_of_spades.png'},
  {name: 'card-back', value: null, count: null, suit: null, imagePath: 'images/playing-cards/card-back.png'}
];


//TODO: Alert if a natural blackjack is dealt

//FUNCTIONS
//TODO: Deal new hand - 2 cards to player, one to dealer <==GAME CONSTRUCTOR
const drawCard = function(){
  if(cardIndex !== 'ace') {
    $('.player-cards').html(cardIndex.imagePath);
  } else {
    //TODO: If an "A" is dealt, give player option to use the Ace as a 1 0r 11 value.
    alert('Congratulations, you\'ve been dealt an Ace!!! Would you like to value your A as a "1" or "11"?');
  }
}

const randomizer = function() {
  const indexNum = Math.floor((Math.random() * 52) + 1);
  console.log(indexNum);
  const cardIndex = cards[indexNum];
  console.log(cardIndex);
  return cardIndex;
}

//Event Listeners
$('#new-hand').on('click', function() {
  console.log('new hand requested');
  randomizer();
  drawCard();
});


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
