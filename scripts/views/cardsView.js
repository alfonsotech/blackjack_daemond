'use strict'
$( document ).ready( function() {
  // setup default game environment/data
  DeckOfCards.fetchAll();
  let cardsView = {};
  let playerHandValue = 0;
  let dealerHandValue = 0;
  let playerCards = [];
  let dealerCards = [];
  let playerWins = 0;
  let dealerWins = 0;

  // newGame():
  // Enables playing buttons.
  // Shuffles up a new deck and deals out a new hand.
  cardsView.newGame = function() {
    $( '#hit' ).removeAttr( 'disabled' );
    $( '#stand' ).removeAttr( 'disabled' );
    $( '#surrender' ).removeAttr( 'disabled' );
    cardsView.updateScores();
    cardsView.newHand();
  }
  // newHand():
  // Resets game and starts a new one.
  // Pushes two cards to Player and one card to Dealer.
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
    cardsView.gameStart();
  }

  // gameStart():
  // Modifies the view( index.html ).
  // Repopulates board with the current cards in play.
  // Checks for natural blackjack on playerCards.
  cardsView.gameStart = function() {
    cardsView.render( playerCards );
    cardsView.render( dealerCards );
    // add back card image to dealer hand
    $( '.dealer-cards' ).append( '<li><img src="images/card-back.png" alt="card-back"></li>' );
    cardsView.checkForBlackjack( playerCards );
    cardsView.checkForBust( playerCards );
  }

  // hit():
  // Randomly indexes into DeckOfCards to choose card.
  // Returns: Chosen card.
  cardsView.hit = function() {
    const indexNum = Math.floor( ( Math.random() * DeckOfCards.all.length) );
    const cardIndex = DeckOfCards.all[ indexNum ];
    DeckOfCards.all.splice( indexNum, 1 );

    return cardIndex;
  }

  // render():
  // Used to clear and rerender playboard when cards are added to a hand.
  cardsView.render = function( cards ) {
    if( cards == dealerCards ) {
      $( '.dealer-cards' ).empty();
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

// updateScores():
// Updates the view on the current score count.
  cardsView.updateScores = function() {
    $( '#player-wins' ).empty();
    $( '#dealer-wins' ).empty();
    $( '#player-wins' ).html(playerWins);
    $( '#dealer-wins' ).html(dealerWins);
  }

  // checkForBlackjack():
  // Calculates if first two cards are an ace and a 10 value card.
  cardsView.checkForBlackjack = function( cards ) {
    if( cardsView.sumOfcards( cards ) === 21 ){
      if( cards.length === 2 ) {
        if( cards = playerCards){
          playerWins++;
        } else {
          dealerWins++;
        }
        $( '#hit' ).attr( 'disabled', 'true' );
        $( '#stand' ).attr( 'disabled', 'true' );
        $( '#surrender' ).attr( 'disabled', 'true' );
        $( '.chat' ).prepend( '<h4>WINNER WINNER CHICKEN DINNER! You\'ve been dealt Blackjack!!! ツ</h4>' );
        cardsView.updateScores();
        $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
      }
    }
  }

  // noAce():
  // Returns: true is face in hand, false otherwise
  cardsView.noAce = function( cards ) {
    let found = true;
    if ( typeof cards != 'undefined' ) {
      for ( let card of cards ){
        if(card.name === "ace" && card.value === 11) {
          cardsView.changeAceVal( card );
          found = false;
        }
      }
    }
    return found;
  }

 // isBust():
 // Returns: true if hand value > 21
  cardsView.isBust = function( cards ) {
    if (cardsView.sumOfcards( cards ) > 21){
      return true;
    } else {
      return false;
    }
  }

 // changeAceVal():
  cardsView.changeAceVal = function( card ){
    if ( card.name === 'ace'){
      card.value = 1;
    }
  }

  // checkForBust():
  // Checks to see if a hands value is over 21.
  // Returns: false if no bust.
  cardsView.checkForBust = function( cards ) {
    if( cards == playerCards ) {
      if( cardsView.isBust( playerCards ) && cardsView.noAce( playerCards ) ) {
        dealerWins++;
        cardsView.updateScores();
        $( '#hit' ).attr( 'disabled', 'true' );
        $( '#stand' ).attr( 'disabled', 'true' );
        $( '#surrender' ).attr( 'disabled', 'true' );
        $( '.chat' ).prepend( '<h4>Player, you just busted. House wins.</h4>' );
        $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
      }
    } else if( cards == dealerCards ) {
      if( cardsView.isBust( dealerCards ) && cardsView.noAce( dealerCards )) {
        cardsView.updateScores();
        $( '#hit' ).attr( 'disabled', 'true' );
        $( '#stand' ).attr( 'disabled', 'true' );
        $( '#surrender' ).attr( 'disabled', 'true' );
        $( '.chat' ).prepend( '<h4>Dealer just busted! You WIIIIINN!</h4>' );
      }
    }
    return false;
  }

  // sumOfcards():
  // Sums up the values of the cards in a hand.
  // Returns: value of a hand.
  cardsView.sumOfcards = function( cards ) {
    return cards.reduce( function (memo, card) {
      return memo + card.value;
    }, 0);
  }

  // dealerTurn():
  // Logic for how the dealer should play the game.
  // Compares hands after final dealer hit.
  cardsView.dealerTurn = function() {
    while( cardsView.sumOfcards( dealerCards ) < 17 ) {
      let newCard = cardsView.hit();
      dealerCards.push( newCard );
      cardsView.checkForBust(dealerCards);
      cardsView.render( dealerCards );
      cardsView.checkForBlackjack( dealerCards );
    }
      cardsView.compareHands();
  }

  // compareHands():
  // Check for tie or a win or bust.
  // TODO: Repetitive code. If possible find a way to condense.
  cardsView.compareHands = function() {
    //count up card values
    playerHandValue = cardsView.sumOfcards( playerCards );
    dealerHandValue = cardsView.sumOfcards( dealerCards );
    if( dealerHandValue === playerHandValue ) {
      $( '.chat' ).prepend( '<h4>It\'s a push. You and the dealer have same hand...</h4>' );
    } else if ( playerHandValue > dealerHandValue) {
      if (cardsView.isBust( playerCards ) && cardsView.noAce( playerCards ) ){
        cardsView.checkForBust( playerCards );
        dealerWins++;
      } else {
        $( '.chat' ).prepend( '<h4>Dealer\'s hand value is only ' + dealerHandValue +'. Player\'s hand value is ' + playerHandValue + '. Player WINNNS!</h4>' );
        playerWins++;
      }
    } else if ( dealerHandValue > playerHandValue ) {
      if ( cardsView.isBust( dealerCards ) && cardsView.noAce( dealerCards )) {
        playerWins++;
      } else {
        $( '.chat' ).prepend( '<h4>Dealer\'s hand value is ' + dealerHandValue +'. Dealer wins. Better luck next time!</h4>' );
        dealerWins++;
      }
    }
    cardsView.updateScores();
    $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
  }

  //---- Event Listeners ----
  $( '#new-game' ).on( 'click', function() {
    cardsView.newGame();
  });

  $( '#hit' ).on( 'click', function() {
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
    dealerWins++;
    cardsView.updateScores();
    $( '.chat' ).prepend( '<h4>→ Click "New Hand" button to keep playing.</h4>' );
  });

}); // ---- document ready close ----
