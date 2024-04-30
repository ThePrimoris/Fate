// combatManager.js
import { Goblin } from './goblin.js';
import { Bugbear } from './bugbear.js';

export class CombatManager {
    constructor(player) {
        this.player = player;
        this.enemies = [];
    }

    loadEnemies() {
        // Example of loading a sequence of enemies
        this.enemies.push(new Goblin(), new Goblin(), new Goblin(), new Bugbear());
    }

    nextEnemy() {
        return this.enemies.shift(); // Get the next enemy in the array
    }
}
