// player.js
export class Player {
    constructor(health, mana, level, abilities) {
        this.health = health;
        this.mana = mana;
        this.level = level;
        this.abilities = abilities;
    }

    // Method to receive damage
    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
    }

    // Method to defend against next attack
    defend() {
        this.isDefending = true;
    }

    // Reset defense state
    resetDefense() {
        this.isDefending = false;
    }
}
