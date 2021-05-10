import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components';
import { SettingsIcon } from '../../icons';
import './navbar.css';

const Navbar = ({ darkTheme }) => (
  <div className={`navbar ${darkTheme ? 'blackNavbar' : 'whiteNavbar'}`}>
    <div className="navbarContent">
      <Link to="/">
        <Logo width={50} />
      </Link>
      <Link className="settingsBtn" to="/settings">
        <SettingsIcon width={20} />
        Settings
      </Link>
    </div>
  </div>
);

Navbar.propTypes = {
  darkTheme: PropTypes.string.isRequired,
};

export default Navbar;
