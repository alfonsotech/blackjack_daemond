'use strict'
$( document ).ready( function() {
DeckOfCards.fetchAll();
let cardsView = {};
let playerHandValue = 0;
let dealerHandValue = 0;
let playerCards = [];
let dealerCards = [];

//Shuffle up a new deck/shoe and deal out first hand
cardsView.newGame = function() {
  //on load or on clilck new game button, suffle up and deal
  $( '#hit' ).removeAttr( 'disabled' );
  $( '#stand' ).removeAttr( 'disabled' );
  $( '#surrender' ).removeAttr( 'disabled' );
  cardsView.newHand();
}

//Hit
cardsView.hit = function() {
  const indexNum = Math.floor( ( Math.random() * DeckOfCards.all.length) );
  const cardIndex = DeckOfCards.all[ indexNum ];
  DeckOfCards.all.splice( indexNum, 1 );

  cardsView.checkForBust();
  return cardIndex;
}

cardsView.render = function( cards ) {
  if( cards == dealerCards ) {
    $( '.dealer-cards' ).empty();
    console.log( "dealerCards", dealerCards );
    for( let card of dealerCards ) {
      $( '.dealer-cards' ).append( '<li><img src="' + card.imagePath
      + '" alt="' + card.alt + '"></li>' );
    }
  } else {
    $( '.player-cards' ).empty();
    for( let card of playerCards ) {
      $( '.player-cards' ).append( '<li><img src="' + card.imagePath
      + '" alt="' + card.alt + '"></li>' );
    }
  }
}

//Deal a new hand from card deck in use
cardsView.newHand = function() {
  playerHandValue = 0;
  dealerHandValue = 0;
  playerCards = [];
  dealerCards = [];
  //draw three cards
  $( '#hit' ).removeAttr( 'disabled' );
  $( '#stand' ).removeAttr( 'disabled' );
  $( '#surrender' ).removeAttr( 'disabled' );
  let playerCard1 = cardsView.hit();
  playerCards.push( playerCard1 );
  let playerCard2 = cardsView.hit();
  playerCards.push( playerCard2 );
  let dealerCard1 = cardsView.hit();
  dealerCards.push( dealerCard1 );
  console.log( dealerCards );
  console.log( playerCards );
  cardsView.gameStart();
}

cardsView.gameStart = function() {

  // repopulate board with players new cards
  cardsView.render( playerCards );
  cardsView.render( dealerCards );
  // add back card image to dealer hand
  $( '.dealer-cards' ).append( '<li><img src="images/card-back.png" alt="card-back"></li>' );
  cardsView.checkForBlackjack( playerCards );
}

cardsView.checkForBlackjack = function( cards ) {
  if( cardsView.sumOfcards( cards ) === 21 ){
    if( cards.length === 2 ) {
        $( '.chat' ).prepend( '<h4>WINNER WINNER CHICKEN DINNER! You\'ve been dealt Blackjack!!! ツ</h4>' );
        alert('WINNER WINNER CHICKEN DINNER! You\'ve been dealt Blackjack!!! ツ');
    }
  }
}

cardsView.checkForBust = function( cards ) {
  if( cards == playerCards ) {
    if( cardsView.sumOfcards( playerCards ) > 21 ) {
      $( '#hit' ).attr( 'disabled', 'true' );
      $( '#stand' ).attr( 'disabled', 'true' );
      $( '#surrender' ).attr( 'disabled', 'true' );
      $( '.chat' ).prepend( '<h4>Player, you just busted. House wins.</h4>' );
      $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
      //cardsView.newHand();
    }
  } else if( cards == dealerCards ) {
    if( cardsView.sumOfcards( dealerCards ) > 21 ) {
      $( '#hit' ).attr( 'disabled', 'true' );
      $( '#stand' ).attr( 'disabled', 'true' );
      $( '#surrender' ).attr( 'disabled', 'true' );
      $( '.chat' ).prepend( '<h4>Dealer just busted! You WIIIIINN!</h4>' );
      $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );

      //cardsView.newHand();
    }
  }
  return false;
}

cardsView.sumOfcards = function( cards ) {
  return cards.reduce( function (memo, card) {
    return memo + card.value;
  }, 0);
}

cardsView.shoeSize = function() {
  if( DeckOfCards.all.length < 11 ) {
    DeckOfCards.all = [];
    DeckOfCards.fetchAll();
    cardsView.newGame();
  }
}

cardsView.dealerTurn = function() {
  //Add up dealer cards
  //while dealer cards <17, hit, otherwise stand and log total to chat
  while( cardsView.sumOfcards( dealerCards ) < 17 ) {
    let newCard = cardsView.hit();
    dealerCards.push( newCard );
    console.log( dealerCards );
    cardsView.render( dealerCards );
    cardsView.checkForBlackjack( dealerCards );
  }
  if ( cardsView.checkForBust( dealerCards ) === false ){
    cardsView.compareHands();
  }
}


cardsView.compareHands = function() {
  //count up card values
  playerHandValue = cardsView.sumOfcards( playerCards );
  dealerHandValue = cardsView.sumOfcards( dealerCards );
  if( playerHandValue === dealerHandValue ) {
    $( '.chat' ).prepend( '<h4>It\'s a push. You and the dealer have same hand...</h4>' );
  } else if ( playerHandValue > dealerHandValue) {
    if (playerHandValue > 21 ){
      $( '#hit' ).attr( 'disabled', 'true' );
      $( '#stand' ).attr( 'disabled', 'true' );
      $( '#surrender' ).attr( 'disabled', 'true' );
      $( '.chat' ).prepend( '<h4>Player, you just busted. House wins.</h4>' );
      $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
    } else {
      $( '.chat' ).prepend( '<h4>Dealer\'s hand value is only ' + dealerHandValue +'. Player\'s hand value is ' + playerHandValue + '. Player WINNNS!</h4>' );
    }
  } else if ( dealerHandValue > playerHandValue ) {
    if ( dealerHandValue > 21 ){
      $( '#hit' ).attr( 'disabled', 'true' );
      $( '#stand' ).attr( 'disabled', 'true' );
      $( '#surrender' ).attr( 'disabled', 'true' );
      $( '.chat' ).prepend( '<h4>Dealer just busted. You win!</h4>' );
      $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
    } else {
      $( '.chat' ).prepend( '<h4>Dealer\'s hand value is ' + dealerHandValue +'. Dealer wins. Better luck next time!</h4>' );
    }
  }
  $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
}


//Event Listeners
  //Start New Game
  $( '#new-game' ).on( 'click', function() {
    cardsView.newGame();
  });

  $( '#hit' ).on( 'click', function() {
    //console.log( "Hit was pressed" )
    let newCard = cardsView.hit();
    playerCards.push( newCard );
    cardsView.render( playerCards );
    cardsView.checkForBust( playerCards );
  });

  $( '#stand' ).on( 'click', function(){
    $( '.chat' ).prepend( '<h4>You have chosen to stand on ' + cardsView.sumOfcards(playerCards) + '.</h4>' );
    $( '#stand' ).attr( 'disabled', 'true' );
    $( '#hit' ).attr( 'disabled', 'true' );
    $( '#surrender' ).attr( 'disabled', 'true' );
    cardsView.dealerTurn();
  });


  $( '#surrender' ).on( 'click', function(){
    $( '.chat' ).prepend( '<h4>You have surrendered. Dealer wins!</h4>' );
    $( '#stand' ).attr( 'disabled', 'true' );
    $( '#hit' ).attr( 'disabled', 'true' );
    $( '#surrender' ).attr( 'disabled', 'true' );
    $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
  });

});//document ready close
