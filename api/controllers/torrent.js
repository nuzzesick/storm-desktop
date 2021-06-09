/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const WebTorrent = require('webtorrent-hybrid');
const {
  filePath, recoverClient, updateTorrentOnJSON, deleteTorrentFromJSON,
} = require('../utils');

const WebTorrentClient = new WebTorrent();

const client = recoverClient(WebTorrentClient);

const downloadTorrent = (req, res, next) => new Promise((resolve) => {
  try {
    const { id: torrentId } = req.query;
    const { path } = req.headers;
    client.add(torrentId, { path: path || 'downloads' }, () => {
      updateTorrentOnJSON(torrentId, path || 'downloads', false);
      res.status(200);
      res.json({
        status: 'ok',
        message: 'Torrent downloading',
      });
      resolve();
      next();
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
    res.status(200);
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
      deleteTorrentFromJSON(torrentId);
      res.status(200);
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
      deleteTorrentFromJSON(torrentId);
      res.status(200);
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

const pauseTorrent = (req, res, next) => new Promise((resolve) => {
  try {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    const { path } = torrent;
    client.remove(torrentId, () => {
      updateTorrentOnJSON(torrentId, path, true);
      res.status(200);
      res.json({
        status: 'ok',
        message: 'Torrent paused',
      });
      resolve();
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
});

const getAllTorrents = (req, res, next) => new Promise((resolve) => {
  try {
    const dataFile = fs.readFileSync(filePath);
    const torrentsList = JSON.parse(dataFile);
    res.status(200);
    res.json(torrentsList);
    resolve();
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = {
  downloadTorrent, getInfo, deleteTorrent, deleteTorrentAndFiles, pauseTorrent, getAllTorrents,
};
