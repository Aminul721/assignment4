// cart.js
let cartItems = [];

export function addToCart(product, quantity) {
  const existingItem = cartItems.find(item => item.product.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ product, quantity });
  }
}

export function clearCart() {
  cartItems = [];
}

export function getCartItems() {
  return cartItems;
}
