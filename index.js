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

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return;
  } else {
    for (var i = 0; i < cart.length; i++ ) {
      for (var item in cart[i]) {
      var price = cart[i][item];}
      if (cart.length === 1) {
      console.log("In your cart, you have " + item + " at $" + price + ".")
    } else if (cart.length === 2) {
      console.log(item[0] price[0] item[1])
    }
    }
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
