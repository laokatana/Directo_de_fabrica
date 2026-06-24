// cartState.js - Estado y persistencia del carrito
import { CART_STORAGE_KEY } from './constants.js';

let cartItems = [];

export function loadCart() {
  const saved = localStorage.getItem(CART_STORAGE_KEY);
  cartItems = saved ? JSON.parse(saved) : [];
  return cartItems;
}

export function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

export function getCartItems() {
  return cartItems;
}

export function addToCart(product) {
  cartItems.push(product);
  saveCart();
  return cartItems;
}

export function removeFromCart(index) {
  cartItems.splice(index, 1);
  saveCart();
  return cartItems;
}

export function clearCart() {
  cartItems = [];
  saveCart();
}
