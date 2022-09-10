    class Enemy {
        constructor(hp, atk, shield = 0) {
            this.hp = hp
            this.shield = shield
            this.atk = atk
        }
    }

    class Dreg extends Enemy {
        constructor (hp, atk, shield) {
            super (hp, atk, shield)
        }
    }

    class Vandal extends Enemy {
        constructor (hp, atk, shield) {
            super (hp, atk, shield)
        }
    }

    class Captain extends Enemy {
        constructor (hp, atk, shield) {
            super (hp, atk, shield)
        }
    }