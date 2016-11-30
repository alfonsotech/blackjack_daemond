'use strict'

DeckOfCards.all = [];

//Object constructor
function DeckOfCards(opts){
  for(var keys in opts){
    this[keys] = opts[keys];
  }
}

//Q: when do i put methods on prototype versus on constructed object?

//Method to load a deck of cards from data
DeckOfCards.loadAll = function(data) {
  data.forEach(function(element) {
    DeckOfCards.all.push(new DeckOfCards(element));
  });
  // console.log('loaded deck of cards:', DeckOfCards.all);
};

//Method to get json cards data and pass it to the load function to make a fresh deck of cards
DeckOfCards.fetchAll = function() {
  $.ajax('data/cards.json', {
    method: 'GET',
    success: successHandler,
    error: errorHandler
  });
  function successHandler(data) {
    DeckOfCards.loadAll(data);

    // cardsView.toHtml(); TODO:add this once func is written
  };
  function errorHandler(error){
    console.log('Error', error);
  };
};


//Method to display cards to HTML
// DeckOfCards.prototype.toHtml = function(){
//
// } //ES6 confused about where i use semi-colons and about if i can use var with constructors
