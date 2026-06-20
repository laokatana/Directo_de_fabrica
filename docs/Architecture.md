# Architecture

## Propósito

Este documento describe la arquitectura actual y la dirección técnica del proyecto Directo de Fábrica.

Su objetivo es proporcionar contexto a desarrolladores y agentes de IA para garantizar decisiones consistentes, mantenibles y alineadas con los objetivos del proyecto.

---

# Descripción del Proyecto

Directo de Fábrica es una tienda online orientada a la exhibición y venta de respaldos de cama, sillones y productos relacionados.

Proceso comercial actual:

Cliente
→ Catálogo
→ Carrito
→ WhatsApp
→ Fabricante

Actualmente el proyecto no procesa pagos ni administra pedidos mediante una base de datos.

---

# Arquitectura Actual

Tipo de aplicación:

Frontend estático.

Tecnologías utilizadas:

* HTML
* CSS
* JavaScript

La aplicación se ejecuta completamente en el navegador.

Actualmente no existen:

* Backends
* Bases de datos
* Sistemas de autenticación
* Paneles administrativos

---

# Principios Arquitectónicos

Toda decisión técnica debe respetar el siguiente orden de prioridades:

1. Seguridad
2. Simplicidad
3. Mantenibilidad
4. Mobile First
5. SEO
6. Accesibilidad
7. Performance

Siempre se debe preferir una solución simple y mantenible antes que una solución compleja.

---

# Organización del Proyecto

Estructura general recomendada:

```text
project-root/

AGENTS.md
BACKLOG.md

docs/

css/
js/
images/
assets/

index.html
```

La estructura puede evolucionar según las necesidades reales del proyecto.

---

# Organización del Código

Cada archivo debe tener una única responsabilidad principal.

Ejemplos:

* navbar.js → navegación
* cart.js → carrito
* products.js → catálogo
* contact.js → formulario
* utils.js → utilidades compartidas

Evitar archivos monolíticos.

Favorecer módulos pequeños, cohesivos y reutilizables.

---

# Escalabilidad y Legibilidad

Todo el código debe priorizar:

* Legibilidad
* Simplicidad
* Reutilización
* Escalabilidad
* Mantenibilidad

El código debe ser fácil de entender tanto para desarrolladores como para agentes de IA.

Se prefiere código claro antes que optimizaciones prematuras.

## Reglas

* Una responsabilidad por archivo.
* Una responsabilidad por función.
* Evitar lógica duplicada.
* Evitar funciones excesivamente largas.
* Evitar archivos excesivamente grandes.
* Evitar anidaciones profundas.
* Favorecer módulos reutilizables.
* Mantener nombres descriptivos y consistentes.

## Tamaño Recomendado

Orientativo, no obligatorio:

* Funciones: menos de 30 líneas.
* Archivos: menos de 300 líneas.
* Documentación: menos de 400 líneas por documento.

Si un archivo comienza a crecer demasiado:

1. Identificar responsabilidades.
2. Extraer módulos independientes.
3. Mantener interfaces simples.

## Compatibilidad con Agentes de IA

La estructura del proyecto debe facilitar:

* Navegación rápida.
* Comprensión del contexto.
* Auditorías automáticas.
* Refactorizaciones seguras.
* Escalabilidad futura.

Se favorecen módulos pequeños y cohesivos que puedan analizarse de forma independiente.

---

# Gestión del Estado

El estado actual de la aplicación es local.

Puede utilizar:

* Variables de módulo.
* localStorage.
* sessionStorage.

No asumir la existencia de:

* Redux
* Zustand
* Context API
* Bases de datos

---

# Gestión de Recursos

Los recursos estáticos incluyen:

* Imágenes
* Videos
* Fuentes
* Íconos

Prioridades:

* Optimización
* Compresión
* Rendimiento
* Formatos modernos

---

# Mobile First

Todo desarrollo debe comenzar desde dispositivos móviles.

Proceso recomendado:

Mobile
→ Tablet
→ Desktop

No diseñar primero para escritorio.

Consultar:

docs/mobile-first.md

---

# Accesibilidad

Objetivo:

Cumplir WCAG AA.

Requisitos mínimos:

* Navegación por teclado.
* Labels en formularios.
* Uso correcto de ARIA.
* Contraste adecuado.
* HTML semántico.

Consultar:

docs/accessibility.md

---

# SEO

Objetivos principales:

* HTML semántico.
* Meta Tags.
* Open Graph.
* Sitemap.
* Robots.txt.
* Schema.org.

Consultar:

docs/seo.md

---

# Seguridad

Objetivo:

Seguir OWASP Top 10.

Reglas generales:

* No utilizar innerHTML con datos de usuario.
* Validar entradas.
* Sanitizar datos.
* Mantener dependencias actualizadas.
* Evitar exponer información sensible.

Consultar:

docs/security.md

---

# Evolución Futura

La arquitectura actual es suficiente para la etapa inicial del proyecto.

Las siguientes tecnologías sólo deberán incorporarse cuando exista una necesidad real:

* Express
* PostgreSQL
* Cloudinary
* Panel administrativo
* Sistema de autenticación
* Pasarela de pagos

No asumir que estas tecnologías existen.

No diseñar funcionalidades dependientes de ellas.

---

# Control de Cambios

Antes de realizar modificaciones importantes:

1. Analizar.
2. Explicar.
3. Proponer.
4. Obtener aprobación.

Evitar refactorizaciones masivas sin autorización.

Los cambios deben ser incrementales y fáciles de revertir.

---

# Objetivo Técnico

Construir una tienda online:

* Segura
* Accesible
* Optimizada para SEO
* Mobile First
* Fácil de mantener
* Escalable
* Preparada para evolucionar hacia una arquitectura con backend cuando sea necesario
