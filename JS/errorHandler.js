/**
 * N-2: Manejo global de errores
 *
 * Captura errores no controlados (window.onerror y unhandledrejection)
 * y muestra una notificación amigable al usuario sin exponer detalles técnicos.
 * Los errores completos se registran en la consola para depuración.
 */

import { showNotification } from './notifications.js';

/**
 * Mensaje amigable para el usuario.
 * No incluye detalles técnicos por seguridad y UX.
 */
const USER_FRIENDLY_MESSAGE =
  'Algo salió mal. Por favor, recarga la página o intentá más tarde.';

/**
 * Inicializa el manejador global de errores.
 * Se llama automáticamente al importar el módulo.
 */
function initErrorHandler() {
  // ========== ERRORES DE EJECUCIÓN (window.onerror) ==========
  window.onerror = function (message, source, lineno, colno, error) {
    // Registrar en consola con todos los detalles técnicos
    console.error(
      `%c[ErrorHandler] Error de ejecución capturado:`,
      'color: #d63031; font-weight: bold;',
      {
        mensaje: message,
        archivo: source,
        linea: lineno,
        columna: colno,
        stack: error?.stack || 'No disponible'
      }
    );

    // Mostrar notificación amigable al usuario
    showNotification(USER_FRIENDLY_MESSAGE, 'error');

    // Importante: retornar true para evitar que el navegador muestre su diálogo por defecto
    return true;
  };

  // ========== PROMESAS RECHAZADAS (unhandledrejection) ==========
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;

    // Registrar en consola con todos los detalles técnicos
    console.error(
      `%c[ErrorHandler] Promesa rechazada no capturada:`,
      'color: #d63031; font-weight: bold;',
      {
        mensaje: reason?.message || reason,
        stack: reason?.stack || 'No disponible'
      }
    );

    // Mostrar notificación amigable al usuario
    showNotification(USER_FRIENDLY_MESSAGE, 'error');

    // Prevenir el comportamiento por defecto (log en consola del navegador)
    event.preventDefault();
  });

  console.log(
    '%c[ErrorHandler] Manejador global de errores activado.',
    'color: #00b894; font-style: italic;'
  );
}

// Inicializar automáticamente
initErrorHandler();

export default initErrorHandler;
