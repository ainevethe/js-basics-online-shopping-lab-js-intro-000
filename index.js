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

  var cartItems = [];

  if (cart.length <1) {
    console.log("Your shopping cart is empty.")
  }

  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var itemPrice = cart[i][item]

    cartItems.push(`${item} at $${itemPrice}`);
  }

  if (cartItems.length === 1) {
    console.log("In your cart, you have " + cartItems[0] + ".")
  } else if (cartItems.length === 2) {
    console.log("In your cart, you have " + cartItems.join(" and ") + ".")
  } else {
    cartItems[cartItems.length - 1] = `and ${cartItems[cartItems.length -1]}`
    console.log("In your cart, you have " + cartItems.join(", ")+ ".");
  }
}


function total() {
  var total = 0;

for(var i = 0; i < cart.length; i++) {
  for (var item in cart[i]){
    total += cart[i][item]
  }
}
return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
