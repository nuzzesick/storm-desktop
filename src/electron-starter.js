const { app, BrowserWindow } = require('electron');
const path = require('path');
const { server } = require('../api/index');

server();

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, '/../build/index.html'));
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
