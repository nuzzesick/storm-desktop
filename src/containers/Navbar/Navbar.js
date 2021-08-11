import PropTypes from 'prop-types';
import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import StormContext from '../../context/Storm.context';
import { statusList as list } from './Navbar.utils';
import {
  ListContainer,
  StatusButton,
  StatusButtonActive,
  NavBarContentContainer,
  StatusTextContent,
  TitleTextContent,
  SettingsButton,
  SettingsIcon,
} from './Navbar.styles';

const Navbar = ({ activeFilter, setActiveFilter }) => {
  const { actions: { clearTorrentSelection } } = useContext(StormContext);
  const statusList = list(activeFilter);

  return (
    <NavBarContentContainer onClick={clearTorrentSelection}>
      <ListContainer>
        <TitleTextContent>STATUS</TitleTextContent>
        {statusList.map((item) => (
          <Fragment key={`status-${item.id}`}>
            {
              item.active ? (
                <StatusButtonActive
                  type="button"
                  onClick={() => {
                    setActiveFilter(item.id);
                  }}
                >
                  {item.icon}
                  <StatusTextContent>{item.label}</StatusTextContent>
                </StatusButtonActive>
              ) : (
                <StatusButton
                  type="button"
                  onClick={() => {
                    setActiveFilter(item.id);
                  }}
                >
                  {item.icon}
                  <StatusTextContent>{item.label}</StatusTextContent>
                </StatusButton>
              )
            }
          </Fragment>
        ))}
      </ListContainer>
      <SettingsButton>
        <Link to="/settings">
          <SettingsIcon />
          Settings
        </Link>
      </SettingsButton>
    </NavBarContentContainer>
  );
};

Navbar.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default Navbar;
