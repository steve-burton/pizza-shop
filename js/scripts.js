var Pizza = function(pizzaSize, toppings, cost) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.cost = 20;
}

Pizza.prototype.findPrice = function() {
  if(this.pizzaSize === "large") {
    return this.cost;
  } else if(this.pizzaSize === "medium") {
    return this.cost - 3;
  } else if(this.pizzaSize === "small") {
    return 13;
  }
}

Pizza.prototype.findToppings = function() {
  if(this.toppings === 1) {
    return 1.5;
  } else if (this.toppings === 2) {
    return 3;
  } else if (this.toppings === 3) {
    return 4.5;
  } else {
    return 6
  }
}


// User Interface
$(document).ready(function(){
  $("form.pizza").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#sizeSelect").val();
    var toppings = $("[type='checkbox']:checked").length;
    var newPizza = new Pizza(pizzaSize, toppings, cost);
    var cost = newPizza.findPrice();
    //$("span").text("");
    $("span#total-price").text((newPizza.findPrice()) + (newPizza.findToppings()));
    // document.getElementById("span#total-price").reset("");
  });
});
