// app.js
// import { openModal } from './utils/modal-handler.js';
import { totalSlots, addSlot, resetSlots, loadGameState, saveGameState } from './controllers/game-state-manager.js';
import { coinData, addCoins } from './controllers/currency-manager.js';
import { createInventorySlots } from './controllers/inventory-manager.js';
import { buyExtraInventorySlot, sellWoodLogs } from './controllers/shop-controller.js';

document.addEventListener('DOMContentLoaded', function() {
    const addCoinsButton = document.getElementById('addCoinsDebug');
    if (addCoinsButton) {
        addCoinsButton.addEventListener('click', function() {
            console.log('Before adding coins:', coinData.count);
            addCoins(100);
            console.log('After adding coins:', coinData.count);
            updateStatusMessage("Added 100 Coins!", false);
        });
    } else {
        console.error('Add Coins Debug button not found');
    }

    loadGameState();
    setupUIInteractions();
    updateBuySlotButton();
    setInterval(saveGameState, 10000);
});


function setupUIInteractions() {
    setupNavigationButtons();
    setupActionButtons();
    document.getElementById('statusMessage').style.display = 'none';
}

const sectionDisplayStyles = {
    map: 'block',
    shops: 'block',
    inventory: 'grid'
};

function setupNavigationButtons() {
    const sections = Object.keys(sectionDisplayStyles);
    sections.forEach(section => {
        const btn = document.getElementById(`${section}Btn`);
        if (!btn) {
            console.error(`${section} button not found`);
        } else {
            btn.addEventListener('click', () => {
                sections.forEach(sec => {
                    const element = document.getElementById(sec);
                    if (element) {
                        element.style.display = (sec === section) ? sectionDisplayStyles[sec] : 'none';
                    }
                });
            });
        }
    });
}

function setupActionButtons() {
    const clearStorageBtn = document.getElementById('clearStorageBtn');
    const buySlotBtn = document.getElementById('buyExtraSlot');
    const sellLogsBtn = document.getElementById('sellWoodLogs');

    // Listener for clearing storage and resetting the game
    clearStorageBtn.addEventListener('click', function() {
        localStorage.clear();
        updateStatusMessage("Game has been reset.", false);
        loadGameState();
        updateBuySlotButton();
    });

    // Listener for buying extra inventory slots
    buySlotBtn.addEventListener('click', function() {
        const result = buyExtraInventorySlot();
        updateStatusMessage(result.message, !result.success);
        if (result.success) {
            createInventorySlots(); // Update inventory slots if the purchase is successful
            updateBuySlotButton();  // Update the button text after purchasing a slot
        }
    });

    // Listener for selling logs
    sellLogsBtn.addEventListener('click', function() {
        const result = sellWoodLogs();
        updateStatusMessage(result.message, !result.success);
        if (result.success) {
            createInventorySlots(); // Update inventory slots if logs are successfully sold
        }
    });
}

function updateBuySlotButton() {
    const buySlotBtn = document.getElementById('buyExtraSlot');
    if (totalSlots === 0) {
        buySlotBtn.textContent = 'Get a Free Inventory Slot';
    } else {
        buySlotBtn.textContent = 'Buy Extra Inventory Slots';
    }
}

function updateStatusMessage(message, isError) {
    const messageElement = document.getElementById('statusMessage');
    if (!messageElement) {
        console.error('Status message element not found');
        return;
    }

    // Set the message and color based on the error status
    messageElement.textContent = message;
    messageElement.style.color = isError ? 'red' : 'green';

    // Ensure the message is visible and fully opaque initially
    messageElement.style.opacity = '1';
    messageElement.style.display = 'flex'; // Use flex to keep alignment as set in CSS

    // Start a timeout to fade out the message after 4.5 seconds
    setTimeout(() => {
        // Fade out effect
        messageElement.style.opacity = '0';

        // Wait for the fade-out to finish before setting display to none
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 500); // This matches the CSS transition duration of 0.5 seconds
    }, 4500); // Total visible duration is 5 seconds, starts fading at 4.5 seconds
}

