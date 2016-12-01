'use strict'

let cardsView = {};
let playerHandValue = 0;
let dealerHandValue = 0;
//cardsView.toHtml();

//Shuffle up a new deck/shoe and deal out first hand
cardsView.newGame = function() {
  //on load or on clilck new game button, suffle up and deal
  playerHandValue = 0;
  dealerHandValue = 0;
  $('#hit').removeAttr('disabled');
  $('#stand').removeAttr('disabled');
  $('#surrender').removeAttr('disabled');
  DeckOfCards.fetchAll();
  cardsView.newHand();
}

//Hit
cardsView.hitPlayer = function() {
  const indexNum = Math.floor((Math.random() * 52) + 1);
  console.log(DeckOfCards.all);
  const cardIndex = DeckOfCards.all[indexNum];
  console.log('cardIndex.value', cardIndex.value);
  playerHandValue += cardIndex.value;
  console.log('playerHandValue', playerHandValue);
  DeckOfCards.all.splice(indexNum, 1);
  return cardIndex;
}
cardsView.hitDealer = function() {
  const indexNum = Math.floor((Math.random() * 52) + 1);
  const cardIndex = DeckOfCards.all[indexNum];
  console.log('cardIndex.value', cardIndex.value);
  dealerHandValue += cardIndex.value;
  console.log('playerHandValue', playerHandValue);
  DeckOfCards.all.splice(indexNum, 1);
  return cardIndex;
}

//Deal a new hand from card deck in use
cardsView.newHand = function(){
  //draw three cards
  $('#hit').removeAttr('disabled');
  $('#stand').removeAttr('disabled');
  $('#surrender').removeAttr('disabled');
  let playerCard1 = cardsView.hitPlayer();
  let playerCard2 = cardsView.hitPlayer();
  let dealerCard1 = cardsView.hitDealer();
  drawPlayerCards(playerCard1, playerCard2);
  drawDealerCards(dealerCard1);

  //Deal 2 up cards to player
  function drawPlayerCards(playerCard1, playerCard2){
    $('.player-cards').children().remove();
    $('.player-cards').append('<img src="' + playerCard1.imagePath
    + '" alt="' + playerCard1.alt + '">');
    $('.player-cards').append('<img src="' + playerCard2.imagePath
    + '" alt="' + playerCard2.alt + '">');
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
  if( playerHandValue === 21 ) {
    cardsView.alertBlackjack();
  } else if (playerCard1.name === 'ace' || playerCard2.name === 'ace') {
    cardsView.alertAce();
  }
}
//Alert if a natural blackjack is dealt
cardsView.alertBlackjack = function() {
  $('.chat').append('<h4>Congratulations, you\'ve been dealt Blackjack!!! I would stand if I were you. ツ</h4>');
}

//Alert i an A is dealt
cardsView.alertAce = function() {
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

//END GAME
//TODO: BUSTO! ==> function to alert player or dealer bust
cardsView.bust = function() {
  if(playerHandValue > 21){
    $('#hit').attr('disabled', 'true');
  }
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
  DeckOfCards.fetchAll();
  console.log("farts");
  //Start New Game
  $('#new-game').on('click', function() {
    cardsView.newGame();

  });
  //TODO: on click of hit me button, generate a new card/value and add it to the total score
  $('#hit').on('click', function() {
    console.log("Hit was pressed")
    let newCard = cardsView.hitPlayer();
    cardsView.drawToPlayer(newCard);
    cardsView.bust();
    console.log("Finished Hit Actions")
    //Added Card Face Values
    // let cardValue = cardsView.addValues();
    //Current Hi-Lo Count
    // let count = cardsView.count();
    // $('#chat').append('<h4>The current Count is' + count + '.</h4>');
  });

  //TODO: on click of stand button, reveal(generate) dealer second card. Series of messages telling user where the dealer is at and what action dealer needs to take
  $('#stand').on('click', function(){
    $('#chat').append('<h4>You have chosen to stand on ' + playerHandValue + '.</h4>');
    $('#stand').attr('disabled', 'true');
    cardsView.drawToDealer();
  });
  //TODO: surrender method
  $('#surrender').on('click', function(){
    $('#chat').text('<h4>You have surrendered. Dealer wins!</h4>');
    $('#surrender').attr('disabled', 'true');
  });

});//document ready close
