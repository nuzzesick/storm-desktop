// Server
const express = require('express');
const cors = require('cors');
// eslint-disable-next-line no-underscore-dangle
require('events').EventEmitter.prototype._maxListeners = 100;
// Routes
const {
  DOWNLOAD_TORRENT_ROUTE,
  DELETE_TORRENT_ROUTE,
  DELETE_TORRENT_AND_FILES_ROUTE,
  PAUSE_TORRENT,
  CREATE_TORRENT,
} = require('./routes/torrent');
  // Controllers
const {
  downloadTorrent,
  deleteTorrent,
  deleteTorrentAndFiles,
  pauseTorrent,
  getAllTorrents,
  createTorrent,
  checkIfTorrentIsValid,
} = require('./controllers/torrent');

const app = express();

// Ports
const port = 8000;

const server = (io, dialog) => {
  app.use(express.json());

  app.use(cors());

  app.post(DOWNLOAD_TORRENT_ROUTE, downloadTorrent);

  app.post(DELETE_TORRENT_ROUTE, deleteTorrent);

  app.post(DELETE_TORRENT_AND_FILES_ROUTE, deleteTorrentAndFiles);

  app.post(PAUSE_TORRENT, pauseTorrent);

  app.post(CREATE_TORRENT, createTorrent);

  io.on('connection', (socket) => {
    socket.on('get:list', () => {
      const listOfTorrents = getAllTorrents();
      socket.emit('set:list', listOfTorrents);
    });
    socket.on('check:valid-torrent', async (torrentId) => {
      const isTorrentValid = await checkIfTorrentIsValid(torrentId);
      socket.emit('set:valid-torrent', isTorrentValid);
    });
    socket.on('set:directory', async () => {
      const folder = await dialog.showOpenDialog({ properties: ['openDirectory'] });
      socket.emit('get:folder', folder.filePaths[0]);
    });
  });

  app.listen(port, () => {
    console.log(`Storm server running at http://localhost:${port}`);
  });
};

module.exports = { server };
