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
  if (this.topping === "pineapple" || this.topping === "spinach" || this.topping === "olives" || this.topping === "onions" || this.topping === "peppers" || this.topping === "tomatoes" || this.topping === "jalapeno" || this.topping === "extra cheese"){
    this.price += .50
  } else if (this.topping === "pepperoni" || this.topping === "sausage" || this.topping === "bacon" || this.topping === "ham" || this.topping === "beef"){
    this.price += 1
  } else if (this.topping === "shrimp"){
    this.price += 2
  } else if (this.topping === "none"){
    this.price -= .50
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
    $("#result-well").show();
    if ((selectedSize === "small" || selectedSize === "medium" || selectedSize === "large") && (selectedCheese === "yes" || selectedCheese === "no") && (selectedTopping === "pepperoni" || selectedTopping === "pineapple" || selectedTopping === "sausage" || selectedTopping === "bacon" || selectedTopping === "spinach" || selectedTopping === "olives" || selectedTopping === "ham" || selectedTopping === "onions" || selectedTopping === "peppers" || selectedTopping === "beef" || selectedTopping === "tomatoes" || selectedTopping === "jalapeno" || selectedTopping === "shrimp" || selectedTopping === "extra cheese" || selectedTopping === "none")){
      $("#result").text("The pizza you are ordering is a " + newPizza.size + " pizza. You have selected: '" + newPizza.cheese + "' for cheese, your pizza will also include the topping: '" + newPizza.topping + "' the price of your pizza when you pick it up will be: $" + newPizza.price)
    } else {
      $("#result").text("ERROR: PLEASE ENTER A VALID SIZE: (small/medium/large) AND/OR VALID ANSWER: (yes/no) AND/OR THAT THE TOPPING IS PRINTED AS IT IS IN THE 'TOPPINGS LIST'")
    }
  })
})
