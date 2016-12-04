'use strict'

DeckOfCards.all = [];

//Object constructor
function DeckOfCards( opts ){
  for( var keys in opts ){
    this[ keys ] = opts[ keys ];
  }
}

//Method:loadAll
//loads a deck of cards from data
DeckOfCards.loadAll = function( data ) {
  data.forEach( function( element ) {
    DeckOfCards.all.push(new DeckOfCards( element ));
  });
};

//Method: fetchAll
//gets json cards data & pass it to the load function, makes a fresh deck of cards
DeckOfCards.fetchAll = function() {
  $.ajax( 'data/cards.json', {
    method: 'GET',
    success: successHandler,
    error: errorHandler
  });
  function successHandler( data ) {
    DeckOfCards.loadAll( data );
  };
  function errorHandler( error ){
    console.log( 'Error', error );
  };
};
