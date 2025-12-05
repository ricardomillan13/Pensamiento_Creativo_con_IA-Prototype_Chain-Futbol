graph LR
  Person["Person\ngetBasicInfo()"]
  Player["Player\nscore(), getProfile()\n(Object.create(Person.prototype))"]
  Team["Team\nplayers[], addPlayer()"]

  Person --> Player
  Player --> Team

  subgraph Simulación
    A[Callbacks (simulateMatch)] --> B[Eventos: goles]
    B --> C[Callback final]
  end

  subgraph Optimización
    D[Promises / async-await (simulateMatchAsync)]
    D --> E[Mejor manejo de errores]
  end

  B --> D<img width="2347" height="796" alt="Diagrama Mermaid" src="https://github.com/user-attachments/assets/a7593ea3-e1a2-4508-b954-c3a2519a5886" />
