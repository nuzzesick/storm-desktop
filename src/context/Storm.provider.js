import PropTypes from 'prop-types';
import React, { useState } from 'react';

import StormContext from './Storm.context';

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

StormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StormProvider;
