class Enemy {
  constructor(hp, shield = 0) { //No value set
    this.hp = hp;
    this.shield = shield;
  }
  getHealth() {
    return this.hp
  }
  getShield() {
    return this.shield
  }
};


// Fallen

const minorDreg = new Enemy (10);
const majorDreg = new Enemy (20);

const minorVandal = new Enemy (25);
const majorVandal = new Enemy (50);

const minorCaptain = new Enemy (30, 10); // Arc Shield
const majorCaptain = new Enemy (60, 20);
const ultraCaptain = new Enemy (90, 30);

// Hive

const minorThrall = new Enemy(5);
const majorThrall = new Enemy(10);

const minorAcolyte = new Enemy(15);
const majorAcolyte = new Enemy(30);

const minorWizard = new Enemy(25, 15); // Solar Shield
const majorWizard = new Enemy(50, 30);
const ultraWizard = new Enemy(75, 45);

const minorKnight = new Enemy(30);
const majorKnight = new Enemy(60);
const ultraKnight = new Enemy(90);

// Cabal

const minorLegionary = new Enemy(20);
const majorLegionary = new Enemy(40);

const minorPsion = new Enemy(15);
const majorPsion = new Enemy(30);

const minorCollosus = new Enemy(30);
const majorCollosus = new Enemy(60);
const ultraCollosus = new Enemy(90);

const minorCenturion = new Enemy(30, 15); // Solar Shield
const majorCenturion = new Enemy(60, 30);
const ultraCenturion = new Enemy(00, 45);

// Vex

const minorGoblin = new Enemy(10);
const majorGoblin = new Enemy(20);

const minorHobgoblin = new Enemy(15);
const majorHobgoblin = new Enemy(30);

const minorMinotaur = new Enemy(30, 15); // Void Shield
const majorMinotaur = new Enemy(60, 30);
const ultraMinotaur = new Enemy(90, 45);