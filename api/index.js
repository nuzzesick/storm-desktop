const express = require('express');
// Routes
const { DOWNLOAD_TORRENT_ROUTE, GET_INFO_TORRENT_ROUTE } = require('./routes/torrent');
// Controllers
const { downloadTorrent, getInfo } = require('./controllers/torrent');

const app = express();
const port = 3000;

const server = () => {
  app.get(DOWNLOAD_TORRENT_ROUTE, downloadTorrent);

  app.get(GET_INFO_TORRENT_ROUTE, getInfo);

  app.listen(port, () => {
    console.log(`Storm server running at http://localhost:${port}`);
  });
};

module.exports = { server };
