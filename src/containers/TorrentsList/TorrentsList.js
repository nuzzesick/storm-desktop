import React, { useContext } from 'react';
import StormContext from '../../context/Storm.context';
import {
  AppContent, TorrentsGrid, Content, EmptyState, EmptyTitle, EmptySubtitle,
} from './TorrentsList.styles';
import Loading from '../../components/Loading/Loading';
import EmptyStateIcon from './EmptyStateIcon';
import TorrentCard from '../../components/TorrentCard/TorrentCard';

const TorrentsList = () => {
  const { data: { torrentsList } } = useContext(StormContext);
  const isLoading = torrentsList === null;
  const userHasTorrents = torrentsList && torrentsList.length > 0;
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
      <TorrentsGrid>
        {
          torrentsList.map((torrent) => (
            <TorrentCard torrent={torrent} key={`torrent-${torrent.infoHash}`} />
          ))
        }
      </TorrentsGrid>
    </AppContent>
  );
};

export default TorrentsList;
