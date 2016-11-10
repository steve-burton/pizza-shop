//## Business Logic ##//
var Pizza = function(pizzaSize, toppings, cost) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.findPrice = function() {
  if(this.pizzaSize === "large") {
    return this.cost = 20;
  } else if(this.pizzaSize === "medium") {
    return this.cost = 17;
  } else if(this.pizzaSize === "small") {
    return this.cost = 13;
  }
}

Pizza.prototype.findToppings = function() {
  if(this.toppings === 0) {
    return 0;
  } else if (this.toppings === 1) {
    return 1;
  } else if (this.toppings === 2) {
    return 2;
  } else if (this.toppings === 3) {
    return 3;
  } else if (this.toppings === 4) {
    return 4;
  } else if (this.toppings === 5) {
    return 5;
  } else if (this.toppings === 6) {
    return 6;
  } else {
    return 7;
  }
}


//## User Interface ##//
$(document).ready(function(){
  $("form.pizza").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#sizeSelect").val();
    var toppings = $("[type='checkbox']input:checked").length;
    var newPizza = new Pizza(pizzaSize, toppings, cost);
    var cost = newPizza.findPrice();
    var toppingsCost = newPizza.findToppings();
    $("span#total-price").text((cost) + (toppingsCost));
    $("h3").show();
  });
});
