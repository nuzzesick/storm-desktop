import React from 'react';

import { Toolbar } from '../../containers/toolbar/Toolbar.component';
import { TorrentDetails } from '../../containers/torrent-details/TorrentDetails';

import { HomePageContainer } from './Home.styles';

const Home = () => (
  <HomePageContainer>
    <Toolbar />
    <TorrentDetails />
  </HomePageContainer>
);

export default Home;
