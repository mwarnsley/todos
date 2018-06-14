// Require in the required modules
const electron = require('electron');

const { app, BrowserWindow } = electron;

// Setting the main window variable globally
let mainWindow;

// Setting the app ready function for when the app is ready to run
app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`);
});
