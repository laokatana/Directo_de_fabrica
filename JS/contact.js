import {
  sanitizeInput,
  isValidPhone,
  showAlert,
  playSuccessSound,
  resetFormButton
} from './helpers.js';
import { CONTACT_WHATSAPP_NUMBER, WHATSAPP_BASE_URL } from './constants.js';

export function setupContactForm(e) {
  if (!e) {
    console.error('Evento no definido. Revisa cómo llamas a esta función.');
    return;
  }

  e.preventDefault();
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');

  // Deshabilita el botón y muestra spinner
  submitButton.disabled = true;
  submitButton.innerHTML = `
    <span class="spinner"></span> Enviando...
  `;

  // Obtiene y sanitiza valores del formulario
  const nombre = sanitizeInput(document.getElementById('nombre').value);
  const telefono = sanitizeInput(document.getElementById('telefono').value);
  const mensaje = sanitizeInput(document.getElementById('mensaje').value);
  const honeypot = document.getElementById('robotito').value.trim();

  // Validaciones
  if (honeypot) {
    console.warn('Bot detectado');
    resetFormButton(submitButton);
    return;
  }

  if (!nombre || !telefono || !mensaje) {
    showAlert('error', 'Por favor, completa todos los campos.');
    resetFormButton(submitButton);
    return;
  }

  // Validación de formato de teléfono
  if (!isValidPhone(telefono)) {
    showAlert('error', 'Teléfono inválido. Incluye al menos 7 dígitos.');
    resetFormButton(submitButton);
    return;
  }

  // Prepara mensaje para WhatsApp
  const texto = encodeURIComponent(
    `Hola, soy ${nombre}, mi número es ${telefono}.\n${mensaje}`
  );
  const url = `${WHATSAPP_BASE_URL}${CONTACT_WHATSAPP_NUMBER}?text=${texto}`;

  // Simula un pequeño retraso para mostrar el spinner (opcional)
  setTimeout(() => {
    window.open(url, '_blank');

    // 1. Limpia el formulario
    form.reset();

    // 2. Reproduce sonido de éxito
    playSuccessSound();

    // 3. Muestra feedback visual
    showAlert('success', '¡Mensaje enviado con éxito!');

    // 4. Restaura el botón
    resetFormButton(submitButton);
  }, 800);
}
