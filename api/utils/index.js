const fs = require('fs');
const pathSystem = require('path');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const extractFrames = require('ffmpeg-extract-frames');

// File where all the torrents (as an array) will be stored
const filePath = pathSystem.join(__dirname, '../../data.json');

const recoverClient = (client) => {
  const recoveredClient = client;
  // Create the file if it does not exists
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  // Read the content of the file
  let dataFile = fs.readFileSync(filePath);
  dataFile = JSON.parse(dataFile);
  // Add torrents that were ever downloaded to client
  Object.assign(recoveredClient, { oldTorrents: dataFile });
  // If torrent was not paused or stopped then has to be added to the client again
  recoveredClient.oldTorrents.forEach((torrent) => {
    if (!torrent.paused) {
      recoveredClient.add(torrent.id, { path: torrent.path });
    }
  });
  return recoveredClient;
};

const updateTorrentOnJSON = (name, torrentId, length, path, paused, date, done, progress) => {
  const dataFile = fs.readFileSync(filePath);
  let torrentsList = JSON.parse(dataFile);
  // Check if torrent already exists on JSON file
  const foundTorrent = torrentsList.some((torrent) => torrent.id === torrentId);
  // If torrent does not exists then we add it to the JSON, else then we updated it
  if (foundTorrent) {
    torrentsList = torrentsList.filter((torrent) => torrent.id !== torrentId);
  }
  torrentsList.push({
    name, id: torrentId, length, path, paused, date, done, progress,
  });
  fs.writeFileSync(filePath, JSON.stringify(torrentsList));
};

const deleteTorrentFromJSON = (torrentId) => {
  let dataFile = fs.readFileSync(filePath);
  dataFile = JSON.parse(dataFile);
  const filteredTorrent = dataFile.filter((torrent) => torrent.id !== torrentId);
  fs.writeFileSync(filePath, JSON.stringify(filteredTorrent));
};

const getTorrentOnJSON = (torrentId) => {
  let dataFile = fs.readFileSync(filePath);
  dataFile = JSON.parse(dataFile);
  return dataFile.filter((torrent) => torrent.id === torrentId);
};

const returnJSON = (req, res, next, code, status, message) => {
  res.status(code);
  res.json({
    status,
    message,
  });
  next();
};

const checkIfFileIsCreated = (file) => fs.existsSync(file);

const getFullPath = (file) => pathSystem.resolve(file);

const takeVideoScreenshot = async (videoFolder, name, output) => {
  try {
    return await extractFrames({
      input: videoFolder,
      output: `${output}/${name}-video-screenshot.jpg`,
      offsets: [
        200000,
      ],
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  filePath,
  recoverClient,
  updateTorrentOnJSON,
  deleteTorrentFromJSON,
  getTorrentOnJSON,
  returnJSON,
  checkIfFileIsCreated,
  takeVideoScreenshot,
  getFullPath,
};
