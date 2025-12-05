# Pensamiento_Creativo_con_IA-Prototype_Chain-Futbol
# Proyecto: Prototype Chain + Fútbol

## Fase 1 — Identificación y pensamiento divergente
**Concepto elegido:** Prototype Chain en JavaScript.  
**Motivación:** Entender cómo fluye la resolución de propiedades a través de la cadena, efectos en rendimiento y buenas prácticas sin usar `class`.  
**Tema creativo:** Fútbol —modelar jugadores (Delantero, Portero) mediante prototipos.

---

## Fase 2 — Desarrollo y desafío del sesgo
**Restricción "prohibida":** No usar `class`, `Object.create` ni `new`. Construir la cadena de prototipos manualmente con `Object.setPrototypeOf()` y objetos planos.

**Idea:** Crear prototipos desnudos (`jugadorBase`, `delantero`, `portero`), instancias planas (ej. `mbappe`, `courtois`) y enlazarlos manualmente.

---

## Código inicial (ver archivo code.js)

---

## Fase 3 — Revisión y refinamiento / Evaluación
**Evaluación (resumen):**
- Legibilidad: OK, pero riesgo de mezclar estado si prototipos tienen propiedades mutables.
- Bugs potenciales: mutaciones compartidas en prototipos, dependencias implícitas de propiedades en instancias.
- Buenas prácticas faltantes: mantener prototipos sin estado; centralizar utilidades comunes.

**Optimizaciones implementadas:**
1. Mantener prototipos sin estado (solo métodos).
2. Añadir `getStats()` en `jugadorBase` para evitar repetición.

Se implementaron en `code.js`.

---

## Fase 4 — Presentación y colaboración (diagrama)
Incluyo un diagrama Mermaid (`diagram.mmd`) que muestra la cadena de prototipos: `jugadorBase -> delantero/portero -> instancias`.

---

## Conclusión
Forzar la construcción manual de la Prototype Chain aclaró cómo se resuelven propiedades y por qué los prototipos deben ser sin estado. El ejemplo futbolístico facilitó identificar qué pertenece a prototipo vs. instancia.

