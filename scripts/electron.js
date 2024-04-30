const { app, BrowserWindow, Menu } = require('electron');

// Create the main window
function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 900,
        icon: 'Coin.ico',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

// Create an empty menu template
const menuTemplate = [];

// Set the custom menu template
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

// Event listeners for app
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
