import setupNavbar from './navbar.js';
import about from './about.js';
import setupCart from './cart.js';
import { buyCartCount } from './cart.js';
import { setupContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupCart();
  about();
  buyCartCount();
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    setupContactForm(e); //
  });
});
