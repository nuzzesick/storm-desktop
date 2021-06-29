import React from 'react';

export const defaultValue = {
  data: { darkThemeIsActive: true, torrentsList: [] },
  actions: { updateAppTheme: () => undefined },
};

const StormContext = React.createContext(defaultValue);

export default StormContext;
