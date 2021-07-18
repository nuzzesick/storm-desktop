import PropTypes from 'prop-types';
import React, { useContext, Fragment } from 'react';
import StormContext from '../../context/Storm.context';
import {
  AllTorrentsIcon,
  DownloadTorrentsIcon,
  PauseTorrentsIcon,
  SeedingTorrentsIcon,
  CompletedTorrentsIcon,
  ListContainer,
  StatusButton,
  StatusButtonActive,
  NavBarContentContainer,
  StatusTextContent,
  TitleTextContent,
} from './Navbar.styles';

const Navbar = ({ activeFilter, setActiveFilter }) => {
  const { actions: { clearTorrentSelection } } = useContext(StormContext);
  const statusList = [
    {
      id: 'all', label: 'All', icon: <AllTorrentsIcon />, active: activeFilter === 'all',
    },
    {
      id: 'downloading', label: 'Downloading', icon: <DownloadTorrentsIcon />, active: activeFilter === 'downloading',
    },
    {
      id: 'seeding', label: 'Seeding', icon: <SeedingTorrentsIcon />, active: activeFilter === 'seeding',
    },
    {
      id: 'paused', label: 'Paused', icon: <PauseTorrentsIcon />, active: activeFilter === 'paused',
    },
    {
      id: 'completed', label: 'Completed', icon: <CompletedTorrentsIcon />, active: activeFilter === 'completed',
    },
  ];

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
    </NavBarContentContainer>
  );
};

Navbar.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default Navbar;
