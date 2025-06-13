const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");
const navItems = document.querySelectorAll("#nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Cart toggle
const cartToggle = document.getElementById("cart-toggle");


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


//logica del carrito