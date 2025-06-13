import setupNavbar from './navbar.js';
import about from './about.js';
import setupCart from './cart.js';
import { buyCartCount } from './cart.js';


document.addEventListener("DOMContentLoaded", () => {
  setupNavbar();
  setupCart();
  about();
  buyCartCount();
});
