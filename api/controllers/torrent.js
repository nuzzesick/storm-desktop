/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const WebTorrent = require('webtorrent');
const {
  filePath,
  recoverClient,
  updateTorrentOnJSON,
  deleteTorrentFromJSON,
  getTorrentOnJSON,
} = require('../utils');

const WebTorrentClient = new WebTorrent();

let client;

recoverClient(WebTorrentClient)
  .then((recoveredClient) => {
    client = recoveredClient;
  });

const downloadTorrent = (req, res, next) => {
  try {
    const { id: torrentId } = req.query;
    const { path } = req.body;
    client.add(torrentId, { path: path || 'downloads' }, (t) => {
      const date = new Date();
      updateTorrentOnJSON(t.name, torrentId, t.length, path || 'downloads', false, date);
      res.status(200);
      res.json({
        status: 'ok',
        message: 'Torrent downloading',
      });
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const getInfo = (req, res, next) => {
  try {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    const {
      name, created, createdBy, numPeers, progress, path: pathname, length, ratio,
      ready, uploadSpeed, downloadSpeed, timeRemaining, done,
    } = torrent;
    const torrentName = torrent.files[0]._torrent.name;
    const folder = `${pathname}/${torrentName}`;
    res.status(200);
    res.json({
      name,
      created,
      createdBy,
      numPeers,
      progress,
      folder,
      length,
      ratio,
      ready,
      uploadSpeed,
      downloadSpeed,
      timeRemaining,
      done,
    });
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

const deleteTorrent = (req, res, next) => {
  try {
    const { id: torrentId } = req.query;
    client.remove(torrentId, () => {
      deleteTorrentFromJSON(torrentId);
      res.status(200);
      res.json({
        status: 'ok',
        message: 'Torrent deleted',
      });
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const deleteTorrentAndFiles = (req, res, next) => {
  const deleteSystemFiles = (folder, torrentId) => {
    fs.rmdir(folder, { recursive: true }, (err) => {
      if (err) throw err;
      deleteTorrentFromJSON(torrentId);
      res.status(200);
      res.json({
        status: 'ok',
        message: 'Torrent and files deleted',
      });
      next();
    });
  };
  try {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    let folder;
    if (!torrent) {
      const previousTorrent = getTorrentOnJSON(torrentId);
      if (previousTorrent.length > 0) {
        client.add(torrentId, { path: previousTorrent[0].path }, (newTorrent) => {
          const { path: pathname } = newTorrent;
          const torrentName = newTorrent.files[0]._torrent.name;
          folder = `${pathname}/${torrentName}`;
          client.remove(torrentId);
          deleteSystemFiles(folder, torrentId);
        });
      } else {
        res.status(404);
        res.json({
          status: 'error',
          message: 'Torrent does not exists',
        });
      }
    } else {
      const { path: pathname } = torrent;
      const torrentName = torrent.files[0]._torrent.name;
      folder = `${pathname}/${torrentName}`;
      client.remove(torrentId);
      deleteSystemFiles(folder, torrentId);
    }
  } catch (error) {
    console.log(error);
    next();
  }
};

const pauseTorrent = (req, res, next) => {
  try {
    const { id: torrentId } = req.query;
    const torrent = client.get(torrentId);
    const { path } = torrent;
    client.remove(torrentId, (t) => {
      const date = new Date();
      updateTorrentOnJSON(t.name, torrentId, t.length, path, true, date);
      res.status(200);
      res.json({
        status: 'ok',
        message: 'Torrent paused',
      });
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const getAllTorrents = () => {
  const dataFile = fs.readFileSync(filePath);
  const torrentsInJSON = dataFile && JSON.parse(dataFile);
  let areTorrentsPaused = false;
  let torrentsList = [];
  try {
    if (torrentsInJSON && torrentsInJSON.length > 0) {
      torrentsInJSON.forEach((t) => {
        if (!t.paused) {
          const torrent = client.get(t.id);
          const torrentDate = t.date;
          if (torrent.ready) {
            const {
              name, created, createdBy, numPeers, progress, path: pathname, infoHash,
              length, magnetURI, ratio, ready, uploadSpeed, downloadSpeed, timeRemaining, done,
            } = torrent;
            const torrentName = torrent.files[0] && torrent.files[0]._torrent.name;
            const folder = `${pathname}/${torrentName}`;
            torrentsList.push({
              name,
              created,
              createdBy,
              numPeers,
              progress,
              folder,
              infoHash,
              length,
              magnetURI,
              ratio,
              ready,
              uploadSpeed,
              downloadSpeed,
              timeRemaining,
              date: torrentDate,
              done,
              paused: false,
            });
          }
        } else {
          torrentsList.push({
            name: t.name,
            date: t.date,
            length: t.length,
            paused: true,
          });
          areTorrentsPaused = true;
        }
      });
    } else {
      torrentsList = [];
    }
  } catch (error) {
    console.log('error');
  }
  if (torrentsList.length === client.torrents.length && !areTorrentsPaused) return torrentsList;
  if (areTorrentsPaused) return torrentsList;
  return null;
};

module.exports = {
  downloadTorrent, getInfo, deleteTorrent, deleteTorrentAndFiles, pauseTorrent, getAllTorrents,
};
