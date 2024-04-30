// shop-controller.js
import { coinData, removeCoins } from './currency-manager.js';
import { totalSlots, incrementSlots } from './game-state-manager.js';  // Import totalSlots directly

export function buyExtraInventorySlot() {
    if (totalSlots === 0) {
        incrementSlots();  // The first slot is free and increment slots count
        return { success: true, message: "First inventory slot is free!" };
    }
    
    const slotCost = 100 * totalSlots; // Now the cost is 100 per slot, starting from the second slot (e.g., 100 for the 1st purchased slot)

    if (coinData.count >= slotCost) {
        removeCoins(slotCost);  // Deduct coins based on the calculated cost
        incrementSlots();  // Increment after successful purchase
        return { success: true, message: `Extra inventory slot purchased for ${slotCost} coins!` };
    } else {
        return { success: false, message: `Not enough coins to buy an extra slot! Need ${slotCost} coins.` };
    }
}

export function sellWoodLogs() {
    let logsToSell = inventoryItems.find(item => item.type === "woodLogs");
    if (logsToSell && logsToSell.count > 0) {
        let earnings = logsToSell.count * 10;
        addCoins(earnings);
        logsToSell.count = 0;
        return { success: true, message: "Wood logs sold!", earnings };
    } else {
        return { success: false, message: "No wood logs to sell!" };
    }
}
