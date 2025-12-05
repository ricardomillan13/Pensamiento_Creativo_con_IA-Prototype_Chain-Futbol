// phase3_code.js
// Código mejorado: Promises / async-await y uso de reduce para top scorer.
// Mantuvimos prototipos (sin class) pero con mejor manejo de errores y modularidad.

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getBasicInfo = function() {
  return `${this.name}, ${this.age} años`;
};

function Player(name, age, position, goals) {
  const obj = Object.create(Player.prototype);
  Person.call(obj, name, age);
  obj.position = position;
  obj.goals = goals || 0;
  return obj;
}
Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;
Player.prototype.score = function() {
  this.goals += 1;
  return this.goals;
};
Player.prototype.getProfile = function() {
  return `${this.getBasicInfo()} - ${this.position} (goles: ${this.goals})`;
};

function Team(name) {
  this.name = name;
  this.players = [];
}
Team.prototype.addPlayer = function(player) {
  if (!player || !player.name) throw new Error('Jugador inválido');
  this.players.push(player);
};
Team.prototype.getTopScorer = function() {
  if (this.players.length === 0) return null;
  // usar reduce para claridad y eficiencia
  return this.players.reduce(function(top, p) {
    return (!top || p.goals > top.goals) ? p : top;
  }, null);
};

// Simulación con Promises
function simulateMatchAsync(homeTeam, awayTeam, minutes) {
  return new Promise((resolve, reject) => {
    if (!homeTeam || !awayTeam) return reject(new Error('Equipos inválidos'));
    if (!Array.isArray(homeTeam.players) || !Array.isArray(awayTeam.players)) return reject(new Error('Estructura de equipos inválida'));
    var elapsed = 0;
    function tick() {
      elapsed += 10;
      if (Math.random() < 0.2) {
        const team = Math.random() < 0.5 ? homeTeam : awayTeam;
        if (team.players.length === 0) {
          // ignorar evento de gol si no hay jugadores
        } else {
          const idx = Math.floor(Math.random() * team.players.length);
          const player = team.players[idx];
          player.score();
          console.log(`[Gol] ${elapsed}' - ${player.name} para ${team.name}`);
        }
      }
      if (elapsed < minutes) {
        setTimeout(tick, 50);
      } else {
        resolve({
          home: homeTeam.name,
          away: awayTeam.name,
          topHome: homeTeam.getTopScorer() && homeTeam.getTopScorer().getProfile(),
          topAway: awayTeam.getTopScorer() && awayTeam.getTopScorer().getProfile()
        });
      }
    }
    setTimeout(tick, 50);
  });
}

// Demo async/await
(async function demo() {
  try {
    const a = Player('Lionel Messi', 37, 'Delantero', 0);
    const b = Player('Kylian Mbappé', 26, 'Delantero', 0);
    const c = Player('Kevin De Bruyne', 33, 'Centrocampista', 0);
    const d = Player('Virgil van Dijk', 33, 'Defensa', 0);

    const teamA = new Team('Azul FC');
    teamA.addPlayer(a); teamA.addPlayer(c);
    const teamB = new Team('Rojo FC');
    teamB.addPlayer(b); teamB.addPlayer(d);

    console.log('Comienza simulación (async/await)...');
    const result = await simulateMatchAsync(teamA, teamB, 90);
    console.log('Partido finalizado entre', result.home, 'y', result.away);
    console.log('Máximo goleador equipo Azul:', result.topHome);
    console.log('Máximo goleador equipo Rojo:', result.topAway);
  } catch (e) {
    console.error('Error en demo:', e);
  }
})();
