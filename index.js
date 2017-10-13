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

  var cartItem = [];
  var cartPrice = [];

  for (let i =0; i < cart.length; i++) {
    cartItem.push(Object.keys(cart[i])[0]);
  }

  for (let i = 0; i < cart.length; i++) {
    cartPrice.push(cart[i][cartItem[i]]);
  }

if (cart.length < 1) {
  console.log("Your shopping cart is empty.")
}

if (cart.length === 1) {
  console.log(`In your cart, you have ${cartItem[0]} at $${cartPrice[0]}.`)
}

if (cart.length === 2) {
  console.log(`In your cart, you have ${cartItem[0]} at $${cartPrice[0]} and ${cartItem[1]} at ${cartPrice[1]}.`)
}

if (cart.length >=3) {

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
