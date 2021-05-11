import PropTypes from 'prop-types';
import React from 'react';
import './settings.css';

const Settings = ({ darkTheme }) => (
  <div className={`pageContainer ${darkTheme ? 'darkBackground' : 'whiteBackground'}`}>
    <h1>Settings</h1>
  </div>
);

Settings.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default Settings;
