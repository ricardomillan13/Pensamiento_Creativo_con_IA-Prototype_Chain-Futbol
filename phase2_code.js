// phase2_code.js
// Enfoque "prohibido": sin class, usando Object.create, sin map(), usando callbacks para async.

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getBasicInfo = function() {
  return `${this.name}, ${this.age} años`;
};

function Player(name, age, position, goals) {
  // heredar de Person sin usar class
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
  this.players.push(player);
};
Team.prototype.getTopScorer = function() {
  // Sin usar map, filter o sort; hacer bucle manual
  var top = null;
  for (var i = 0; i < this.players.length; i++) {
    var p = this.players[i];
    if (!top || p.goals > top.goals) top = p;
  }
  return top;
};

// Simulación asincrónica "prohibida": callbacks
function simulateMatch(homeTeam, awayTeam, minutes, callback) {
  var elapsed = 0;
  function tick() {
    elapsed += 10; // cada tick = 10 minutos
    // simple random event: 20% prob de gol
    if (Math.random() < 0.2) {
      // elegir equipo y jugador con bucles
      var team = Math.random() < 0.5 ? homeTeam : awayTeam;
      var idx = Math.floor(Math.random() * team.players.length);
      var player = team.players[idx];
      player.score();
      // llamar callback de evento
      callback(null, { event: 'goal', team: team.name, player: player.name, minute: elapsed });
    }
    if (elapsed < minutes) {
      setTimeout(tick, 50); // acelerar simulación
    } else {
      // partido terminado
      callback(null, { event: 'end', home: homeTeam.name, away: awayTeam.name });
    }
  }
  setTimeout(tick, 50);
}

// Demo
var a = Player('Lionel Messi', 37, 'Delantero', 0);
var b = Player('Kylian Mbappé', 26, 'Delantero', 0);
var c = Player('Kevin De Bruyne', 33, 'Centrocampista', 0);
var d = Player('Virgil van Dijk', 33, 'Defensa', 0);

var teamA = new Team('Azul FC');
teamA.addPlayer(a); teamA.addPlayer(c);
var teamB = new Team('Rojo FC');
teamB.addPlayer(b); teamB.addPlayer(d);

console.log('Comienza simulación (callbacks)...');
simulateMatch(teamA, teamB, 90, function(err, evt) {
  if (err) {
    console.error('Error en simulación:', err);
    return;
  }
  if (evt.event === 'goal') {
    console.log(`[Gol] ${evt.minute}' - ${evt.player} para ${evt.team}`);
  } else if (evt.event === 'end') {
    console.log('Partido finalizado entre', evt.home, 'y', evt.away);
    console.log('Máximo goleador equipo Azul:', teamA.getTopScorer() && teamA.getTopScorer().getProfile());
    console.log('Máximo goleador equipo Rojo:', teamB.getTopScorer() && teamB.getTopScorer().getProfile());
  }
});
