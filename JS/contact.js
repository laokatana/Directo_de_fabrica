export function setupContactForm(e) {
  if (!e) {
    console.error('Evento no definido. Revisa cómo llamas a esta función.');
    return;
  }

  e.preventDefault();
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const numero = '1130510931'; // Reemplaza con tu número

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
    resetForm(submitButton);
    return;
  }

  if (!nombre || !telefono || !mensaje) {
    showAlert('error', 'Por favor, completa todos los campos.');
    resetForm(submitButton);
    return;
  }

  // Validación de formato de teléfono
  if (!isValidPhone(telefono)) {
    showAlert('error', 'Teléfono inválido. Incluye al menos 7 dígitos.');
    resetForm(submitButton);
    return;
  }

  // Prepara mensaje para WhatsApp
  const texto = encodeURIComponent(
    `Hola, soy ${nombre}, mi número es ${telefono}.\n${mensaje}`
  );
  const url = `https://wa.me/${numero}?text=${texto}`;

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
    resetForm(submitButton);
  }, 800); // Ajusta el tiempo si necesitas
}

// Función para resetear el botón
function resetForm(button) {
  button.disabled = false;
  button.textContent = 'Enviar mensaje';
}

// Función para sanitizar inputs (previene XSS y URL injection)
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';

  return str
    .trim()
    .replace(/[<>'"]/g, '') // Elimina caracteres peligrosos
    .slice(0, 500); //longitud para evitar overflow
}

// Función para validar formato de teléfono
function isValidPhone(phone) {
  // Acepta números, +, -, espacios, paréntesis
  // Requiere al menos 7 dígitos
  const regex = /^[\d+\-\s()]{7,}$/;
  return regex.test(phone);
}

// Función para mostrar alertas
function showAlert(type, message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = message;

  const form = document.querySelector('.contact-form');
  form.insertAdjacentElement('afterend', alertDiv);

  setTimeout(() => alertDiv.remove(), 3000);
}
