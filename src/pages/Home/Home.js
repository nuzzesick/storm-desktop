import React, { useContext } from 'react';

import { Toolbar } from '../../containers/toolbar/Toolbar.component';

import StormContext from '../../context/Storm.context';

import { HomePageContainer } from './Home.styles';

const Home = () => {
  const stormContext = useContext(StormContext);

  return (
    <HomePageContainer>
      <Toolbar />
      <button
        type="button"
        onClick={stormContext.actions.updateIsTorrentSelected}
      >
        Select/deselect torrent
      </button>
    </HomePageContainer>
  );
};

export default Home;
