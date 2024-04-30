// game-state-manager.js
import { coinData, updateCoinDisplay } from './currency-manager.js';
import { inventoryItems, createInventorySlots } from './inventory-manager.js';

export let totalSlots = 0; // Start with no inventory slots

export function incrementSlots() {
    totalSlots++;
    createInventorySlots();  // Make sure to update the UI whenever slots are added
    saveGameState();         // Optionally save the new state immediately
}

export function addSlot() {
    totalSlots++;
    createInventorySlots();
}

export function resetSlots() {
    totalSlots = 0;
    createInventorySlots();
}

export function saveGameState() {
    localStorage.setItem('coinCount', coinData.count);
    console.log('Saved coin count:', coinData.count);

    localStorage.setItem('totalSlots', totalSlots);  // Save the total number of inventory slots
    localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));

    console.log(`Saving game state: ${totalSlots} total slots.`);
}

export function loadGameState() {
    const storedCoinCount = parseInt(localStorage.getItem('coinCount')) || 0;
    coinData.count = storedCoinCount;
    console.log('Loaded coin count:', coinData.count);
    updateCoinDisplay();

    const storedTotalSlots = parseInt(localStorage.getItem('totalSlots')) || 0; // Default to 0 if not found
    totalSlots = storedTotalSlots;
    console.log(`Loaded game state: ${totalSlots} total slots from storage.`);

    const storedInventory = JSON.parse(localStorage.getItem('inventoryItems')) || [];
    inventoryItems.length = 0; // Clear current inventory
    storedInventory.forEach(item => inventoryItems.push(item)); // Restore saved inventory
    createInventorySlots();
}

export function resetGameState() {
    localStorage.clear();
    coinData.count = 0;
    updateCoinDisplay();
    totalSlots = 0;  // Reset total inventory slots to default
    inventoryItems = []; // Reset inventory
    createInventorySlots();
    console.log(`Game has been reset. Total slots reset to ${totalSlots}.`);
    alert("Game has been reset.");
}