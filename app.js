'use strict';

//document ready function



// const usableCards = [];
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
