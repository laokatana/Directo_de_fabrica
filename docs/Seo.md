# SEO Guidelines

## Objetivo

Garantizar que el sitio sea fácilmente indexable por motores de búsqueda y que pueda posicionarse correctamente para búsquedas relacionadas con respaldos, colchones, sommiers y almohadas.

---

# Principios

Prioridades SEO:

1. Contenido útil
2. Semántica HTML
3. Performance
4. Accesibilidad
5. Datos estructurados

---

# HTML Semántico

Utilizar:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Evitar:

```html
<div class="header">
<div class="menu">
```

cuando exista una etiqueta semántica equivalente.

---

# Título

Cada página debe tener un único:

```html
<title>
```

Ejemplo:

```html
<title>
Respaldos, Colchones y Sommiers | Lorenzo
</title>
```

---

# Meta Description

Todas las páginas deben contener:

```html
<meta name="description">
```

Longitud recomendada:

120-160 caracteres.

---

# Open Graph

Implementar:

```html
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<meta property="og:url">
```

---

# Twitter Cards

Implementar:

```html
<meta name="twitter:card">
<meta name="twitter:title">
<meta name="twitter:description">
```

---

# Encabezados

Mantener jerarquía:

```text
h1
h2
h3
h4
```

Solo un h1 por página.

---

# Imágenes

Toda imagen debe incluir:

```html
alt=""
```

Los textos alternativos deben ser descriptivos.

Ejemplo:

```html
alt="Sommier matrimonial tapizado color gris"
```

---

# URLs

Las URLs deben ser:

* cortas
* descriptivas
* legibles

Ejemplo:

```text
/productos/respaldos
```

Evitar:

```text
/producto?id=123
```

---

# Sitemap

Mantener:

```text
sitemap.xml
```

actualizado.

---

# Robots

Mantener:

```text
robots.txt
```

correctamente configurado.

---

# Schema.org

Utilizar JSON-LD.

Prioridad:

* LocalBusiness
* Product
* Organization

Ejemplo:

```json
{
  "@context": "https://schema.org"
}
```

---

# Performance y SEO

Objetivos:

LCP < 2.5s

CLS < 0.1

INP < 200ms

---

# Mobile SEO

El sitio debe ser:

* responsive
* mobile first
* accesible

Google indexa principalmente la versión móvil.

---

# Contenido

Evitar:

* contenido duplicado
* textos genéricos
* keyword stuffing

Priorizar contenido claro y útil.

---

# Testing

Validar periódicamente:

* Lighthouse SEO
* Google Search Console
* Rich Results Test

---

# Criterios de aprobación

Un cambio SEO es aceptado si:

* mantiene semántica HTML
* conserva accesibilidad
* mejora o mantiene performance
* no rompe indexación
* sigue buenas prácticas SEO

```
```
