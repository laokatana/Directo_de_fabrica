export function setupContactForm(e) {
  if (!e) {
    // ← Validación adicional para debug
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

  // Obtiene valores del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
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

// Función para mostrar alertas
function showAlert(type, message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = message;

  const form = document.querySelector('.contact-form');
  form.insertAdjacentElement('afterend', alertDiv);

  setTimeout(() => alertDiv.remove(), 3000);
}
