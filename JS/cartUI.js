// cartUI.js - Renderizado del DOM del carrito
import { getCartItems, removeFromCart } from './cartState.js';
import { WHATSAPP_NUMBER, WHATSAPP_BASE_URL } from './constants.js';
import { formatPrice } from './helpers.js';

export function renderCart() {
  const cartContent = document.querySelector('#cart-sidebar .cart-content');
  const cartCount = document.getElementById('cart-count');
  const items = getCartItems();

  // Limpiar contenido previo
  while (cartContent.firstChild) {
    cartContent.removeChild(cartContent.firstChild);
  }

  if (items.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = 'Tu carrito está vacío';
    cartContent.appendChild(emptyMsg);
    cartCount.textContent = '0';
    cartCount.classList.add('hidden');
    return;
  }

  const ul = document.createElement('ul');
  let total = 0;

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-item');

    const itemText = document.createElement('span');
    itemText.textContent = `${item.nombre} - ${formatPrice(item.precio)}`;
    li.appendChild(itemText);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✕';
    removeBtn.classList.add('btn-remove');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromCart(index);
      renderCart();
    });

    li.appendChild(removeBtn);
    ul.appendChild(li);
    total += item.precio;
  });

  cartContent.appendChild(ul);

  // Total
  const totalEl = document.createElement('p');
  totalEl.textContent = `Total: ${formatPrice(total)}`;
  totalEl.style.fontWeight = 'bold';
  cartContent.appendChild(totalEl);

  // Botón WhatsApp
  const checkoutBtn = document.createElement('button');
  checkoutBtn.textContent = 'FINALIZAR PEDIDO POR WHATSAPP';
  checkoutBtn.classList.add('btn-whatsapp');
  checkoutBtn.addEventListener('click', () => {
    const mensaje = items
      .map((item) => `- ${item.nombre} (${formatPrice(item.precio)})`)
      .join('%0A');
    const whatsappMsg = `Hola! Me gustaría saber si hay stock y qué colores tienen para efectuar la compra de los siguientes productos:%0A${mensaje}%0A%0ATotal: ${formatPrice(total)}`;
    const whatsappUrl = `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${whatsappMsg}`;
    window.open(whatsappUrl, '_blank');
  });

  cartContent.appendChild(checkoutBtn);

  // Actualizar badge del carrito
  cartCount.textContent = items.length;
  cartCount.classList.remove('hidden');
}

export function updateCartBadge() {
  const cartCount = document.getElementById('cart-count');
  const items = getCartItems();
  cartCount.textContent = items.length;
  if (items.length === 0) {
    cartCount.classList.add('hidden');
  } else {
    cartCount.classList.remove('hidden');
  }
}
