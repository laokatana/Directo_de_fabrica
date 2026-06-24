# 🤖

## Directo de Fábrica - AGENTS.md

## Filosofía del Proyecto

Prioridades del proyecto (en orden):

1. Seguridad
2. Simplicidad
3. Mantenibilidad
4. Mobile First
5. SEO
6. Accesibilidad
7. Performance

Se prefieren soluciones simples y mantenibles antes que arquitecturas complejas o dependencias innecesarias.

---

## Documentación Obligatoria

Antes de analizar, modificar, refactorizar o proponer cambios en el proyecto, todo agente o desarrollador debe revisar la documentación principal.

Orden de lectura:

1. README.md
2. AGENTS.md
3. BACKLOG_MEJORAS.MD
4. docs/Architecture.md
5. docs/Security.md
6. docs/Accessibility.md
7. docs/Mobile-First.md
8. docs/SEO.md
9. docs/Roadmap.md

Reglas:

- No asumir requisitos sin consultar la documentación.
- No proponer cambios que contradigan la arquitectura definida.
- No introducir vulnerabilidades que incumplan Security.md.
- No romper criterios de accesibilidad definidos en Accessibility.md.
- No ignorar la estrategia Mobile First definida en Mobile-First.md.
- No implementar cambios que perjudiquen SEO.md.
- Toda propuesta debe respetar los objetivos definidos en Roadmap.md.

Si existe conflicto entre documentación:

AGENTS.md tiene prioridad sobre cualquier otro documento.

Todo agente debe completar la lectura de esta documentación antes de analizar o modificar código.

## Verificación de Contexto

Antes de comenzar cualquier tarea:

1. Leer documentación obligatoria.
2. Resumir brevemente el contexto comprendido.
3. Explicar el plan de acción.
4. Esperar aprobación cuando corresponda.

No realizar cambios importantes sin confirmar comprensión del contexto.

## Objetivo del Proyecto

Directo de Fábrica es una tienda online de respaldos de cama y sillones.

El objetivo principal es:

- Mostrar productos de forma profesional.
- Facilitar consultas y pedidos.
- Redirigir al cliente al fabricante mediante WhatsApp.
- Mantener una experiencia rápida, accesible y segura.

---

## Arquitectura Actual

Tecnologías actuales:

- HTML
- CSS
- JavaScript

Arquitectura:

Frontend estático.

Flujo de venta:

Catálogo
→ Carrito
→ WhatsApp

No existe backend actualmente.

---

## Arquitectura Futura (Opcional)

Solo implementar si existe una necesidad real.

Tecnologías previstas:

- Express
- PostgreSQL
- Cloudinary

Posibles funcionalidades futuras:

- Panel administrativo
- Gestión de productos
- Gestión de imágenes
- Gestión de pedidos
- Integración con pagos

No asumir que estas funcionalidades ya existen.

---

## Reglas para Agentes

Antes de realizar cualquier modificación:

1. Analizar el problema.
2. Explicar la causa.
3. Proponer una solución.
4. Explicar riesgos e impacto.
5. Esperar aprobación antes de modificar múltiples archivos.

Nunca:

- Realizar refactorizaciones masivas sin autorización.
- Agregar dependencias sin justificar su necesidad.
- Cambiar la arquitectura sin aprobación.
- Eliminar funcionalidades existentes sin aprobación.
- Introducir complejidad innecesaria.

---

## Convenciones de Desarrollo

- Utilizar nombres descriptivos.
- Evitar duplicación de código.
- Mantener funciones pequeñas y legibles.
- Priorizar legibilidad sobre optimización prematura.
- Mantener consistencia con el estilo existente del proyecto.
- Aplicar principios de Clean Code cuando sea apropiado.

---

## Seguridad

Seguir OWASP Top 10.

Consultar:

docs/security.md

Principios básicos:

- Nunca usar datos de usuario mediante innerHTML.
- Validar y sanitizar entradas.
- Evitar dependencias vulnerables.
- No exponer información sensible.
- Revisar riesgos antes de incorporar librerías nuevas.

---

## SEO

Consultar:

docs/seo.md

Objetivos:

- SEO técnico correcto.
- Estructura semántica HTML.
- Metadatos completos.
- Datos estructurados cuando corresponda.

---

## Accesibilidad

Consultar:

docs/accessibility.md

Objetivos:

- Cumplir WCAG AA.
- Navegación mediante teclado.
- Contraste adecuado.
- Uso correcto de labels y atributos ARIA.

---

## Mobile First

Consultar:

docs/mobile-first.md

Principios:

- Diseñar primero para móviles.
- Escalar progresivamente hacia tablet y desktop.
- Evitar breakpoints innecesarios.
- Priorizar rendimiento móvil.

---

## Aprendizaje Guiado

El propietario del proyecto está aprendiendo:

- Desarrollo Frontend
- Backend
- Redes
- Ciberseguridad

Los agentes deben:

- Explicar decisiones importantes.
- Justificar cambios relevantes.
- Mostrar alternativas cuando existan.
- Favorecer la comprensión antes que la automatización.

---

## Git y Control de Versiones

- Un cambio lógico por commit.
- Commits pequeños y descriptivos.
- Evitar modificar múltiples módulos sin aprobación.
- No mezclar refactorización con nuevas funcionalidades.

---

## Criterios de Aprobación

Un cambio se considera aceptable únicamente si:

- Funciona correctamente.
- No rompe funcionalidades existentes.
- Mantiene compatibilidad móvil.
- No introduce vulnerabilidades.
- Respeta accesibilidad.
- Respeta SEO.
- Mantiene legibilidad y mantenibilidad.
- Está alineado con los objetivos del proyecto.
