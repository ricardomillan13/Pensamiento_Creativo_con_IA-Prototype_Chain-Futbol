
![Status](https://img.shields.io/badge/status-active-brightgreen)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🧠 Concepto Principal
Este proyecto explora la **Prototype Chain en JavaScript** usando una metáfora del **fútbol** para entender herencia, delegación y mutación en el prototipo de objetos.

---

## 🚀 Ejecución
```sh
npm install
npm start

# Proyecto: Prototype Chain en JavaScript + Fútbol

## Entrega
Contenido preparado para entrega: README, código original (phase2_code.js), código optimizado (phase3_code.js) y diagrama (diagram.svg).

## 1) Descripción del problema
Elegí el concepto **Prototype Chain** en JavaScript y lo combiné con el tema **Fútbol**.  
Objetivo: modelar Person, Player y Team usando prototipos (sin usar `class`) y construir una simulación que maneje eventos asincrónicos. Se siguió además la restricción de evitar `map()` y usar callbacks en la versión inicial.

## 2) Fase 1 — Identificación y pensamiento divergente
**Prompt (transcripción):**
"Quiero practicar Prototype Chain en JS usando un tema creativo: fútbol. Dame ideas de cómo modelar Person, Player y Team con prototipos y proponme un snippet corto que use Object.create en lugar de class."

**Resultado clave:** diseño con `Person`, `Player` (hereda de Person vía `Object.create`), `Team`. Idea añadida: simulación de partido y eventos de gol con `setTimeout`.

## 3) Fase 2 — Desarrollo y desafío del sesgo (código 'prohibido')
Se implementó la idea original de forma intencionada *no estándar*:
- Sin `class`.
- Sin `map()`.
- Uso de callbacks para operaciones asincrónicas.

Archivo: `phase2_code.js`.

## 4) Fase 3 — Revisión, evaluación y optimización
Feedback de la IA:
- **Legibilidad:** modularizar funciones, mejores nombres.
- **Bugs:** falta manejo de errores en callbacks.
- **Buenas prácticas:** validaciones, evitar lookups repetidos en la cadena de prototipos.
Sugerencias de optimización:
1. Migrar callbacks a Promises/async-await (mejor manejo de errores y legibilidad).
2. Usar métodos modernos de array (`map`, `reduce`) donde sea adecuado y caché de valores si hay costosas operaciones de prototipo.

Impleméntese en `phase3_code.js`: Promises/async-await y uso de `reduce` para top scorer + validaciones.

## 5) Fase 4 — Presentación y diagrama
Incluí un diagrama SVG (`diagram.svg`) que muestra la cadena de prototipos y el cambio de flujo: callbacks -> Promises.

## Archivos incluidos
- README.md
- phase2_code.js
- phase3_code.js
- diagram.svg

## Cómo ejecutar
- `node phase2_code.js`  // versión con callbacks
- `node phase3_code.js`  // versión con Promises / async-await


Prompt Fase 1 (pensamiento divergente):
Quiero practicar Prototype Chain en JavaScript usando Fútbol como tema. Dame 3 ideas creativas para modelar Person, Player y Team con prototipos (sin class), y sugiere un pequeño snippet que use Object.create y demuestre herencia.


Prompt Fase 2 (desafío al sesgo / restricciones):
Elige la idea más original y genera el código pero rompe con las prácticas estándar: 
- No usar class 
- No usar map(), filter() ni sort()
- Usar callbacks en lugar de async/await o Promises para manejar la simulación asincrónica.
Genera un snippet completo, con demo de ejecución.


Prompt Fase 3 (revisión y optimización):
Revisa el código anterior. Indica problemas de legibilidad, bugs potenciales y sugiere al menos 2 optimizaciones que mejoren eficiencia o legibilidad. Implementa los cambios y entrega el código optimizado.


Conclusión:
El ejercicio de diseñar la solución con Object.create y prescindir de class me obligó a repensar la herencia prototípica en JS: entender cómo y dónde se resuelven métodos en la cadena de prototipos. 
Implementar la versión "prohibida" (callbacks y bucles manuales) mostró riesgos reales: manejo de errores y casos borde. La refactorización a Promises/async-await mejoró la legibilidad y robustez;
el uso de métodos como reduce aumentó claridad y expresividad. En resumen, romper con la práctica estándar fue didáctico, y la optimización confirmó por qué las prácticas modernas son preferibles en producción.
