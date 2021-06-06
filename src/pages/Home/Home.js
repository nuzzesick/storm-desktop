import React from 'react';

import { Toolbar } from '../../containers/toolbar/Toolbar.component';
import { TorrentDetails } from '../../containers/torrent-details/TorrentDetails';
import { ClientTorrentsTable } from '../../components/client-torrents-table/ClientTorrentsTable';

import { HomePageContainer } from './Home.styles';

const Home = () => (
  <HomePageContainer>
    <Toolbar />
    <ClientTorrentsTable />
    {/* <AnimatedGradient>Seeding</AnimatedGradient> */}
    <TorrentDetails />
  </HomePageContainer>
);

export default Home;
