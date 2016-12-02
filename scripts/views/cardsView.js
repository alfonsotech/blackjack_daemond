'use strict'

let cardsView = {};
let playerHandValue = 0;
let dealerHandValue = 0;
let playerCards = [];
let dealerCards = [];
//cardsView.toHtml();

//Shuffle up a new deck/shoe and deal out first hand
cardsView.newGame = function() {
  //on load or on clilck new game button, suffle up and deal
  playerHandValue = 0;
  dealerHandValue = 0;
  playerCards = [];
  dealerCards = [];
  $('#hit').removeAttr('disabled');
  $('#stand').removeAttr('disabled');
  $('#surrender').removeAttr('disabled');
  DeckOfCards.fetchAll();
  cardsView.newHand();
}

//Hit
cardsView.hit = function() {
  const indexNum = Math.floor((Math.random() * 52) + 1);
  const cardIndex = DeckOfCards.all[indexNum];
  DeckOfCards.all.splice(indexNum, 1);
  return cardIndex;
}

cardsView.render = function( cards ) {
  if( cards == dealerCards ) {
    for( let card in dealerCards ) {
      $('.dealer-cards').empty('').html('<li><img src="' + card.imagePath
      + '" alt="' + card.alt + '"></li>');
    }
  } else {
    for( let card in playerCards ) {
      $('.player-cards').empty('').html('<li><img src="' + card.imagePath
      + '" alt="' + card.alt + '"></li>');
    }
  }

}

//Deal a new hand from card deck in use
cardsView.newHand = function() {
  //draw three cards
  $('#hit').removeAttr('disabled');
  $('#stand').removeAttr('disabled');
  $('#surrender').removeAttr('disabled');
  let playerCard1 = cardsView.hit();
  playerCards.push(playerCard1);
  let playerCard2 = cardsView.hit();
  playerCards.push(playerCard2);
  let dealerCard1 = cardsView.hit();
  dealerCards.push(dealerCard1);
  console.log(dealerCards);
  console.log(playerCards);
  // drawPlayerCards(playerCard1, playerCard2);
  // drawDealerCards(dealerCard1);
  cardsView.gameStart();
}

cardsView.gameStart = function() {
  $('.player-cards').empty();
  $('.dealer-cards').empty();
  // repopulate board with players new cards
  cardsView.render( playerCards );
  cardsView.render( dealerCards );
  // add back card image to dealer hand
  $('.dealer-cards').append('<li><img src="images/card-back.png" alt="card-back"></li>');
  if ( cardsView.checkForBlackjack( playerCards ) === "blackjack" ) {
    cardsView.alertBlackjack();
  };
}

cardsView.checkForBlackjack = function( cards ) {
  if( cardsView.sumOfcards( cards ) === 21 ){
    if( cards.length === 2 ) {
      return "blackjack";
    } else if( cards.length > 2 ) {
      return "twentyone";
    }
  } else {
    return "no";
  }
}

cardsView.sumOfcards = function( cards ) {
  cards.reduce( function (memo, card) {
    return memo + card.value;
  }, 0);
}
//Alert if a natural blackjack is dealt
cardsView.alertBlackjack = function() {
  $('.chat').append('<h4>Congratulations, you\'ve been dealt Blackjack!!! I would stand if I were you. ツ</h4>');
}

//Alert i an A is dealt
cardsView.alertAce = function() {
    $('.chat').append('<h4>Congratulations, you\'ve been dealt an Ace!!! You can use your Ace as a "1" or "11."</h4>');
  }


cardsView.drawToDealer = function(newCard) {
  cardsView.render();
  //Add up dealer cards
  //while dealer cards <17, hit, otherwise stand and log total to chat
  while(dealerHandValue < 17) {
    let newCard = cardsView.hit();
    dealerCards.push(newCard);
    console.log(dealerCards);
    $('.dealer-cards').append('<li><img src="' + newCard.imagePath + '" alt="' + newCard.alt + '"></li>');
    dealerHandValue = dealerCards.reduce(function(a, b) {
      return a + b.value;
    }, 0);
  }
  // if(dealerHandValue > 21) {
  //
  // }
  //message
  // cardsView.newHand(); /// untill shoe is low on cards
  cardsView.compareHands();
  // setTimeout(cardsView.newHand(), 8000);
}
cardsView.dealerBustCheck = function() {
  if (dealerHandValue > 21){
    $('.chat').append('<h4>Dealer went busto. Player WINNNNNS!</h4>');
    cardsView.newHand();
  }
}
//TODO: add method: Function to add the values of cards, to be used to generate values for inital player cards, new value after hit, and dealer cardsonce both are revealed.
cardsView.compareHands = function() {
  //count up card values
  if(dealerHandValue > 21) {
    //bust message
        $('.chat').append('<h4>Dealer just busted. Player WINS!</h4>');
  } else if(playerHandValue > 21)  {
    $('.chat').append('<h4>Player, you just busted. House wins.</h4>');
  } else if (dealerHandValue > playerHandValue) {
    //dealer wins
    $('.chat').append('<h4>Dealer\'s hand value is ' + dealerHandValue +'. Dealer wins. Better luck next time!</h4>');
  } else //player wins
      $('.chat').append('<h4>Dealer\'s hand value is only ' + dealerHandValue +'. Player\'s hand value is ' + playerHandValue + '. Player WINNNS!</h4>');
}
//$('.chat').append('<h4></h4>');
//END GAME
//TODO: BUSTO! ==> function to alert player or dealer bust
cardsView.bust = function() {

  playerHandValue = playerCards.reduce(function(a, b) {
    return a + b.value;
  }, 0);
  if(playerHandValue > 21){
    $('#hit').attr('disabled', 'true');
    $('#stand').attr('disabled', 'true');
    $('#surrender').attr('disabled', 'true');
    $('.chat').append('<h4>Player, you just busted. House wins.</h4>');
    cardsView.newGame();
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
    let newCard = cardsView.hit();
    playerCards.push(newCard);
    cardsView.drawToPlayer(newCard);
    cardsView.bust();
    //Added Card Face Values
    // let cardValue = cardsView.addValues();
    //Current Hi-Lo Count
    // let count = cardsView.count();
    // $('.chat').append('<h4>The current Count is' + count + '.</h4>');
  });

  //TODO: on click of stand button, reveal(generate) dealer second card. Series of messages telling user where the dealer is at and what action dealer needs to take
  $('#stand').on('click', function(){
    $('.chat').append('<h4>You have chosen to stand on ' + playerHandValue + '.</h4>');
    $('#stand').attr('disabled', 'true');
    $('#hit').attr('disabled', 'true');
    $('#surrender').attr('disabled', 'true');
    cardsView.drawToDealer();

  });

  //dealerCards.push(cardsView.hit());
  //console.log('dealerCards', dealerCards);
  //TODO: surrender method
  $('#surrender').on('click', function(){
    $('.chat').text('<h4>You have surrendered. Dealer wins!</h4>');
    $('#surrender').attr('disabled', 'true');
    cardsView.drawToDealer();
    // cardsView.newGame();
  });

});//document ready close
