// helpers.js - Funciones de utilidad compartidas

/**
 * Sanitiza un string para prevenir XSS
 * @param {string} str - El string a sanitizar
 * @returns {string} String sanitizado sin caracteres peligrosos
 */
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';

  return str
    .trim()
    .replace(/[<>'"]/g, '') // Elimina caracteres peligrosos
    .slice(0, 500); // Longitud máxima para evitar overflow
}

/**
 * Valida formato de teléfono argentino
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  // Acepta números, +, -, espacios, paréntesis
  // Requiere al menos 7 dígitos
  const regex = /^[\d+\-\s()]{7,}$/;
  return regex.test(phone);
}

/**
 * Formatea un número como precio en pesos argentinos
 * @param {number} price
 * @returns {string} Precio formateado (ej: "$1.500")
 */
export function formatPrice(price) {
  if (typeof price !== 'number' || isNaN(price)) return '$0';
  return `$${price.toLocaleString('es-AR')}`;
}

/**
 * Muestra una alerta visual en el formulario de contacto
 * @param {'success' | 'error'} type - Tipo de alerta
 * @param {string} message - Mensaje a mostrar
 * @deprecated El formulario de contacto fue reemplazado en M-5.
 */
export function showAlert(type, message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = message;

  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.insertAdjacentElement('afterend', alertDiv);

  setTimeout(() => alertDiv.remove(), 3000);
}

/**
 * Reproduce un sonido de éxito
 */
export function playSuccessSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // Do5
    oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // Mi5
    oscillator.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // Sol5

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + 0.4
    );

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.4);
  } catch {
    // Silenciosamente ignorar errores de audio
  }
}

/**
 * Resetea el botón de envío del formulario
 * @param {HTMLButtonElement} button
 * @deprecated El formulario de contacto fue reemplazado en M-5.
 */
export function resetFormButton(button) {
  if (!button) return;
  button.disabled = false;
  button.textContent = 'Enviar mensaje';
}
