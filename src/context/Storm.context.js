import React from 'react';

export const defaultValue = {
  data: {
    darkThemeIsActive: true,
    isTorrentSelected: false,
    torrentSearch: null,
  },
  actions: {
    updateAppTheme: () => undefined,
    updateIsTorrentSelected: () => undefined,
    updateTorrentSearch: () => undefined,
  },
};

const StormContext = React.createContext(defaultValue);

export default StormContext;
