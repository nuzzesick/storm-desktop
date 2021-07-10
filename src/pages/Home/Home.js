/* eslint-disable react/jsx-fragments */
import React, { Fragment, useState, useContext } from 'react';
import { Navbar, Toolbar, TorrentsList } from '../../containers';
import StormContext from '../../context/Storm.context';
import { HomePageContainer } from './Home.styles';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const {
    data:
    { torrentSelected },
    actions: { clearTorrentSelection },
  } = useContext(StormContext);
  return (
    <Fragment>
      <Navbar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Toolbar setActiveFilter={setActiveFilter} />
      <HomePageContainer onClick={() => {
        if (torrentSelected) {
          clearTorrentSelection();
        }
      }}
      >
        <TorrentsList
          activeFilter={activeFilter}
        />
      </HomePageContainer>
    </Fragment>
  );
};

export default Home;
