# Security

## Propósito

Este documento define las reglas de seguridad del proyecto Directo de Fábrica.

Su objetivo es minimizar vulnerabilidades comunes, proteger a los usuarios y garantizar que cualquier modificación realizada por desarrolladores o agentes de IA siga criterios consistentes de seguridad.

---

# Principios de Seguridad

Toda decisión técnica debe priorizar:

1. Protección del usuario.
2. Protección de los datos.
3. Prevención de vulnerabilidades.
4. Simplicidad.
5. Mantenibilidad.

Ante dos soluciones equivalentes, elegir siempre la opción más segura.

---

# Estándar de Referencia

El proyecto sigue como referencia:

* OWASP Top 10
* Principios Secure by Design
* Principio de Mínimo Privilegio

---

# Reglas Generales

## Validación

Toda entrada debe considerarse no confiable.

Validar:

* Formularios
* Parámetros URL
* localStorage
* sessionStorage
* Datos externos
* APIs futuras

Nunca asumir que un dato es seguro.

---

## Sanitización

Todo dato mostrado en pantalla debe ser sanitizado cuando exista riesgo de contenido dinámico.

Evitar:

* HTML inyectado
* Scripts
* Eventos inline
* Código ejecutable

---

## Manipulación del DOM

Prohibido:

* innerHTML con datos dinámicos
* outerHTML con datos dinámicos
* insertAdjacentHTML con datos dinámicos

Preferir:

* textContent
* createElement
* appendChild
* DOM seguro

---

## Dependencias

Mantener dependencias actualizadas.

Antes de incorporar una nueva dependencia:

1. Justificar necesidad.
2. Evaluar mantenimiento.
3. Evaluar vulnerabilidades.
4. Evaluar tamaño e impacto.

Evitar dependencias innecesarias.

---

# OWASP Top 10

## A01 - Broken Access Control

Actualmente no existe autenticación.

Si en el futuro se implementa:

* validar permisos en backend
* aplicar principio de mínimo privilegio
* evitar acceso directo a recursos sensibles

---

## A02 - Cryptographic Failures

No almacenar información sensible en:

* localStorage
* sessionStorage
* cookies accesibles por JavaScript

No almacenar:

* contraseñas
* tokens
* claves privadas
* secretos

---

## A03 - Injection

Nunca construir código utilizando entradas del usuario.

Evitar:

* eval()
* Function()
* ejecución dinámica de código

Validar siempre entradas antes de procesarlas.

---

## A04 - Insecure Design

Toda nueva funcionalidad debe analizar riesgos antes de implementarse.

Preguntas obligatorias:

* ¿Puede ser abusada?
* ¿Puede exponer datos?
* ¿Puede generar errores críticos?
* ¿Puede afectar otros módulos?

---

## A05 - Security Misconfiguration

Configurar:

* HTTPS
* CSP
* X-Frame-Options
* Referrer-Policy
* Permissions-Policy

Mantener configuraciones mínimas y explícitas.

---

## A06 - Vulnerable Components

Ejecutar periódicamente:

```bash
npm audit
```

Corregir vulnerabilidades:

* Critical
* High

Antes de producción.

---

## A07 - Authentication Failures

Actualmente no aplica.

Si se implementa autenticación:

* hash seguro
* sesiones seguras
* MFA cuando corresponda

---

## A08 - Software and Data Integrity Failures

No utilizar código de terceros sin revisión.

Evitar:

* scripts desconocidos
* dependencias abandonadas
* CDN no verificadas

---

## A09 - Security Logging

Registrar errores relevantes.

Nunca registrar:

* contraseñas
* tokens
* secretos
* datos personales sensibles

---

## A10 - SSRF

Actualmente no aplica.

Si se incorporan APIs externas:

* validar URLs
* restringir dominios permitidos
* validar respuestas

---

# Formularios

Todos los formularios deben:

* validar campos requeridos
* validar longitud mínima y máxima
* validar formatos
* sanitizar entradas

La validación del navegador no reemplaza la validación propia.

---

# Local Storage

Permitido almacenar:

* preferencias visuales
* carrito
* configuraciones no sensibles

Prohibido almacenar:

* credenciales
* secretos
* tokens permanentes
* información privada

---

# Archivos y Recursos

Validar:

* formatos
* extensiones
* tamaños

No confiar únicamente en el nombre del archivo.

---

# Protección de Datos

Recolectar únicamente los datos necesarios.

Evitar almacenar información innecesaria.

Aplicar minimización de datos.

---

# Gestión de Errores

Los errores deben:

* informar al usuario de forma amigable
* evitar revelar detalles internos
* evitar exponer rutas
* evitar exponer configuraciones

---

# Revisión de Seguridad

Antes de aprobar cambios importantes verificar:

* No existen vulnerabilidades XSS.
* No existen secretos expuestos.
* No existen dependencias vulnerables.
* No existen datos sensibles en localStorage.
* No existen usos inseguros de innerHTML.
* Los formularios validan correctamente.
* No se introducen riesgos OWASP conocidos.

---

# Reglas para Agentes de IA

Antes de modificar código:

1. Analizar riesgos.
2. Explicar impacto.
3. Proponer solución.
4. Esperar aprobación.

Nunca introducir:

* eval()
* código ofuscado
* dependencias injustificadas
* secretos hardcodeados
* almacenamiento inseguro de datos

La seguridad tiene prioridad sobre nuevas funcionalidades.

---

# Objetivo

Construir una aplicación:

* Segura
* Predecible
* Fácil de auditar
* Fácil de mantener
* Resistente a vulnerabilidades comunes

La seguridad debe formar parte del diseño desde el inicio y no agregarse al final del desarrollo.
