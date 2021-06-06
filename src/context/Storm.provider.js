import PropTypes from 'prop-types';
import React, { useState } from 'react';

import StormContext from './Storm.context';

const StormProvider = ({ children }) => {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(true);
  const [isTorrentSelected, setIsTorrentSelected] = useState(false);
  const [torrentSearch, setTorrentSearch] = useState(null);

  const updateAppTheme = () => {
    setDarkThemeIsActive(!darkThemeIsActive);
  };

  const updateIsTorrentSelected = () => {
    setIsTorrentSelected(!isTorrentSelected);
  };

  const updateTorrentSearch = (value) => {
    setTorrentSearch(value);
  };

  const providerValue = {
    data: {
      darkThemeIsActive,
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
