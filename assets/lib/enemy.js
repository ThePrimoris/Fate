class Enemy {
  constructor(hp, shield = 0) {
    this.hp = hp;
    this.shield = shield;
  }
}

// Fallen

const Dreg = new Enemy(10);
const Vandal = new Enemy(25);
const Captain = new Enemy(30); // Arc Shield
// const Servitor = new Enemy(30);

// Hive

// const Thrall = new Enemy(5);
// const Acolyte = new Enemy(15);
// const Wizard = new Enemy(25, 15); // Solar Shield
// const Knight = new Enemy(30);

// Cabal

// const Legionary = new Enemy(20);
// const Psion = new Enemy(15);
// const Collosus = new Enemy(30);
// const Centurion = new Enemy(30, 15); // Solar Shield

// Vex

// const Goblin = new Enemy(10);
// const Hobgoblin = new Enemy(15);
// const Minotaur = new Enemy(30, 15); // Void Shield
// const Hydra = new Enemy(50);