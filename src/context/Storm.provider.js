import React, { useState } from 'react';

import StormContext from './Storm.context';

// eslint-disable-next-line react/prop-types
const StormProvider = ({ children }) => {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(true);

  const updateAppTheme = () => {
    setDarkThemeIsActive(!darkThemeIsActive);
  };

  const providerValue = {
    data: {
      darkThemeIsActive,
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

export default StormProvider;
