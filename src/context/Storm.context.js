import React from 'react';

export const defaultValue = {
  data: { darkThemeIsActive: true },
  actions: { updateAppTheme: () => undefined },
};

const StormContext = React.createContext(defaultValue);

export default StormContext;
