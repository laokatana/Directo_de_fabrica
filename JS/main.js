import setupNavbar from './navbar.js';
import about from './about.js';
import setupCart from './cart.js';
import { buyCartCount } from './cart.js';
import { setupContactForm } from './contact.js';
import setupSlider, { filterByCategory } from './slider.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupCart();
  about();
  buyCartCount();
  setupSlider();

  // Conectar M-2 con M-3: al hacer clic en una categoría del menú, filtrar el slider
  const submenuLinks = document.querySelectorAll('.submenu-link');
  submenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (href) {
        const category = href.substring(1); // quita el #
        filterByCategory(category);
      }
    });
  });

  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    setupContactForm(e);
  });
});
