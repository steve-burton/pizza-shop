var Pizza = function(pizzaSize, toppings, cost) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.cost = 20;
}
// Pizza.prototype.size = function(){
//   if(this.pizzaSize = "Large") {
//     return this.price = 20;
//   } else if(this.pizzaSize = "Medium") {
//     return this.price = 17;
//   } else if(this.pizzaSize = "Small") {
//     return this.price = 13;
//   }
// }
Pizza.prototype.findPrice = function(pizzaSize, toppings, cost) {
  if(this.pizzaSize === "Large") {
    return this.cost;
  } else if(this.pizzaSize === "Medium") {
    return 17;
  } else if(this.pizzaSize === "Small") {
    return 13;
  // } else {
  //   return this.price;
  }
}

// User Interface
$(document).ready(function(){

  $("form.pizza").submit(function(event){
    event.preventDefault();
    var newPizza = new Pizza();
    var pizzaPrice = newPizza.findPrice();
    var pizzaSize = $("div#size").val();
    //var toppings = $("input#time").val();
    $("span").text("");
    $("span#total-price").text(pizzaPrice);
    // document.getElementById("span#total-price").reset("");
  });
});
