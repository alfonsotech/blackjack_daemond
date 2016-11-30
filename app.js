'use strict';

//document ready function

//TODO: attach card images to generatd values; generate random number and ue that num as index num for object
//Could also just build an array of objects and randomly select an object to pull from
const cards = [
  { id:'01', name: 'two', value: 2, count: 1, suit: 'clubs', imagePath:'images/playing-cards/2_of_clubs.png', alt:'two of clubs card'},
  { id:'02', name: 'two', value: 2, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/2_of_diamonds.png', alt:'two of diamonds card'},
  { id:'03', name: 'two', value: 2, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/2_of_hearts.png', alt:'two of hearts card'},
  { id:'04', name: 'two', value: 2, count: 1, suit: 'spades', imagePath: 'images/playing-cards/2_of_spades.png', alt:'two of spades card'},
  { id:'05', name: 'three', value: 3, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/3_of_clubs.png', alt:'three of clubs card'},
  { id:'06', name: 'three', value: 3, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/3_of_diamonds.png', alt:'three of diamonds card'},
  { id:'07', name: 'three', value: 3, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/3_of_hearts.png', alt:'three of hearts card'},
  { id:'08', name: 'three', value: 3, count: 1, suit: 'spades', imagePath: 'images/playing-cards/3_of_spades.png', alt:'three of spades card'},
  { id:'09', name: 'four', value: 4, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/4_of_clubs.png', alt:'four of clubs card'},
  { id:'10', name: 'four', value: 4, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/4_of_diamonds.png', alt:'four of diamonds card'},
  { id:'11', name: 'four', value: 4, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/4_of_hearts.png', alt:'four of hearts card'},
  { id:'12', name: 'four', value: 4, count: 1, suit: 'spades', imagePath: 'images/playing-cards/4_of_spades.png', alt:'four of spades card'},
  { id:'13', name: 'five', value: 5, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/5_of_clubs.png', alt:'five of clubs card'},
  { id:'14', name: 'five', value: 5, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/5_of_diamonds.png', alt:'five of diamonds card'},
  { id:'15', name: 'five', value: 5, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/5_of_hearts.png', alt:'five of hearts card'},
  { id:'16', name: 'five', value: 5, count: 1, suit: 'spades', imagePath: 'images/playing-cards/5_of_spades.png', alt:'five of spades card'},
  { id:'17', name: 'six', value: 6, count: 1, suit: 'clubs', imagePath: 'images/playing-cards/6_of_clubs.png', alt:'six of clubs card'},
  { id:'18', name: 'six', value: 6, count: 1, suit: 'diamonds', imagePath: 'images/playing-cards/6_of_diamonds.png', alt:'six of diamonds card'},
  { id:'19', name: 'six', value: 6, count: 1, suit: 'hearts', imagePath: 'images/playing-cards/6_of_hearts.png', alt:'six of hearts card'},
  { id:'20', name: 'six', value: 6, count: 1, suit: 'spades', imagePath: 'images/playing-cards/6_of_spades.png', alt:'six of spades card'},
  { id:'21', name: 'seven', value: 7, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/7_of_clubs.png', alt:'seven of clubs card'},
  { id:'22', name: 'seven', value: 7, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/7_of_diamonds.png', alt:'seven of diamonds card'},
  { id:'23', name: 'seven', value: 7, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/7_of_hearts.png', alt:'seven of hearts card'},
  { id:'24', name: 'seven', value: 7, count: 0, suit: 'spades', imagePath: 'images/playing-cards/7_of_spades.png', alt:'seven of spades card'},
  { id:'25', name: 'eight', value: 8, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/8_of_clubs.png', alt:'eight of clubs card'},
  { id:'26', name: 'eight', value: 8, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/8_of_diamonds.png', alt:'eight of diamonds card'},
  { id:'27', name: 'eight', value: 8, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/8_of_hearts.png', alt:'eight of hearts card'},
  { id:'28', name: 'eight', value: 8, count: 0, suit: 'spades', imagePath: 'images/playing-cards/8_of_spades.png', alt:'eight of spades card'},
  { id:'29', name: 'nine', value: 9, count: 0, suit: 'clubs', imagePath: 'images/playing-cards/9_of_clubs.png', alt:'nine of clubs card'},
  { id:'30', name: 'nine', value: 9, count: 0, suit: 'diamonds', imagePath: 'images/playing-cards/9_of_diamonds.png', alt:'nine of diamonds card'},
  { id:'31', name: 'nine', value: 9, count: 0, suit: 'hearts', imagePath: 'images/playing-cards/9_of_hearts.png', alt:'nine of hearts card'},
  { id:'32', name: 'nine', value: 9, count: 0, suit: 'spades', imagePath: 'images/playing-cards/9_of_spades.png', alt:'nine of spades card'},
  { id:'33', name: 'ten', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/10_of_clubs.png', alt:'ten of clubs card'},
  { id:'34', name: 'ten', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/10_of_diamonds.png', alt:'ten of diamonds card'},
  { id:'35', name: 'ten', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/10_of_hearts.png', alt:'ten of hearts card'},
  { id:'36', name: 'ten', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/10_of_spades.png', alt:'ten of spades card'},
  { id:'37', name: 'jack', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/jack_of_clubs.png', alt:'jack of clubs card'},
  { id:'38', name: 'jack', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/jack_of_diamonds.png', alt:'jack of diamonds card'},
  { id:'39', name: 'jack', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/jack_of_hearts.png', alt:'jack of hearts card'},
  { id:'40', name: 'jack', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/jack_of_spades.png', alt:'jack of spades card'},
  { id:'41', name: 'queen', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/queen_of_clubs.png', alt:'queen of clubs card'},
  { id:'42', name: 'queen', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/queen_of_diamonds.png', alt:'queen of diamonds card'},
  { id:'43', name: 'queen', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/queen_of_hearts.png', alt:'queen of hearts card'},
  { id:'44', name: 'queen', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/queen_of_spades.png', alt:'queen of spades card'},
  { id:'45', name: 'king', value: 10, count: -1, suit: 'clubs', imagePath: 'images/playing-cards/king_of_clubs.png', alt:'king of clubs card'},
  { id:'46', name: 'king', value: 10, count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/king_of_diamonds.png', alt:'king of diamonds card'},
  { id:'47', name: 'king', value: 10, count: -1, suit: 'hearts', imagePath: 'images/playing-cards/king_of_hearts.png', alt:'king of hearts card'},
  { id:'48', name: 'king', value: 10, count: -1, suit: 'spades', imagePath: 'images/playing-cards/king_of_spades.png', alt:'king of spades card'},
  { id:'49', name: 'ace', value: [1, 11], count: -1, suit: 'clubs', imagePath: 'images/playing-cards/ace_of_clubs.png', alt:'ace of clubs card'},
  { id:'50', name: 'ace', value: [1, 11], count: -1, suit: 'diamonds', imagePath: 'images/playing-cards/ace_of_diamonds.png', alt:'ace of diamonds card'},
  { id:'51', name: 'ace', value: [1, 11], count: -1, suit: 'hearts', imagePath: 'images/playing-cards/ace_of_hearts.png', alt:'ace of hearts card'},
  { id:'52', name: 'ace', value: [1, 11], count: -1, suit: 'spades', imagePath: 'images/playing-cards/ace_of_spades.png', alt:'ace of spades card'}
];

// const usableCards = [];
// for(var i = 0; i<cards.length; i++) {
//   usableCards.push(cards[i].id);
// }
// console.log(usableCards);

//TODO: Alert if a natural blackjack is dealt
function alertOfBlackjack() {
  if( ( (selectedCard.name === 'ace') || (selectedCard2.name === 'ace') ) && (selectedCard2.value === '10')) {
    //TODO: If a natural blackjack is dealt, congratulate player.
    alert('Congratulations, you\'ve been dealt Blackjack!!! I would stand if I were you.');
  }
}

//TODO: Alert i an A is dealt
function alertOfAce() {
  if(selectedCard.name || selectedCard2.name === 'ace') {
    //TODO: If an "A" is dealt, give player option to use the Ace as a 1 0r 11 value.
    alert('Congratulations, you\'ve been dealt an Ace!!! Would you like to value your A as a "1" or "11"?');
  }
}

//TODO: Allow user to split their cards and hit
//TODO: Allow user to double own on two cards

//FUNCTIONS
//TODO: Deal new hand - 2 cards to player
const drawPlayerCards = function(selectedCard, selectedCard2){
  $('.player-cards').children().remove();
  $('.player-cards').append('<img src="' + selectedCard.imagePath
  + '" alt="' + selectedCard.alt + '">');
  console.log('url1','<img src="' + selectedCard.imagePath
  + '" alt="' + selectedCard.alt + '">');
  $('.player-cards').append('<img src="' + selectedCard2.imagePath
  + '" alt="' + selectedCard2.alt + '">');
}
//TODO: Deal new hand - one up card to dealer, one down card
const drawDealerCards = function(dealerCard1) {
  $('.dealer-cards').children().remove();
  $('.dealer-cards').append('<img src="' + dealerCard1.imagePath
  + '" alt="' + dealerCard1.alt + '">');
  $('.dealer-cards').append('<img src="images/card-back.png" alt="card-back">');
}
const revealDealerCard2 = function(dealerCard2) {
  //select second child of dealer-cards li and replace it with dealerCard2
}

const randomizer = function() {
  const indexNum = Math.floor((Math.random() * 52) + 1);
  const cardIndex = cards[indexNum];
  // console.log('cardIndex', cardIndex);
  return cardIndex;
}

//Event Listeners
$('#new-hand').on('click', function() {
    let selectedCard = randomizer();
    let selectedCard2 = randomizer();
    let dealerCard1 = randomizer();
    let dealerCard2 = randomizer();
    drawPlayerCards(selectedCard, selectedCard2);
    drawDealerCards(dealerCard1);
    revealDealerCard2(dealerCard2);
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
