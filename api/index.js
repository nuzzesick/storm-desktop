// Server
const express = require('express');
const httpServer = require('http');
const cors = require('cors');
const socketio = require('socket.io');
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
} = require('./controllers/torrent');

const app = express();

// Ports
const port = 8000;
const socketPort = 8001;

const http = httpServer.Server().listen(socketPort);

const io = socketio(http, {
  cors: {
    methods: ['GET', 'POST'],
  },
});

const server = () => {
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
      socket.emit('return:list', listOfTorrents);
    });
  });

  app.listen(port, () => {
    console.log(`Storm server running at http://localhost:${port}`);
  });
};

module.exports = { server };
