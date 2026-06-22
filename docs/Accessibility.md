# Accessibility Guidelines

## Objetivo

Garantizar que el sitio pueda ser utilizado por la mayor cantidad posible de personas, independientemente de sus capacidades físicas, cognitivas o tecnológicas.

El proyecto debe cumplir como mínimo con WCAG 2.1 Nivel AA.

---

# Principios

Todo desarrollo debe respetar:

1. Perceptible
2. Operable
3. Comprensible
4. Robusto

---

# Formularios

Obligatorio:

* label asociado a cada input
* mensajes de error claros
* placeholders como ayuda, nunca como reemplazo del label

Correcto:

```html
<label for="name">Nombre</label>
<input id="name" type="text">
```

Incorrecto:

```html
<input placeholder="Nombre">
```

---

# Navegación por teclado

Todo elemento interactivo debe ser accesible mediante:

* Tab
* Shift + Tab
* Enter
* Space

Nunca bloquear la navegación por teclado.

---

# Focus Visible

Todo elemento interactivo debe mostrar foco visible.

Ejemplo:

```css
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

---

# Imágenes

Todas las imágenes deben incluir:

```html
alt=""
```

Si la imagen aporta información:

```html
alt="Respaldo de madera tapizado color beige"
```

Si es decorativa:

```html
alt=""
```

---

# Botones

Todo botón debe tener:

* texto visible
* aria-label cuando corresponda

Ejemplo:

```html
<button aria-label="Abrir carrito">
```

---

# Contraste

Mínimo requerido:

Texto normal:

4.5:1

Texto grande:

3:1

Objetivo del proyecto:

WCAG AA

---

# Encabezados

Seguir jerarquía correcta:

```text
h1
h2
h3
h4
```

Nunca saltar niveles.

Incorrecto:

h1 → h4

---

# Responsive Accessibility

Los elementos táctiles deben tener:

* mínimo 44x44 px

Separación adecuada entre controles.

---

# Multimedia

Videos:

* subtítulos cuando sea posible
* controles accesibles

Audio:

* evitar reproducción automática

---

# Testing

Antes de aprobar cambios:

Verificar:

* navegación por teclado
* lector de pantalla
* Lighthouse Accessibility
* contraste de colores

Objetivo mínimo:

Accessibility Score ≥ 90

---

# Criterios de aprobación

Un cambio es accesible si:

* puede utilizarse sin mouse
* posee contraste adecuado
* utiliza semántica HTML correcta
* no rompe navegación por teclado
* cumple WCAG AA

```
```
