const {
  app, BrowserWindow, Menu, dialog,
} = require('electron');
const path = require('path');
const socketio = require('socket.io');
const httpServer = require('http');
const { server } = require('../api/index');

const isMac = process.platform === 'darwin';

const socketPort = 8001;

const http = httpServer.Server().listen(socketPort);

const io = socketio(http, {
  cors: {
    methods: ['GET', 'POST'],
  },
});

server(io, dialog);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    nodeIntegration: false,
    enableRemoteModule: false,
    contextIsolation: true,
    sandbox: true,
  });

  mainWindow.maximize();

  mainWindow.loadFile(path.join(__dirname, '/../build/index.html'));
};

const template = [
  {
    label: 'Application',
    submenu: [{
      label: 'Add new torrent',
      accelerator: 'N',
      click: () => { io.emit('new-torrent'); },
    }],
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' },
          ],
        },
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' },
      ]),
    ],
  },
];

const dockMenu = Menu.buildFromTemplate([
  {
    label: 'Add new torrent',
    click() { io.emit('new-torrent'); },
  },
]);

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady()
  .then(() => {
    if (isMac) {
      app.dock.setMenu(dockMenu);
    }
  })
  .then(() => {
    createWindow();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});
