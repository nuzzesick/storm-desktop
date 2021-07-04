import React from 'react';

export const defaultValue = {
  data: {
    darkThemeIsActive: true,
    torrentsList: null,
    isTorrentSelected: false,
    torrentSearch: '',
  },
  actions: {
    updateAppTheme: () => undefined,
    updateIsTorrentSelected: () => undefined,
    updateTorrentSearch: () => undefined,
  },
};

const StormContext = React.createContext(defaultValue);

export default StormContext;
