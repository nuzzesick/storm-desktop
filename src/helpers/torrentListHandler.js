const torrentListHandler = (activeFilter, torrentsList) => {
  if (torrentsList) {
    if (activeFilter === 'all') {
      return torrentsList;
    } else if (activeFilter === 'downloading') {
      return torrentsList.filter((torrent) => !torrent.paused);
    } else if (activeFilter === 'seeding') {
      return torrentsList.filter((torrent) => !torrent.paused && torrent.done);
    } else if (activeFilter === 'paused') {
      return torrentsList.filter((torrent) => torrent.paused);
    } else if (activeFilter === 'completed') {
      return torrentsList.filter((torrent) => torrent.done);
    }
  }
};

export default torrentListHandler;
