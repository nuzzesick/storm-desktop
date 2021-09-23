import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import StormContext from '../../context/Storm.context';
import {
  AppContent,
  TorrentsGrid,
  Content,
  EmptyState,
  EmptyTitle,
  EmptySubtitle,
  LoadingContent,
} from './TorrentsList.styles';
import Loading from '../../components/Loading/Loading';
import EmptyStateIcon from './EmptyStateIcon';
import TorrentCard from '../../components/TorrentCard/TorrentCard';
import when from '../../helpers/when';
import torrentListHandler from '../../helpers/torrentListHandler';

const TorrentsList = ({ activeFilter }) => {
  const {
    data: { torrentsList },
  } = useContext(StormContext);
  const isLoading = torrentsList === null;
  const userHasTorrents = torrentsList && torrentsList.length > 0;
  const [torrentsToShow, setTorrentsToShow] = useState(torrentsList);

  useEffect(() => {
    setTorrentsToShow(torrentListHandler(activeFilter, torrentsList));
  }, [torrentsList, activeFilter]);

  return (
    <>
      {when(isLoading)(
        <Content>
          <LoadingContent>
            <Loading />
          </LoadingContent>
        </Content>
      )}

      {when(!userHasTorrents && !isLoading)(
        <Content>
          <EmptyState>
            <EmptyStateIcon />
            <EmptyTitle>No torrents added yet</EmptyTitle>
            <EmptySubtitle>
              Start adding torrents and join the amazing world of P2P!
            </EmptySubtitle>
          </EmptyState>
        </Content>
      )}

      {when(!isLoading)(
        <AppContent>
          {torrentsToShow && torrentsToShow.length > 0 && (
            <TorrentsGrid className="torrents">
              {torrentsToShow.map((torrent) => (
                <TorrentCard
                  torrent={torrent}
                  key={`torrent-${torrent.magnetURI}`}
                />
              ))}
            </TorrentsGrid>
          )}
        </AppContent>
      )}
    </>
  );
};

TorrentsList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
};

export default TorrentsList;
