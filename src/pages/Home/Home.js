/* eslint-disable react/jsx-fragments */
import React, { useState, Fragment } from 'react';
import { Navbar, TopBar, Table } from '../../containers';
import { HomePageContainer } from './Home.styles';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  return (
    <Fragment>
      <Navbar />
      <HomePageContainer>
        <TopBar activeFilter={activeFilter} setActiveFilte={setActiveFilter} />
        <Table />
      </HomePageContainer>
    </Fragment>
  );
};

export default Home;
