// cart.js - Orquestador del carrito
import { loadCart, addToCart } from './cartState.js';
import { renderCart } from './cartUI.js';

export default function setupCart() {
  const cartToggle = document.getElementById('cart-toggle');
  const cartSidebar = document.getElementById('cart-sidebar');

  // Toggle con el botón 🛒
  cartToggle.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
  });

  // Cierre con la tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cartSidebar.classList.remove('open');
    }
  });
}

export function buyCartCount() {
  // Cargar carrito desde localStorage al iniciar
  loadCart();
  renderCart();

  // Exponer addToCart globalmente para las tarjetas de producto
  window.addToCart = (product) => {
    addToCart(product);
    renderCart();
  };

  // Escuchar botones de las tarjetas de producto
  document.querySelectorAll('.product-card').forEach((card) => {
    const title = card.querySelector('.product-title').textContent;
    const priceText = card.querySelector('.product-price').textContent;
    const price = parseFloat(
      priceText.replace('$', '').replace('.', '').trim()
    );

    const btn = card.querySelector('.add-to-cart-btn');
    btn.addEventListener('click', () => {
      addToCart({ nombre: title, precio: price });
      renderCart();
    });
  });
}
