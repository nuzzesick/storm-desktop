const WebTorrent = require('webtorrent-hybrid');

const client = new WebTorrent();

const downloadTorrent = (req, res, next) => new Promise((resolve) => {
  try {
    const { id: torrentId } = req.query;
    client.add(torrentId, { path: 'downloads' }, (torrent) => {
      client.on('torrent', () => {
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
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = { downloadTorrent, getInfo };
