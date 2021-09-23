/* eslint-disable react/jsx-fragments */
import React, { useState, useContext } from 'react';
import { Navbar, Toolbar, TorrentsList } from '../../containers';
import StormContext from '../../context/Storm.context';
import { HomePageContainer } from './Home.styles';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { actions: { clearTorrentSelection } } = useContext(StormContext);

  return (
    <>
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Toolbar setActiveFilter={setActiveFilter} />
      <HomePageContainer onClick={clearTorrentSelection}>
        <TorrentsList activeFilter={activeFilter} />
      </HomePageContainer>
    </>
  );
};

export default Home;
