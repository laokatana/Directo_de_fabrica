/**
 * Sistema de notificaciones visuales para el usuario.
 * Muestra mensajes temporales no bloqueantes en la esquina superior derecha.
 * Reutilizable desde cualquier parte del código.
 */

const NOTIFICATION_DURATION = 5000; // 5 segundos
let container = null;

/**
 * Crea o reutiliza el contenedor de notificaciones en el DOM.
 * @returns {HTMLElement} El contenedor de notificaciones.
 */
function getContainer() {
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('role', 'status');
    Object.assign(container.style, {
      position: 'fixed',
      top: '16px',
      right: '16px',
      zIndex: '10000',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      maxWidth: '360px',
      pointerEvents: 'none'
    });
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Muestra una notificación al usuario.
 * @param {string} message - Mensaje a mostrar.
 * @param {'info' | 'success' | 'warning' | 'error'} type - Tipo de notificación.
 */
export function showNotification(message, type = 'info') {
  const notifContainer = getContainer();

  const notif = document.createElement('div');
  notif.className = `notification notification--${type}`;
  notif.textContent = message;

  // Estilos base
  Object.assign(notif.style, {
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '1.4',
    color: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    opacity: '0',
    transform: 'translateX(100%)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    pointerEvents: 'auto',
    wordBreak: 'break-word'
  });

  // Colores según tipo
  const colors = {
    info: { bg: '#6c5ce7' },
    success: { bg: '#00b894' },
    warning: { bg: '#fdcb6e', text: '#2d3436' },
    error: { bg: '#d63031' }
  };
  const style = colors[type] || colors.info;
  notif.style.backgroundColor = style.bg;
  if (style.text) notif.style.color = style.text;

  notifContainer.appendChild(notif);

  // Animar entrada
  requestAnimationFrame(() => {
    notif.style.opacity = '1';
    notif.style.transform = 'translateX(0)';
  });

  // Auto-eliminar después de la duración
  const timeoutId = setTimeout(() => {
    dismissNotification(notif);
  }, NOTIFICATION_DURATION);

  // Permitir descartar con clic
  notif.addEventListener('click', () => {
    clearTimeout(timeoutId);
    dismissNotification(notif);
  });

  return notif;
}

/**
 * Elimina una notificación con animación.
 * @param {HTMLElement} notif - Elemento de notificación a eliminar.
 */
function dismissNotification(notif) {
  notif.style.opacity = '0';
  notif.style.transform = 'translateX(100%)';
  setTimeout(() => {
    if (notif.parentNode) {
      notif.parentNode.removeChild(notif);
    }
  }, 300);
}

export default showNotification;
