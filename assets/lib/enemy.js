    class Enemy {
        constructor(hp, shield = 0) {
            this.hp = hp
            this.shield = shield

        }
    }

    // Fallen

     const Dreg = new Enemy(10)
     const Vandal = new Enemy(25)
     const Captain = new Enemy(50, 15) // Arc Shield
     const Servitor = new Enemy(75)

    // Hive

    const Thrall = new Enemy(10)
    const Acolyte = new Enemy(25)
    const Wizard = new Enemy(50, 15) // Solar Shield
    const Knight = new Enemy(75)

    // Cabal

    const Legionary = new Enemy(10)
    const Psion = new Enemy(25)
    const Collosus = new Enemy(50)
    const Centurion = new Enemy(75, 25) // Solar Shield

    // Vex

    const Goblin = new Enemy(10)
    const Hobgoblin = new Enemy(25)
    const Minotaur = new Enemy(50, 15) // Void Shield
    const Hydra = new Enemy(75)