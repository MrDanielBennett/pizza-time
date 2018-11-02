//backend
function Pizza (size, cheese, topping) {
  this.size = size,
  this.cheese = cheese,
  this.topping = topping,
  this.price = 5
}

Pizza.prototype.findPrice = function(){
  if (this.size === small){
    this.price = 5
  } else if (this.size === medium){
    this.price = 7.50
  } else if (this.size === large){
    this.price = 10
  }
}

//frontend
$(document).ready(function(){
  $("#").submite(function(event){
    event.preventDefault();
    var selectedSize
    var selectedCheese
    var selectedTopping
    newPizza = new Pizza (selectedSize, selectedCheese, selectedTopping);
    newPizza.findPrice();
    $("#result").text();
  })
})
