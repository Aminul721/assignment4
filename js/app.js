// app.js
import { products } from 'product.js';
import { addToCart, clearCart, getCartItems } from 'cart.js';

// Function to render the product list
function renderProductList() {
  const productList = document.getElementById('product-list');

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <p>${product.name} - $${product.price}</p>
      <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productElement);
  });
}

// Function to render the shopping cart
function renderCart() {
  const cart = document.getElementById('cart');
  cart.innerHTML = '';

  const cartItems = getCartItems();
  cartItems.forEach(item => {
    // const cartItem
  });
}