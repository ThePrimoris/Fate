$(document).ready(function() {
    class Enemy {
        constructor(hp, atk, xp) {
            this.hp = 0;
            this.atk = 0;
            this.xp = 0;
        }
    }

    class Minor {
        constructor (hp, atk, xp) {
            super ()
            this.hp = 25
        }
    }

    class Major {
        constructor (hp, atk, xp) {
            super ()
            this.hp = 50
        }
    }

    class Boss {
        constructor (hp, atk, xp) {
            super ()
            this.hp = 200
        }
    }

    class DregMinor extends Minor {
        constructor (hp, atk, xp) {
            super ()
            this.hp = 15 + Minor.HP
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