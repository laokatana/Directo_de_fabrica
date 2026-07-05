import setupNavbar from './navbar.js';
import about from './about.js';
import setupCart from './cart.js';
import { buyCartCount } from './cart.js';
import setupSlider, { filterByCategory } from './slider.js';

/**
 * N-1: Control del Splash Screen
 *
 * - Oculta el splash cuando la página está completamente cargada (window.load).
 * - Muestra el splash al hacer clic en enlaces externos (target="_blank")
 *   con un breve retardo para dar feedback visual.
 */

/** Referencia al overlay del splash */
const splash = document.getElementById('splash-overlay');

/**
 * Oculta el splash screen con transición suave.
 */
function hideSplash() {
  if (splash) {
    splash.classList.add('splash-hidden');
  }
}

/**
 * Muestra el splash screen (remueve la clase oculta).
 */
function showSplash() {
  if (splash) {
    splash.classList.remove('splash-hidden');
  }
}

/**
 * Inicializa el control del splash al cargar la página.
 * Se oculta cuando el evento 'load' dispara (todo el contenido,
 * incluyendo imágenes y videos, está cargado).
 */
function initSplashOnLoad() {
  // Si window ya cargó (por ejemplo si el script se ejecuta tarde),
  // ocultar inmediatamente. Si no, esperar al evento 'load'.
  if (document.readyState === 'complete') {
    hideSplash();
  } else {
    window.addEventListener('load', hideSplash);
  }
}

/**
 * Configura el splash para enlaces externos (target="_blank").
 * Al hacer clic, muestra el splash con mensaje de redirección
 * y abre el enlace después de 1.5 segundos.
 */
function initSplashOnExternalLinks() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // No interceptar enlaces internos (anclas #)
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      // Prevenir la navegación inmediata
      event.preventDefault();

      // Mostrar el splash
      showSplash();

      // Cambiar el texto a "Redirigiendo..." momentáneamente
      const splashText = document.querySelector('.splash-text');
      const originalText = splashText ? splashText.textContent : '';
      if (splashText) {
        splashText.textContent = 'Redirigiendo...';
      }

      // Redirigir después de 1.5 segundos
      setTimeout(() => {
        window.open(href, '_blank', 'noopener,noreferrer');

        // Restaurar el texto original y ocultar el splash
        if (splashText) {
          splashText.textContent = originalText;
        }
        hideSplash();
      }, 1500);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupCart();
  about();
  buyCartCount();
  setupSlider();

  // Inicializar control del splash screen
  initSplashOnLoad();
  initSplashOnExternalLinks();

  // Conectar M-2 con M-3: al hacer clic en una categoría del menú, filtrar el slider
  const submenuLinks = document.querySelectorAll('.submenu-link');
  submenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (href) {
        const category = href.substring(1); // quita el #
        filterByCategory(category, true); // true = hacer scroll hasta el slider
      }
    });
  });
});
