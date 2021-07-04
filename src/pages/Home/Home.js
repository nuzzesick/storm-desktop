/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { Navbar, Toolbar, TorrentsList } from '../../containers';
import { HomePageContainer } from './Home.styles';

const Home = () => (
  <Fragment>
    <Navbar />
    <HomePageContainer>
      <Toolbar />
      <TorrentsList />
    </HomePageContainer>
  </Fragment>
);

export default Home;
