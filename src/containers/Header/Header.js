import PropTypes from 'prop-types';
import React from 'react';
import { Logo } from '../../components';
import { SettingsIcon } from '../../icons';
import './header.css';

const Header = ({ darkTheme }) => (
  <div className={`header ${darkTheme ? 'blackHeader' : 'whiteHeader'}`}>
    <div className="headerContent">
      <Logo width={50} />
      <button type="button" className="settings-btn">
        <SettingsIcon width={20} />
        Settings
      </button>
    </div>
  </div>
);

Header.propTypes = {
  darkTheme: PropTypes.string.isRequired,
};

export default Header;
