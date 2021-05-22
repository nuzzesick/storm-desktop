import React from 'react';

export const defaultValue = {
  data: { darkThemeIsActive: true, isTorrentSelected: false },
  actions: {
    updateAppTheme: () => undefined,
    updateIsTorrentSelected: () => undefined,
  },
};

const StormContext = React.createContext(defaultValue);

export default StormContext;
