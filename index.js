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

  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var itemPrice = cart[i][item]

    cartItem.push(`${item} at $${itemPrice}`);
  }

  if (cartItem.length === 1) {
    console.log("In your cart, you have " + cartItem[0] + ".")
  } else if (cartItem.length === 2) {
    console.log("In your cart, you have " + cartItem.join(" and ") + ".")
  } else {
    cartItem[cartItems.length - 1] = `and ${cartItems[cartItems.length -1]}`
    console.log("In your cart, you have " + cartItem.join(", ")+ ".");
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
