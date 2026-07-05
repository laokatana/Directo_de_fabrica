# 📋 BACKLOG DE MEJORAS - DIRECTO DE FÁBRICA

## Estado actual

Arquitectura actual:

* HTML
* CSS
* JavaScript

Modelo de negocio:

Catálogo → Carrito → WhatsApp

Objetivo de esta etapa:

* Mejorar seguridad.
* Mejorar accesibilidad.
* Mejorar SEO.
* Mejorar calidad del código.
* Mantener arquitectura frontend estática.

---

## 🔴 CRÍTICAS (Sprint 1)

### Seguridad

| ID  | Tiempo | Objetivo                                            |
| --- | ------ | --------------------------------------------------- |
| C-1 | 15 min | Actualizar dependencias con vulnerabilidades HIGH   |
| C-2 | 20 min | Reemplazar innerHTML por textContent en cart.js     |
| C-3 | 30 min | Implementar Security Headers (CSP, X-Frame-Options) |
| C-4 | 25 min | Sanitizar inputs del formulario de contacto         |

### Arquitectura

| ID  | Tiempo | Objetivo                                                           |
| --- | ------ | ------------------------------------------------------------------ |
| C-5 | 2 h    | Refactorizar buyCartCount() en módulos más pequeños                |
| C-6 | 1.5 h  | Centralizar utilidades (constants, formatters, validators, alerts) |

---

## 🟠 ALTAS (Sprint 2)

### Accesibilidad

| ID  | Tiempo | Objetivo                                     |
| --- | ------ | -------------------------------------------- |
| A-1 | 20 min | Agregar labels a formularios                 |
| A-2 | 30 min | Agregar aria-labels a elementos interactivos |
| A-3 | 45 min | Mejorar contraste de colores                 |

### SEO

| ID  | Tiempo | Objetivo                                       |
| --- | ------ | ---------------------------------------------- |
| A-4 | 45 min | Agregar meta tags SEO y Open Graph             |
| A-5 | 1.5 h  | Implementar Schema.org JSON-LD                 |
| A-6 | 30 min | Configurar lang="es", robots.txt y sitemap.xml |
| A-7 | 30 min | Mejorar textos ALT de imágenes                 |

---

## 🟡 MEDIAS (Sprint 3)

### UX y Accesibilidad

| ID | Tiempo | Objetivo |
| --- | ------ | -------- |
| M-1 | 45 min | Agregar estilos `:focus-visible` para navegación por teclado en botones, enlaces e inputs |
| M-2 | 1.5 h | **Crear menú desplegable para "Productos"** en navbar. Mostrar subcategorías (Respaldos, Sommieres, Almohadas). Accesible y responsive (acordeón en móvil) |
| M-3 | 2 h | **Implementar slider/carrusel de productos por categoría.** Navegable con mouse (drag) y táctil (touch). Depende de M-2 |

### Estilos y Temas

| ID | Tiempo | Objetivo |
| --- | ------ | -------- |
| M-4 | 1.5 h | Optimizar estilos para pantallas de 320px y 480px |
| M-5 | 1 h | Rediseñar sección de contacto: Reemplazar formulario por botones de acceso directo a Instagram, WhatsApp y Catálogo. Debe ser responsive, accesible y usar íconos representativos. |

### Performance

| ID  | Tiempo | Objetivo                                      |
| --- | ------ | --------------------------------------------- |
| M-6 | 2 h    | Optimizar imágenes con srcset, picture y WebP |
| M-7 | 1.5 h  | Monitorizar Core Web Vitals                   |

### Código

| ID  | Tiempo | Objetivo                                       |
| --- | ------ | ---------------------------------------------- |
| N-1 | 1.5 h  | Refactorizar navbar.js y extraer menuToggle.js |
| N-2 | 1 h    | Implementar manejo global de errores           |

---

## 🟢 BAJAS (Futuras Iteraciones)

| ID  | Tiempo | Objetivo                       |
| --- | ------ | ------------------------------ |
| B-1 | 1 h    | Crear README.md                |
| B-2 | 30 min | Crear CHANGELOG.md             |
| B-3 | 15 min | Implementar preload de fuentes |
| B-4 | 1 h    | Optimizar build y minificación |
| B-5 | 30 min | Configurar HTTPS               |
| B-6 | 30 min | Configurar redirects           |
| B-7 | 2 h    | Implementar CDN para imágenes  |

---

## 🔵 FUTURO (NO IMPLEMENTAR TODAVÍA)

Estas mejoras quedan pendientes hasta que exista una necesidad real de backend:

| ID  | Objetivo                       |
| --- | ------------------------------ |
| F-1 | API para validación de carrito |
| F-2 | Panel administrativo           |
| F-3 | PostgreSQL                     |
| F-4 | Cloudinary                     |
| F-5 | OpenAPI / Swagger              |
| F-6 | Sistema de autenticación       |
| F-7 | Pasarela de pagos              |

---

## Objetivo de la Fase Actual

Lograr una tienda online estática profesional:

* Segura
* Accesible
* Optimizada para SEO
* Mobile First
* Fácil de mantener
* Lista para evolucionar a backend cuando sea necesario
