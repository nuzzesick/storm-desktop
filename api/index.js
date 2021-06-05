const express = require('express');
// Routes
const {
  DOWNLOAD_TORRENT_ROUTE, GET_INFO_TORRENT_ROUTE,
  DELETE_TORRENT_ROUTE, DELETE_TORRENT_AND_FILES_ROUTE, PAUSE_TORRENT, RESUME_TORRENT,
} = require('./routes/torrent');
// Controllers
const {
  downloadTorrent, getInfo, deleteTorrent, deleteTorrentAndFiles, pauseTorrent, resumeTorrent,
} = require('./controllers/torrent');

const app = express();
const port = 8000;

const server = () => {
  app.get(DOWNLOAD_TORRENT_ROUTE, downloadTorrent);

  app.get(GET_INFO_TORRENT_ROUTE, getInfo);

  app.get(DELETE_TORRENT_ROUTE, deleteTorrent);

  app.get(DELETE_TORRENT_AND_FILES_ROUTE, deleteTorrentAndFiles);

  app.get(PAUSE_TORRENT, pauseTorrent);

  app.get(RESUME_TORRENT, resumeTorrent);

  app.listen(port, () => {
    console.log(`Storm server running at http://localhost:${port}`);
  });
};

module.exports = { server };
