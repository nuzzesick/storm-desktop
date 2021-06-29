import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import StormContext from './Storm.context';

// const socket = io('http://localhost:8000');

// setInterval(() => {
//   socket.emit('get:list');
// }, 1000);

const StormProvider = ({ children }) => {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(true);
  const [torrentsList, setTorrentsList] = useState([]);

  const updateAppTheme = () => {
    setDarkThemeIsActive(!darkThemeIsActive);
  };

  // socket.on('return:list', (list) => {
  //   setTorrentsList(list);
  // });

  const providerValue = {
    data: {
      darkThemeIsActive,
      torrentsList,
    },
    actions: {
      updateAppTheme,
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
