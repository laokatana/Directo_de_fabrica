// navbar.js (sin DOMContentLoaded)
const toggleButton = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".navbar-links");
const navItems = document.querySelectorAll("#nav-links a");

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("open");
  });
});

loadComponent(
  "cart-container",
  "./components/cart/cart.html",
  "./components/cart/cart.css"
);
