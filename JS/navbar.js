export default function setupNavbar() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('#nav-links a');
  const dropdownBtn = document.getElementById('products-dropdown-btn');
  const submenu = document.getElementById('products-submenu');
  const submenuLinks = document.querySelectorAll('.submenu-link');

  // ========== MENÚ HAMBURGUESA (mobile) ==========

  // Abrir/cerrar con botón ☰
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );
  });

  // Cerrar al hacer click en un link (excepto dropdown)
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    });
  });

  // Cerrar menú al tocar el carrito
  const cartToggle = document.getElementById('cart-toggle');
  if (cartToggle) {
    cartToggle.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    });
  }

  // Cerrar si se hace click fuera del menú
  document.addEventListener('click', (event) => {
    const isClickInside =
      navLinks.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside) {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    }
  });

  // ========== DROPDOWN / ACORDEÓN ==========

  function isDesktop() {
    return window.innerWidth >= 768;
  }

  function toggleSubmenu(expand) {
    const willExpand =
      expand !== undefined ? expand : !submenu.classList.contains('open');
    submenu.classList.toggle('open', willExpand);
    dropdownBtn.setAttribute('aria-expanded', willExpand);
  }

  function closeSubmenu() {
    submenu.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', 'false');
  }

  // Click en el botón Productos: toggle del submenú
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSubmenu();
  });

  // Hover en desktop: abrir/cerrar con mouse
  const dropdownItem = dropdownBtn.closest('.nav-item-dropdown');
  if (dropdownItem) {
    let hoverTimeout;

    dropdownItem.addEventListener('mouseenter', () => {
      if (isDesktop()) {
        clearTimeout(hoverTimeout);
        toggleSubmenu(true);
      }
    });

    dropdownItem.addEventListener('mouseleave', () => {
      if (isDesktop()) {
        // Pequeño delay para permitir mover el mouse al submenú
        hoverTimeout = setTimeout(() => {
          // No cerrar si el mouse está sobre el submenú
          if (!submenu.matches(':hover')) {
            closeSubmenu();
          }
        }, 200);
      }
    });

    // Mantener abierto si el mouse está sobre el submenú
    submenu.addEventListener('mouseenter', () => {
      if (isDesktop()) {
        clearTimeout(hoverTimeout);
      }
    });

    submenu.addEventListener('mouseleave', () => {
      if (isDesktop()) {
        closeSubmenu();
      }
    });
  }

  // ========== SCROLL SUAVE A CATEGORÍA ==========

  submenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // quita el #
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Cerrar menú mobile
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');

        // Cerrar submenú
        closeSubmenu();

        // Scroll suave
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== NAVEGACIÓN POR TECLADO ==========

  // Escape: cerrar submenú y menú mobile
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSubmenu();
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      // Devolver foco al botón de menú si estaba abierto
      if (document.activeElement && navLinks.contains(document.activeElement)) {
        menuToggle.focus();
      }
    }
  });

  // Enter o Espacio en el botón dropdown
  dropdownBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSubmenu();
    }
  });

  // Cerrar submenú si se pierde el foco (Tab hacia afuera)
  dropdownBtn.addEventListener('blur', (e) => {
    // Si el foco se mueve a algo fuera del dropdown y submenú
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && !dropdownItem.contains(relatedTarget)) {
      closeSubmenu();
    }
  });

  // ========== CERRAR SUBMENÚ AL REDIMENSIONAR ==========

  window.addEventListener('resize', () => {
    if (isDesktop()) {
      // En desktop el submenú se maneja con hover, no necesita cerrarse
    } else {
      // En mobile, si el submenú está abierto y se cierra el menú hamburguesa, cerrar submenú
      if (!navLinks.classList.contains('open')) {
        closeSubmenu();
      }
    }
  });
}
