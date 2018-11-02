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
    this.price += 2.50
  } else if (this.size === "large"){
    this.price += 5
  }
  if (this.cheese === "no"){
    this.price -= 1
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
    $("#result").text("The pizza you are ordering is a " + newPizza.size + " pizza. You have selected: '" + newPizza.cheese + "' for cheese, your pizza will also include the topping: '" + newPizza.topping + "' the price of your pizza when you pick it up will be: $" + newPizza.price);
  })
})
