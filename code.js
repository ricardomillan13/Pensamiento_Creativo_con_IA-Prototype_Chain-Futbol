// Prototype Chain + Fútbol - Código final optimizado

// ===== PROTOTIPO BASE =====
const jugadorBase = {
  nombre: "Sin nombre",
  correr() {
    return `${this.nombre} corre a ${this.velocidad} km/h`;
  },
  getStats() {
    // Método centralizado para mostrar stats base (extensible)
    const base = `Stats de ${this.nombre}: Velocidad ${this.velocidad}`;
    // Adjunta stats especializadas si existen
    if (this.precision !== undefined) return base + `, Precisión ${this.precision}`;
    if (this.reflejos !== undefined) return base + `, Reflejos ${this.reflejos}`;
    return base;
  }
};

// ===== PROTOTIPOS ESPECIALIZADOS (sin estado) =====
const delantero = {
  definir() {
    return `${this.nombre} dispara con precisión ${this.precision}/100`;
  }
};

const portero = {
  atajar() {
    return `${this.nombre} ataja con reflejos ${this.reflejos}/100`;
  }
};

// ===== INSTANCIAS PLANAS =====
const mbappe = { nombre: "Mbappé", velocidad: 38, precision: 93 };
const courtois = { nombre: "Courtois", velocidad: 28, reflejos: 96 };

// ===== ENLACE MANUAL DE PROTOTYPE CHAIN =====
// NOTA: enlazamos prototipos primero, luego las instancias al prototipo correcto.
Object.setPrototypeOf(delantero, jugadorBase);
Object.setPrototypeOf(portero, jugadorBase);
Object.setPrototypeOf(mbappe, delantero);
Object.setPrototypeOf(courtois, portero);

// ===== USO / DEMOSTRACIÓN =====
console.log(mbappe.correr());       // método heredado de jugadorBase
console.log(mbappe.definir());      // método propio de delantero
console.log(mbappe.getStats());     // método común que consolida stats

console.log(courtois.correr());     // heredado
console.log(courtois.atajar());     // propio de portero
console.log(courtois.getStats());   // stats consolidados
