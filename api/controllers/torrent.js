/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const WebTorrent = require('webtorrent-hybrid');

const client = new WebTorrent();

const downloadTorrent = (req, res, next) => new Promise((resolve) => {
  try {
    const { id: torrentId } = req.query;
    client.add(torrentId, { path: 'downloads' }, (torrent) => {
      client.on('torrent', () => {
        resolve();
        next();
      });
    });
  } catch (error) {
    console.log(error);
    next();
  }
});

const getInfo = (req, res, next) => new Promise((resolve) => {
  try {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    const {
      created, createdBy, numPeers, progress, path: pathname,
      ready, uploadSpeed, downloadSpeed, timeRemaining, done,
    } = torrent;
    const torrentName = torrent.files[0]._torrent.name;
    const folder = `${pathname}/${torrentName}`;
    res.json({
      created,
      createdBy,
      numPeers,
      progress,
      folder,
      ready,
      uploadSpeed,
      downloadSpeed,
      timeRemaining,
      done,
    });
    resolve();
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

const deleteTorrent = (req, res, next) => new Promise((resolve) => {
  try {
    const { id: torrentId } = req.query;
    client.remove(torrentId, () => {
      res.json({
        status: 'ok',
        message: 'Torrent deleted',
      });
      resolve();
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
});

const deleteTorrentAndFiles = (req, res, next) => new Promise((resolve) => {
  try {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    const { path: pathname } = torrent;
    const torrentName = torrent.files[0]._torrent.name;
    const folder = `${pathname}/${torrentName}`;
    client.remove(torrentId);
    fs.rmdir(folder, { recursive: true }, (err) => {
      if (err) throw err;
      res.json({
        status: 'ok',
        message: 'Torrent and files deleted',
      });
      resolve();
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = {
  downloadTorrent, getInfo, deleteTorrent, deleteTorrentAndFiles,
};
