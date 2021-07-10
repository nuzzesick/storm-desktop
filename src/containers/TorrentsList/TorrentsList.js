import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import StormContext from '../../context/Storm.context';
import {
  AppContent, TorrentsGrid, Content, EmptyState, EmptyTitle, EmptySubtitle,
} from './TorrentsList.styles';
import Loading from '../../components/Loading/Loading';
import EmptyStateIcon from './EmptyStateIcon';
import TorrentCard from '../../components/TorrentCard/TorrentCard';

const TorrentsList = ({ activeFilter }) => {
  const {
    data:
    { torrentsList },
  } = useContext(StormContext);
  const isLoading = torrentsList === null;
  const userHasTorrents = torrentsList && torrentsList.length > 0;
  const [torrentsToShow, setTorrentsToShow] = useState(torrentsList);
  useEffect(() => {
    if (torrentsList) {
      if (activeFilter === 'all') {
        setTorrentsToShow(torrentsList);
      } else if (activeFilter === 'downloading') {
        setTorrentsToShow(torrentsList.filter((torrent) => !torrent.paused));
      } else if (activeFilter === 'seeding') {
        setTorrentsToShow(torrentsList.filter((torrent) => !torrent.paused && torrent.done));
      } else if (activeFilter === 'paused') {
        setTorrentsToShow(torrentsList.filter((torrent) => torrent.paused));
      } else if (activeFilter === 'completed') {
        setTorrentsToShow(torrentsList.filter((torrent) => torrent.done));
      }
    }
  }, [torrentsList, activeFilter]);
  if (isLoading) {
    return (
      <Content>
        <Loading />
      </Content>
    );
  }
  if (!userHasTorrents) {
    return (
      <Content>
        <EmptyState>
          <EmptyStateIcon />
          <EmptyTitle>No torrents added yet</EmptyTitle>
          <EmptySubtitle>Start adding torrents and join the amazing world of P2P!</EmptySubtitle>
        </EmptyState>
      </Content>
    );
  }
  return (
    <AppContent>
      {
        torrentsToShow && torrentsToShow.length > 0
          && (
          <TorrentsGrid>
            {
              torrentsToShow.map((torrent) => (
                <TorrentCard torrent={torrent} key={`torrent-${torrent.id}`} />
              ))
            }
          </TorrentsGrid>
          )
      }
    </AppContent>
  );
};

TorrentsList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
};

export default TorrentsList;
