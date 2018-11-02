//backend

function Pizza (size, cheese, topping) {
  this.size = size,
  this.cheese = cheese,
  this.topping = topping,
  this.price = 5
}

Pizza.prototype.findPrice = function(){
  if (this.size === "small"){
    this.price = 5
  } else if (this.size === "medium"){
    this.price = 7.5
  } else if (this.size === "large"){
    this.price = 10
  }
}

//frontend
$(document).ready(function(){
  $("#pizza-maker").submit(function(event){
    event.preventDefault();
    var selectedSize = $("#size").val();
    var selectedCheese =$("#cheese").val();
    var selectedTopping = $("#topping").val();
    newPizza = new Pizza (selectedSize, selectedCheese, selectedTopping);
    newPizza.findPrice();
    console.log(newPizza)
    $("#result").text();
  })
})
