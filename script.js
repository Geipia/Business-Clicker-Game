// Game state
let gameState = {
    balance: 0,
    clickValue: 2.5,
    maxClickValue: 10,
    clickValueIncrement: 0.1,
    enterprises: [],
    investments: [],
    properties: []
};

// Load game state from localStorage
function loadGame() {
    const savedState = localStorage.getItem('businessClickerGame');
    if (savedState) {
        gameState = JSON.parse(savedState);
    }
    updateUI();
}

// Save game state to localStorage
function saveGame() {
    localStorage.setItem('businessClickerGame', JSON.stringify(gameState));
}

// Update UI elements
function updateUI() {
    document.getElementById('balance').textContent = `$${gameState.balance.toFixed(2)}`;
    document.getElementById('clickValue').textContent = `$${gameState.clickValue.toFixed(2)} par clic`;
}

// Handle click on the click area
function handleClick() {
    gameState.balance += gameState.clickValue;
    if (gameState.clickValue < gameState.maxClickValue) {
        gameState.clickValue += gameState.clickValueIncrement;
    }
    updateUI();
    saveGame();
}

// Initialize the game
function init() {
    loadGame();
    document.getElementById('clickArea').addEventListener('click', handleClick);
}

// Start the game
init();