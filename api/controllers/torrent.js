/* eslint-disable no-underscore-dangle */
const fs = require('fs');

const WebTorrent = require('webtorrent');
// const createATorrent = require('create-torrent');
const {
  filePath,
  recoverClient,
  updateTorrentOnJSON,
  deleteTorrentFromJSON,
  getTorrentOnJSON,
} = require('../utils');

const WebTorrentClient = new WebTorrent();

const client = recoverClient(WebTorrentClient);

const downloadTorrent = (req, res, next) => {
  try {
    const { id: torrentId, path } = req.body;
    const torrentExists = client.get(torrentId);
    if (!torrentExists) {
      client.add(torrentId, { path }, (t) => {
        const date = new Date();
        updateTorrentOnJSON(t.name, t.magnetURI, t.length, path, false, date, t.done, t.progress);
        res.status(200);
        res.json({
          status: 'ok',
          message: 'Torrent downloading',
        });
        next();
      });
    } else {
      res.status(400);
      res.json({
        status: 'error',
        message: 'Torrent already exists',
      });
      next();
    }
  } catch (error) {
    console.log(error);
    next();
  }
};

const deleteTorrent = (req, res, next) => {
  try {
    const { id: torrentId } = req.body;
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
    const { id: torrentId } = req.body;
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
    const { id: torrentId } = req.body;
    const torrent = client.get(torrentId);
    const { progress, done, path } = torrent;
    client.remove(torrentId, () => {
      const date = new Date();
      updateTorrentOnJSON(
        torrent.name,
        torrent.magnetURI,
        torrent.length,
        path,
        true,
        date,
        done,
        progress,
      );
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

const createTorrent = (req, res, next) => {
  try {
    const { file } = req.body;
    // To do
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
            id: t.id,
            name: t.name,
            date: t.date,
            length: t.length,
            paused: true,
            done: t.done,
            progress: t.progress,
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
  downloadTorrent,
  deleteTorrent,
  deleteTorrentAndFiles,
  pauseTorrent,
  createTorrent,
  getAllTorrents,
};
