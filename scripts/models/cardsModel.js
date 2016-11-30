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
}
console.log(DeckOfCards);
//Method to display cards to HTML
// DeckOfCards.prototype.toHtml = function(){
//
// } //ES6 confused about where i use semi-colons and about if i can use var with constructors

//Function Calls
DeckOfCards.loadAll();
