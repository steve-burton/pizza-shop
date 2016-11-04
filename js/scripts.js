var Pizza = function(size, toppings, cost){
  this.pizzaSize = size;
  this.toppings = toppings;
  this.cost = 20;
}
// Pizza.prototype.toppings = function(){
//   return this.movieName + " <br>at " + this.time;
// }

// Pizza.prototype.price = function(){
//   if(this.pizzaSize === "Large") {
//     return this.price = 20;
//   } else if(this.pizzaSize === "Medium") {
//     return this.price = 17;
//   } else if(this.pizzaSize === "Small") {
//     return this.price = 13;
//   }
// }

Pizza.prototype.findPrice = function(){
  if(this.pizzaSize = "Large") {
    return this.cost;
  // } else if(this.age <= 13) {
  //   return this.price - 11;
  // } else if(this.age >= 65){
  //   return this.price - 7;
  // } else if(this.time === "2" || this.time === "12"){
  //   return this.price - 4;
  // } else {
  //   return this.price;
  }
}

// User Interface
$(document).ready(function(){
  var newPizza = new Pizza();
  $("form.pizza").submit(function(event){
    event.preventDefault();
    var size = $("#sizeSelect").val();
    //var toppings = $("input#time").val();
    var pizzaPrice = newPizza.findPrice();
    $("span#total-price").append(pizzaPrice);
  });
});
