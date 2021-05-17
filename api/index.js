const express = require('express');
const WebTorrent = require('webtorrent-hybrid');

const server = express();
const port = 3000;

const client = new WebTorrent();

server.get('/download', (req, res, next) => {
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

server.get('/info', (req, res, next) => {
  const getTorrentInfo = () => new Promise((resolve) => {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    const {
      created, createdBy, numPeers, progress, path: pathname, ready, uploadSpeed, downloadSpeed,
      timeRemaining, done,
    } = torrent;
    res.json({
      created,
      createdBy,
      numPeers,
      progress,
      pathname,
      ready,
      uploadSpeed,
      downloadSpeed,
      timeRemaining,
      done,
    });
    resolve();
  });
  getTorrentInfo().then(() => { next(); });
});

server.listen(port, () => {
  console.log(`Storm server running at http://localhost:${port}`);
});
