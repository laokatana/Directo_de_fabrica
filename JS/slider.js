// slider.js - Slider/carrusel de productos por categoría
// M-3: Implementar slider/carrusel de productos por categoría

/**
 * Array de productos del catálogo.
 * Cada producto tiene: id, nombre, precio, imagen, categoria, descripcion
 */
const productos = [
  {
    id: 1,
    nombre: 'Respaldo Eco cuero',
    precio: 18000,
    imagen:
      '/assets/pictures/Grande/respaldo grande dos plazas ecocuero blanco.jpeg',
    categoria: 'respaldos',
    descripcion: 'Respaldo de madera, de 2 plazas.',
    stock: true
  },
  {
    id: 2,
    nombre: 'Respaldo Canelones pana',
    precio: 22500,
    imagen: '/assets/pictures/Grande/respaldo grande dos plazas canelones.jpeg',
    categoria: 'respaldos',
    descripcion: 'Respaldo de madera, de 2 plazas.',
    stock: true
  },
  {
    id: 3,
    nombre: 'Respaldo Chenille',
    precio: 22500,
    imagen:
      '/assets/pictures/Grande/respaldo grande dos plazas chenille negro.jpeg',
    categoria: 'respaldos',
    descripcion: 'Respaldo de madera de 2 plazas.',
    stock: true
  },
  {
    id: 4,
    nombre: 'Respaldo Chenille',
    precio: 22500,
    imagen: '/assets/pictures/mediano/respaldo una plaza y media chenille.jpeg',
    categoria: 'respaldos',
    descripcion: 'Respaldo de madera de Plaza 1/2.',
    stock: true
  },
  {
    id: 5,
    nombre: 'Respaldo Eco cuero',
    precio: 22500,
    imagen: '/assets/pictures/chico/respaldorosa.jpeg',
    categoria: 'respaldos',
    descripcion: 'Respaldo de madera de 1 Plaza.',
    stock: true
  },
  {
    id: 6,
    nombre: 'Almohada',
    precio: 22500,
    imagen: '/assets/pictures/almohada clasica.jpeg',
    categoria: 'almohadas',
    descripcion: 'Viscoelastica clasica.',
    stock: true
  }
];

// Estado del slider
let currentSlide = 0;
let filteredProducts = [];

/**
 * Filtra productos por categoría y renderiza el slider.
 * @param {string} categoria - Nombre de la categoría (respaldos, sommiers, almohadas, colchones)
 */
export function filterByCategory(categoria) {
  currentSlide = 0;

  // Filtrar productos
  filteredProducts = productos.filter((p) => p.categoria === categoria);

  const sliderTrack = document.getElementById('slider-track');
  const dotsContainer = document.getElementById('slider-dots');
  const sliderSection = document.getElementById('product-slider');

  if (!sliderTrack || !dotsContainer || !sliderSection) return;

  // Si no hay productos, mostrar mensaje
  if (filteredProducts.length === 0) {
    sliderTrack.innerHTML = `
      <div class="slider-empty">
        <p>Próximamente</p>
      </div>
    `;
    dotsContainer.innerHTML = '';
    updateArrows();
    return;
  }

  // Renderizar tarjetas (1 producto por slide)
  sliderTrack.innerHTML = filteredProducts
    .map(
      (p) => `
    <div class="slider-slide" role="group" aria-label="${p.nombre}">
      <div class="product-card${!p.stock ? ' out-of-stock' : ''}">
        <div class="product-card-img-wrapper">
          ${!p.stock ? '<span class="badge-sin-stock">Sin stock</span>' : ''}
          <img
            src="${p.imagen}"
            alt="${p.nombre} - Directo de Fábrica"
            class="product-img"
            loading="lazy"
          />
        </div>
        <h4 class="product-title">${p.nombre}</h4>
        <p class="product-description">${p.descripcion}</p>
        <span class="product-price">$${p.precio.toLocaleString('es-AR')}</span>
        <button class="add-to-cart-btn" data-id="${p.id}"${!p.stock ? ' disabled' : ''}>${p.stock ? 'Agregar al carrito' : 'Sin stock'}</button>
      </div>
    </div>
  `
    )
    .join('');

  // Crear dots: 1 dot por producto
  const totalSlides = filteredProducts.length;
  dotsContainer.innerHTML = Array.from(
    { length: totalSlides },
    (_, i) =>
      `<button class="slider-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ir a la diapositiva ${i + 1}"></button>`
  ).join('');

  // Actualizar posición
  updateSliderPosition();
  updateArrows();
  updateDots();

  // Hacer scroll suave hasta el slider
  sliderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Actualiza la posición del slider según el slide actual.
 * Desplaza el track usando translateX basado en el ancho del viewport.
 */
function updateSliderPosition() {
  const sliderTrack = document.getElementById('slider-track');
  const viewport = document.querySelector('.slider-viewport');
  if (!sliderTrack || !viewport || filteredProducts.length === 0) return;

  const slideWidth = viewport.offsetWidth;
  const maxSlide = filteredProducts.length - 1;

  // Limitar currentSlide dentro del rango
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlide) currentSlide = maxSlide;

  const offset = -(currentSlide * slideWidth);
  sliderTrack.style.transform = `translateX(${offset}px)`;
}

