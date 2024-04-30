// currency-manager.js
export let coinData = {
    count: 0
};

export function updateCoinDisplay() {
    const coinCountElement = document.getElementById('coin-count');
    if (coinCountElement) {
        coinCountElement.textContent = coinData.count.toString();
    } else {
        console.error('Coin count display element not found');
    }
}

// Ensure other necessary functions are also exported
export function addCoins(amount) {
    coinData.count += amount;
    updateCoinDisplay();
}

export function removeCoins(amount) {
    if (coinData.count >= amount) {
        coinData.count -= amount;
        updateCoinDisplay();
    } else {
        alert("Not enough coins!");
    }
}
