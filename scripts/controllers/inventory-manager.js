import { totalSlots } from './game-state-manager.js';

export let inventoryItems = [];  // Initialize as empty

document.addEventListener('DOMContentLoaded', () => {
    // Initialize inventoryItems here to ensure totalSlots is defined
    inventoryItems = new Array(totalSlots).fill(null);
    createInventorySlots();
});

export function createInventorySlots() {
    const inventory = document.getElementById('inventory');
    if (!inventory) {
        console.error('Inventory element not found');
        return;
    }
    inventory.innerHTML = '';

    for (let i = 0; i < totalSlots; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        const item = inventoryItems[i];
        if (item) {
            const img = document.createElement('img');
            img.src = `images/${item.name}.png`;
            img.alt = item.name;
            slot.appendChild(img);

            const span = document.createElement('span');
            span.textContent = ` x${item.count}`;
            slot.appendChild(span);
        } else {
            const placeholder = document.createElement('span');
            placeholder.textContent = "Empty Slot";
            placeholder.style.visibility = "hidden";
            slot.appendChild(placeholder);
        }
        inventory.appendChild(slot);
    }
}

export function addItem(item) {
    const emptyIndex = inventoryItems.findIndex(it => it === null);
    if (emptyIndex !== -1) {
        inventoryItems[emptyIndex] = item;
        createInventorySlots();
    } else {
        console.error('No empty slots available to add new item');
    }
}

export function addSlot() {
    totalSlots++;
    inventoryItems.push(null);  // Ensure the slots array matches the totalSlots count
    createInventorySlots();
}

export function clearInventory() {
    inventoryItems.fill(null);
    createInventorySlots();
}
