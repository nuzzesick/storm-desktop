/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const parseTorrent = require('parse-torrent');

const WebTorrent = require('webtorrent');
// const createATorrent = require('create-torrent');
const {
  filePath,
  recoverClient,
  updateTorrentOnJSON,
  deleteTorrentFromJSON,
  getTorrentOnJSON,
  returnJSON,
} = require('../utils');

const WebTorrentClient = new WebTorrent();

const client = recoverClient(WebTorrentClient);

const checkIfTorrentIsValid = (torrentId) => new Promise((resolve) => {
  try {
    parseTorrent(torrentId);
    resolve(torrentId);
  } catch {
    parseTorrent.remote(torrentId, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(torrentId);
      }
    });
  }
});

const downloadTorrent = (req, res, next) => {
  try {
    const { id: torrentId, path } = req.body;
    const torrentWasAdded = client.get(torrentId);
    if (!torrentWasAdded) {
      client.add(torrentId, { path }, (t) => {
        const date = new Date();
        updateTorrentOnJSON(t.name, t.magnetURI, t.length, path, false, date, t.done, t.progress);
        returnJSON(req, res, next, 200, 'ok', 'Torrent downloading');
      });
    } else {
      returnJSON(req, res, next, 400, 'error', 'Torrent was already added');
    }
  } catch (error) {
    returnJSON(req, res, next, 400, 'error', 'Unexpected error');
  }
};

const deleteTorrent = (req, res, next) => {
  try {
    const { id: torrentId } = req.body;
    client.remove(torrentId, () => {
      deleteTorrentFromJSON(torrentId);
      returnJSON(req, res, next, 200, 'ok', 'Torrent deleted');
    });
  } catch (error) {
    returnJSON(req, res, next, 400, 'error', 'Unexpected error');
  }
};

const deleteTorrentAndFiles = (req, res, next) => {
  const deleteSystemFiles = (folder, torrentId) => {
    fs.rmdir(folder, { recursive: true }, (err) => {
      if (err) throw err;
      deleteTorrentFromJSON(torrentId);
      returnJSON(req, res, next, 200, 'ok', 'Torrent and files deleted');
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
        returnJSON(req, res, next, 404, 'error', 'Torrent does not exists');
      }
    } else {
      const { path: pathname } = torrent;
      const torrentName = torrent.files[0]._torrent.name;
      folder = `${pathname}/${torrentName}`;
      client.remove(torrentId);
      deleteSystemFiles(folder, torrentId);
    }
  } catch (error) {
    returnJSON(req, res, next, 400, 'error', 'Unexpected error');
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
      returnJSON(req, res, next, 200, 'ok', 'Torrent paused');
    });
  } catch (error) {
    returnJSON(req, res, next, 400, 'error', 'Unexpected error');
  }
};

const createTorrent = (req, res, next) => {
  try {
    // To do
    // const { file } = req.body;
  } catch (error) {
    returnJSON(req, res, next, 400, 'error', 'Unexpected error');
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
  } catch {
    return null;
  }
  if (torrentsList.length === client.torrents.length && !areTorrentsPaused) return torrentsList;
  if (areTorrentsPaused) return torrentsList;
  return null;
};

module.exports = {
  checkIfTorrentIsValid,
  downloadTorrent,
  deleteTorrent,
  deleteTorrentAndFiles,
  pauseTorrent,
  createTorrent,
  getAllTorrents,
};
