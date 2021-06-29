/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { Navbar, Toolbar, Table } from '../../containers';
import { HomePageContainer } from './Home.styles';

const Home = () => (
  <Fragment>
    <Navbar />
    <HomePageContainer>
      <Toolbar />
      <Table />
    </HomePageContainer>
  </Fragment>
);

export default Home;
