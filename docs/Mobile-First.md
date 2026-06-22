# Mobile First Guidelines

## Objetivo

Diseñar y desarrollar primero para dispositivos móviles.

Desktop debe ser una mejora progresiva.

---

# Filosofía

Orden de desarrollo:

1. Mobile
2. Tablet
3. Desktop

Nunca al revés.

---

# Breakpoints

Utilizar preferentemente:

```css
480px
768px
1024px
1280px
```

Evitar breakpoints innecesarios.

---

# Layout

Por defecto:

```css
display: flex;
flex-direction: column;
```

Escalar progresivamente para pantallas mayores.

---

# Imágenes

Todas las imágenes deben:

* ser responsive
* evitar dimensiones fijas

Ejemplo:

```css
img {
  max-width: 100%;
  height: auto;
}
```

---

# Botones

Mínimo:

44x44 px

Ejemplo:

```css
button {
  min-height: 44px;
}
```

---

# Tipografía

Base:

```css
font-size: 16px;
```

Evitar tamaños menores.

---

# Navegación

Mobile primero.

Prioridades:

* simplicidad
* accesibilidad
* rapidez

Evitar menús complejos.

---

# Performance

Prioridad absoluta en móviles.

Objetivos:

LCP < 2.5s

CLS < 0.1

INP < 200ms

---

# CSS

Evitar:

* !important
* selectores excesivamente largos
* duplicación

Preferir:

* componentes reutilizables
* variables CSS

---

# Responsive Testing

Verificar:

320px
375px
480px
768px
1024px
1280px

---

# Imágenes Modernas

Preferir:

1. AVIF
2. WebP
3. JPG

Utilizar srcset cuando corresponda.

---

# Criterios de aprobación

Un cambio se acepta si:

* funciona en móvil
* mantiene legibilidad
* no rompe layouts existentes
* conserva accesibilidad
* mantiene rendimiento

```
```
