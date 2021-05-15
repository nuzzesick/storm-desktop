const express = require('express');
const WebTorrent = require('webtorrent-hybrid');

const app = express();
const port = 3000;

const client = new WebTorrent();

app.get('/download', (req, res, next) => {
  const startTorrent = () => new Promise((resolve) => {
    const { id: torrentId } = req.query;
    client.add(torrentId, { path: 'downloads' }, (torrent) => {
      client.on('torrent', () => {
        const { progress } = torrent;
        res.json({ progress });
        resolve();
      });
    });
  });
  startTorrent().then(() => { next(); });
});

app.get('/info', (req, res, next) => {
  const getTorrentInfo = () => new Promise((resolve) => {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    const {
      created, createdBy, numPeers, progress, path, ready, uploadSpeed, downloadSped, timeRemaining,
    } = torrent;
    res.json({
      created, createdBy, numPeers, progress, path, ready, uploadSpeed, downloadSped, timeRemaining,
    });
    resolve();
  });
  getTorrentInfo().then(() => { next(); });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