/**
 * Actualiza el estado de las flechas (habilitar/deshabilitar).
 */
function updateArrows() {
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  if (!prevBtn || !nextBtn) return;

  const totalSlides = filteredProducts.length;

  prevBtn.disabled = currentSlide <= 0;
  nextBtn.disabled = currentSlide >= totalSlides - 1;

  prevBtn.setAttribute('aria-disabled', prevBtn.disabled);
  nextBtn.setAttribute('aria-disabled', nextBtn.disabled);
}

/**
 * Actualiza los dots activos.
 */
function updateDots() {
  const dots = document.querySelectorAll('.slider-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

/**
 * Navega al slide anterior.
 */
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
    updateArrows();
    updateDots();
  }
}

/**
 * Navega al slide siguiente.
 */
function nextSlide() {
  const totalSlides = filteredProducts.length;
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSliderPosition();
    updateArrows();
    updateDots();
  }
}

/**
 * Inicializa el slider: eventos, touch, teclado.
 */
export default function setupSlider() {
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const dotsContainer = document.getElementById('slider-dots');
  const sliderTrack = document.getElementById('slider-track');

  if (!prevBtn || !nextBtn || !dotsContainer || !sliderTrack) return;

  // Flechas
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Dots (delegación de eventos)
  dotsContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.slider-dot');
    if (!dot) return;
    const index = parseInt(dot.dataset.index, 10);
    if (!isNaN(index)) {
      currentSlide = index;
      updateSliderPosition();
      updateArrows();
      updateDots();
    }
  });

  // Navegación por teclado (flechas izquierda/derecha)
  sliderTrack.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  });

  // Hacer el track focusable para teclado
  if (!sliderTrack.hasAttribute('tabindex')) {
    sliderTrack.setAttribute('tabindex', '0');
    sliderTrack.setAttribute('role', 'region');
    sliderTrack.setAttribute('aria-label', 'Carrusel de productos');
  }

  // ========== SOPORTE TÁCTIL ==========
  let touchStartX = 0;
  let touchEndX = 0;
  let isSwiping = false;

  sliderTrack.addEventListener(
    'touchstart',
    (e) => {
      // Ignorar si el toque comienza en un botón (ej: "Agregar al carrito")
      if (e.target.closest('.add-to-cart-btn')) {
        isSwiping = false;
        return;
      }
      touchStartX = e.changedTouches[0].screenX;
      isSwiping = true;
    },
    { passive: true }
  );

  sliderTrack.addEventListener(
    'touchmove',
    (e) => {
      if (!isSwiping) return;
      touchEndX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  sliderTrack.addEventListener(
    'touchend',
    () => {
      if (!isSwiping) return;
      isSwiping = false;

      const swipeDistance = touchStartX - touchEndX;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    },
    { passive: true }
  );

  // ========== RECALCULAR EN RESIZE ==========
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateSliderPosition();
    }, 250);
  });

  // ========== EVENT DELEGATION: Botones "Agregar al carrito" ==========
  sliderTrack.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;

    // Prevenir que el clic se propague y active la navegación del slider
    e.stopPropagation();

    // Ignorar si el botón está deshabilitado (sin stock)
    if (btn.disabled) return;

    // Obtener datos del producto desde el slide contenedor
    const slide = btn.closest('.slider-slide');
    if (!slide) return;

    const title = slide.querySelector('.product-title').textContent;
    const priceText = slide.querySelector('.product-price').textContent;
    const price = parseFloat(
      priceText.replace('$', '').replace('.', '').trim()
    );

    // Usar la función global expuesta por cart.js
    if (typeof window.addToCart === 'function') {
      window.addToCart({ nombre: title, precio: price });
    }
  });

  // Cargar categoría inicial
  filterByCategory('respaldos');
}
