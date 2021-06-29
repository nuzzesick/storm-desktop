import React, { useState } from 'react';
import { Navbar, TopBar, Table } from '../../containers';
import { HomePageContainer } from './Home.styles';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  return (
    <>
      <Navbar />
      <HomePageContainer>
        <TopBar activeFilter={activeFilter} setActiveFilte={setActiveFilter} />
        <Table />
      </HomePageContainer>
    </>
  );
};

export default Home;
