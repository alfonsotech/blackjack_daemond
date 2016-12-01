'use strict'

let cardsView = {};
let playerHand = [];
let dealerHand = [];
//cardsView.toHtml();

//Shuffle up a new deck/shoe and deal out first hand
cardsView.newGame = function() {
  DeckOfCards.fetchAll();
  playerHand = [];
  dealerHand = [];
  //on load or on clilck new game button, suffle up and deal
  cardsView.newHand();
}

var dealCard = function(){
  const indexNum = Math.floor((Math.random() * DeckOfCards.all.length) + 1);
  const card = DeckOfCards.all[indexNum];
  DeckOfCards.all.splice(indexNum, 1);
  return card
}

//Hit
cardsView.hitPlayer = function() {
  var card = dealCard()
  playerHand.push(card);
  return card;
}
cardsView.hitDealer = function() {
  var card = dealCard()
  dealerHand.push(card);
  return card;
}
//Remove card from deck
// cardsView.removeCard(indexNum) {
//
// }
//Deal a new hand from card deck in use
cardsView.newHand = function(){
      //draw three cards
      let playerCard1 = cardsView.hit();
      let playerCard2 = cardsView.hit();
      let dealerCard1 = cardsView.hit();
      drawPlayerCards(playerCard1, playerCard2);
      drawDealerCards(dealerCard1);

  //Deal 2 up cards to player
  function drawPlayerCards(playerCard1, playerCard2){
      $('.player-cards').children().remove();
      playerHand.forEach(function(card){
        $('.player-cards').append('<img src="' + card.imagePath
        + '" alt="' + card.alt + '">');
      })
      // $('.player-cards').append('<img src="' + playerCard2.imagePath
      // + '" alt="' + playerCard2.alt + '">');
    }
  //Deal one up, one down card to dealer
  function drawDealerCards(dealerCard1) {
    $('.dealer-cards').children().remove();
    $('.dealer-cards').append('<img src="' + dealerCard1.imagePath
    + '" alt="' + dealerCard1.alt + '">');
    $('.dealer-cards').append('<img src="images/card-back.png" alt="card-back">');
  }
  // const revealDealerCard2 = function(dealerCard2) {
  //   //select second child of dealer-cards li and replace it with dealerCard2
  // }
  if( ((playerCard1.name === 'ace') || (playerCard2.name === 'ace')) && ((playerCard2.value === '10') || (playerCard2.value === '10')) ) {
    cardsView.alertOfBlackjack();
  }
  if(playerCard1.name === 'ace' || playerCard2.name === 'ace') {
    cardsView.alertOfAce();
  }
}
//Alert if a natural blackjack is dealt
cardsView.alertOfBlackjack = function() {
  $('.chat').append('<h4>Congratulations, you\'ve been dealt Blackjack!!! I would stand if I were you. ツ</h4>');
}

//Alert i an A is dealt
cardsView.alertOfAce = function() {
    $('.chat').append('<h4>Congratulations, you\'ve been dealt an Ace!!! You can use your Ace as a "1" or "11."</h4>');
  }

//Continue Game
cardsView.drawToPlayer = function(newCard){
  $('.player-cards').append('<img src="' + newCard.imagePath
  + '" alt="' + newCard.alt + '">');
}

cardsView.drawToDealer = function(newCard) {
  //Add up dealer cards
  //if dealer cards <17, hit, otherwise stand and log total to chat
  $('.dealer-cards').append('<img src="' + newCard.imagePath
  + '" alt="' + newCard.alt + '">');
}

//TODO: add method: Function to add the values of cards, to be used to generate values for inital player cards, new value after hit, and dealer cardsonce both are revealed.
cardsView.addValues = function() {
  //count up card values
}
cardsView.count = function() {
  //count up card values
}

var handTotal = function(hand){
  var values = hand.map(function(card){ return card.value })
  return values.reduce(function(a,b){return a+b}, 0)
}

//END GAME
//TODO: BUSTO! ==> function to alert player or dealer bust
cardsView.bust = function() {
  var total = handTotal(playerHand)
  if (total > 21) {
    console.log('into bust function');
    $('#hit').addClass("grey-out").disable(true);
    $('.chat').append('<h4>You\'ve busted - so sad! The house wins.</h4>');
  };

}
//TODO: Who won message, instructions for how to start a new hand. Should the message be different depending on whether player or dealer won?
cardsView.winMessage = function() {
  //count up card values
}
cardsView.lostMessage = function() {
  //count up card values
}
cardsView.surrenderMessage = function() {
  //count up card values
}

//Event Listeners
$( document ).ready(function() {
  //Start New Game
  $('#new-game').on('click', function() {
    cardsView.newGame();
  });
  //TODO: on click of hit me button, generate a new card/value and add it to the total score
  $('#hit').on('click', function() {
    let newCard = cardsView.hit();
    cardsView.drawToPlayer(newCard);
    //Added Card Face Values
    // let cardValue = cardsView.addValues();
    // $('#chat').append('<h4>You are showing' + cardValue + '.</h4>');
    //Current Hi-Lo Count
    // let count = cardsView.count();
    // $('#chat').append('<h4>The current Count is' + count + '.</h4>');
  });

  //TODO: on click of stand button, reveal(generate) dealer second card. Series of messages telling user where the dealer is at and what action dealer needs to take
  $('#stand').on('click', function(){
    $('#chat').append('<h4>You have chosen to stand on ' + count + '.</h4>');
    cardsView.drawToDealer();
  });
  //TODO: surrender method

  //TODO: Allow user to double own on two cards
  cardsView.doubleDown = function() {

  }
  //TODO: Allow user to split their cards and hit
  cardsView.split = function() {

  }


});//document ready close

//Function Calls


// cardsView.newHand();
