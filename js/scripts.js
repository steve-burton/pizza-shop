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
Pizza.prototype.findPrice = function() {
  if(this.pizzaSize === "large") {
    return this.cost;
  } else if(this.pizzaSize === "medium") {
    return this.cost - 3;
  } else if(this.pizzaSize === "small") {
    return 13;
  }
}


// User Interface
$(document).ready(function(){
  $("form.pizza").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#sizeSelect").val();
    var newPizza = new Pizza(pizzaSize, toppings, cost);
    var cost = newPizza.findPrice();
    var toppings = $("input#time").val();
    //$("span").text("");
    $("span#total-price").text(newPizza.findPrice());
    // document.getElementById("span#total-price").reset("");
  });
});
