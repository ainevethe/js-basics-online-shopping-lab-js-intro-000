var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
   cart.push({[item]:price});

   console.log( [item] + " has been added to your cart.")

   return cart;
}

function viewCart() {

var intro = "In your cart, you have";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1){
    var key = Object.keys(cart[0])[key];
      console.log(intro + ` ${key} at $${cart[0][key]}.`)
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
