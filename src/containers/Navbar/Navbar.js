import PropTypes from 'prop-types';
import React from 'react';
import { Logo } from '../../components';
import { SettingsIcon } from '../../icons';
import './navbar.css';

const Navbar = ({ darkTheme }) => (
  <div className={`navbar ${darkTheme ? 'blackNavbar' : 'whiteNavbar'}`}>
    <div className="navbarContent">
      <Logo width={50} />
      <button type="button" className="settings-btn">
        <SettingsIcon width={20} />
        Settings
      </button>
    </div>
  </div>
);

Navbar.propTypes = {
  darkTheme: PropTypes.string.isRequired,
};

export default Navbar;
