const fs = require('fs');

const recoverClient = (client) => {
  const recoveredClient = client;
  // File where all the torrents (as an array) will be stored
  const filePath = './data.json';
  // Create the file if it does not exists
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  // Read the content of the file
  let dataFile = fs.readFileSync(filePath);
  dataFile = JSON.parse(dataFile);
  // Add to the WebTorrent client the torrents that were ever downloaded
  Object.assign(recoveredClient, { oldTorrents: dataFile });
  recoveredClient.oldTorrents.forEach((t) => {
    // If torrent was not paused then has to be added to the client again
    if (!t.paused) {
      recoveredClient.add(t.id, { path: t.path });
    }
  });
  return recoveredClient;
};

module.exports = { recoverClient };
