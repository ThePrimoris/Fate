// abilities.js
export const swordSlash = (attacker, target) => {
    const damage = 10; // Static damage for simplicity
    if (!target.isDefending) {
        target.takeDamage(damage);
    } else {
        target.resetDefense();
    }
    return `Sword slash deals ${damage} damage to ${target.name}`;
};

export const defend = (player) => {
    player.defend();
    return `${player.name} is defending against the next attack.`;
};
