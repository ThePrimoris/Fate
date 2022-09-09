$(document).ready(function() {
    class Enemy {
        constructor(hp, shield, atk) {
            this.hp = 0;
            this.shield = 0;
            this.atk = 0;
        }
    }

    class Dreg {
        constructor (hp, atk, xp) {
            super ()
            this.hp = 25;
            this.atk = 5;
        }
    }

    class Vandal {
        constructor (hp, atk, xp) {
            super ()
            this.hp = 50;
            this.atk = 10;
        }
    }

    class Captain {
        constructor (hp, atk, xp) {
            super ()
            this.hp = 200;
            this.shield = 15;
            this.atk = 15;
        }
    }

    let n = Math.floor(Math.random() * (100 - 0 + 1) + 0)
    let hp = 0
    if (n < 75) { hp = 25 } 
    else if (n < 90) { hp = 50 }
    else if (n < 98) { hp = 100 }
    else { hp = 200 }

    let enemy = new Enemy(hp, 100, 25);
});