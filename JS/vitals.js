/**
 * M-7: Monitorizar Core Web Vitals
 *
 * Implementa monitoreo de métricas de rendimiento real del sitio usando la librería `web-vitals`.
 * Mide: LCP, FID, CLS, FCP, TTFB.
 *
 * Las métricas se registran en consola y se almacenan en localStorage para análisis histórico.
 */

import {
  onLCP,
  onFID,
  onCLS,
  onFCP,
  onTTFB
} from '../node_modules/web-vitals/dist/web-vitals.js';

const STORAGE_KEY = 'df_web_vitals_history';
const MAX_HISTORY = 50; // mantener las últimas 50 mediciones

/**
 * Obtiene el historial de métricas almacenado en localStorage.
 * @returns {Array} Array de registros históricos.
 */
function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Guarda una métrica en el historial de localStorage.
 * @param {string} name - Nombre de la métrica (LCP, FID, CLS, FCP, TTFB).
 * @param {number} value - Valor de la métrica en milisegundos (o score para CLS).
 * @param {string} rating - Valoración: 'good', 'needs-improvement', 'poor'.
 */
function saveToHistory(name, value, rating) {
  const history = getHistory();
  const entry = {
    name,
    value,
    rating,
    timestamp: new Date().toISOString(),
    url: window.location.pathname
  };
  history.push(entry);

  // Limitar tamaño del historial
  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // localStorage lleno o no disponible, ignorar silenciosamente
  }
}

/**
 * Reporta una métrica a consola y la almacena en localStorage.
 * @param {Object} metric - Objeto de métrica de web-vitals.
 */
function onReport(metric) {
  const { name, value, rating } = metric;

  // Formatear valor según la métrica
  let formattedValue;
  let unit;
  if (name === 'CLS') {
    formattedValue = value.toFixed(3);
    unit = '';
  } else {
    formattedValue = value.toFixed(0);
    unit = ' ms';
  }

  // Determinar emoji según rating
  const emoji =
    rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';

  // Registrar en consola con estilo
  console.log(
    `%c[Core Web Vitals] ${emoji} ${name}: ${formattedValue}${unit} (${rating})`,
    'color: #6c5ce7; font-weight: bold;'
  );

  // Almacenar en localStorage
  saveToHistory(name, value, rating);
}

/**
 * Inicializa el monitoreo de Core Web Vitals.
 * Se llama automáticamente al importar el módulo.
 */
function initVitals() {
  // Verificar que web-vitals esté disponible
  if (typeof onLCP !== 'function') {
    console.warn('[Core Web Vitals] web-vitals no está disponible.');
    return;
  }

  // Registrar cada métrica
  onLCP(onReport);
  onFID(onReport);
  onCLS(onReport);
  onFCP(onReport);
  onTTFB(onReport);

  console.log(
    '%c[Core Web Vitals] Monitoreo iniciado. Las métricas se registrarán automáticamente.',
    'color: #6c5ce7; font-style: italic;'
  );
}

// Iniciar monitoreo automáticamente
initVitals();

export { getHistory, onReport };
