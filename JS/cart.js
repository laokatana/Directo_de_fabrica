export default function setupCart() {
  // Cart toggle
  const cartToggle = document.getElementById("cart-toggle");
  const cartSidebar = document.getElementById("cart-sidebar");

  // 1. Toggle con el botón 🛒
  cartToggle.addEventListener("click", () => {
    cartSidebar.classList.toggle("open");
  });

  // 3. Cierre con la tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cartSidebar.classList.remove("open");
    }
  });

  // 4. Cierre si hacés clic fuera del carrito
  document.addEventListener("click", (e) => {
    const isClickInsideCart = cartSidebar.contains(e.target);
    const isClickOnToggle = cartToggle.contains(e.target);

    if (!isClickInsideCart && !isClickOnToggle) {
      cartSidebar.classList.remove("open");
    }
  });
}

export function buyCartCount() {
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartContent = cartSidebar.querySelector(".cart-content");
  const closeCartBtn = document.getElementById("close-cart");
  const cartToggle = document.getElementById("cart-toggle"); // botón del navbar 🛒
  const cartCount = document.getElementById("cart-count");

  let cartItems = [];

  // Mostrar/ocultar carrito
  cartToggle.addEventListener("click", () => {
    cartSidebar.classList.add("open");
    renderCart();
  });

  closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
  });

  // Agregar producto al carrito
  function addToCart(product) {
    cartItems.push(product);
    renderCart();
  }

  // Renderizar el carrito
  function renderCart() {
    cartContent.innerHTML = "";

    if (cartItems.length === 0) {
      cartContent.innerHTML = "<p>Tu carrito está vacío</p>";
      cartCount.textContent = "0";
      return;
    }

    const ul = document.createElement("ul");
    let total = 0;

    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.addEventListener("click", () => {
        cartItems.splice(index, 1);
        renderCart();
      });

      li.appendChild(removeBtn);
      ul.appendChild(li);
      total += item.precio;
    });

    cartContent.appendChild(ul);

    // Total
    const totalEl = document.createElement("p");
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
    cartContent.appendChild(totalEl);

    // Botón de WhatsApp
    const checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "Finalizar pedido por WhatsApp";
    checkoutBtn.addEventListener("click", () => {
      const mensaje = cartItems
        .map((item) => `- ${item.nombre} ($${item.precio})`)
        .join("%0A");
      const whatsappMsg = `Hola! Quiero pedir:%0A${mensaje}%0A%0ATotal: $${total.toFixed(
        2
      )}`;
      window.open(`https://wa.me/5491130510931?text=${whatsappMsg}`, "_blank");
    });

    cartContent.appendChild(checkoutBtn);

    // Actualizar contador en el ícono del navbar
    cartCount.textContent = cartItems.length;
  }

  // Exponer para uso externo
  window.addToCart = addToCart;

  document.querySelectorAll(".product-card").forEach((card) => {
    const title = card.querySelector(".product-title").textContent;
    const priceText = card.querySelector(".product-price").textContent;
    const price = parseFloat(
      priceText.replace("$", "").replace(".", "").trim()
    );

    const btn = card.querySelector(".add-to-cart-btn");
    btn.addEventListener("click", () => {
      addToCart({ nombre: title, precio: price });
    });
  });
}
