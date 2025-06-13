export default function setupNavbar() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll("#nav-links a");

  // Abrir/cerrar con botón ☰
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Cerrar al hacer click en un link
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // Cerrar si se hace click fuera del menú
  document.addEventListener("click", (event) => {
    const isClickInside =
      navLinks.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside) {
      navLinks.classList.remove("open");
    }
  });
}


