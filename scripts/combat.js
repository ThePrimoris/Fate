import { Player } from './player.js';
import { swordSlash, defend } from './abilities.js';
import { Goblin } from './goblin.js';
import { useAbility } from './combatManager.js';
import { closeModal, openModal } from './modal.js';
import { updateUI } from './uiController.js';

// Initialize player and enemy
let player = new Player(100, 50, 1, { swordSlash, defend });
let currentEnemy = new Goblin();

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').addEventListener('click', function() {
        closeModal('goblinCamp');
    });

    updateUI();
});

function useAbility(abilityName) {
    if (player.abilities[abilityName]) {
        const result = player.abilities[abilityName](player, currentEnemy);
        updateCombatLog(result);
        updateHealthBars();
        enemyTurn();
    }
}

function enemyTurn() {
    // Simple enemy logic
    if (currentEnemy.health > 0) {
        const enemyAction = currentEnemy.basicAttack(player);
        updateCombatLog(`${currentEnemy.name} attacks for ${enemyAction.damage} damage.`);
        updateHealthBars();
        checkCombatEnd();
    }
}

function checkCombatEnd() {
    if (currentEnemy.health <= 0) {
        updateCombatLog("Enemy defeated!");
        closeModal('goblinCampModal');
    } else if (player.health <= 0) {
        updateCombatLog("Player defeated!");
        closeModal('goblinCampModal');
    }
}

function updateCombatLog(message) {
    const log = document.getElementById('combatLog');
    log.innerHTML += `<p>${message}</p>`;
}

function updateHealthBars() {
    document.getElementById('playerHealth').textContent = player.health;
    document.getElementById('enemyHealth').textContent = currentEnemy.health;
}