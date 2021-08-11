/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import io from 'socket.io-client';

import StormContext from './Storm.context';

const socket = io('http://localhost:8001');

setInterval(() => {
  socket.emit('get:list');
}, 1000);

const StormProvider = ({ children }) => {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(true);
  const [torrentsList, setTorrentsList] = useState(null);
  const [torrentSelected, setTorrentSelected] = useState(null);
  const [torrentSearch, setTorrentSearch] = useState('');
  const [downloadsDirectory, setDownloadsDirectory] = useState(localStorage.getItem('downloads_directory'));

  const updateAppTheme = () => {
    setDarkThemeIsActive(!darkThemeIsActive);
  };

  React.useEffect(() => {
    if (torrentSearch === '') {
      socket.on('set:list', (list) => {
        setTorrentsList(list);
      });
    } else {
      socket.off();
    }
  }, [torrentSearch]);

  const updateTorrentSelected = (value) => {
    setTorrentSelected(value);
  };

  const clearTorrentSelection = () => {
    setTorrentSelected(false);
  };

  const updateTorrentSearch = (value) => {
    setTorrentSearch(value);
    const searchText = value.toUpperCase();
    const wordsMatch = (word) => word.name.toUpperCase().indexOf(searchText) > -1;
    torrentsList.forEach((torrent) => {
      if (wordsMatch(torrent)) {
        torrent.hidden = false;
      } else {
        torrent.hidden = true;
      }
    });
  };

  const changeDownloadsDirectory = () => {
    socket.emit('change:directory');
  };

  socket.on('changed:directory', (folder) => {
    localStorage.setItem('downloads_directory', folder);
    setDownloadsDirectory(folder);
  });

  const providerValue = {
    data: {
      darkThemeIsActive,
      torrentsList,
      torrentSelected,
      torrentSearch,
      socket,
      downloadsDirectory,
    },
    actions: {
      updateAppTheme,
      updateTorrentSelected,
      updateTorrentSearch,
      clearTorrentSelection,
      changeDownloadsDirectory,
    },
  };

  return (
    <StormContext.Provider value={providerValue}>
      {children}
    </StormContext.Provider>
  );
};

StormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StormProvider;
