// goblin.js
export class Goblin {
    constructor() {
        this.health = 50;
        this.mana = 10; // If using mana for goblins
        this.xp = 20;
        this.abilities = [/* List goblin abilities here */];
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
    }
}
