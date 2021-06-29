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
  const [torrentsList, setTorrentsList] = useState([]);
  const [isTorrentSelected, setIsTorrentSelected] = useState(false);
  const [torrentSearch, setTorrentSearch] = useState(null);

  const updateAppTheme = () => {
    setDarkThemeIsActive(!darkThemeIsActive);
  };

  socket.on('return:list', (list) => {
    setTorrentsList(list);
  });

  const updateIsTorrentSelected = () => {
    setIsTorrentSelected(!isTorrentSelected);
  };

  const updateTorrentSearch = (value) => {
    setTorrentSearch(value);
  };

  const providerValue = {
    data: {
      darkThemeIsActive,
      torrentsList,
      isTorrentSelected,
      torrentSearch,
    },
    actions: {
      updateAppTheme,
      updateIsTorrentSelected,
      updateTorrentSearch,
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
