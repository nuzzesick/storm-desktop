import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Settings } from './pages';
import './App.css';

import StormProvider from './context/Storm.provider';

const App = () => (
  <Router>
    <StormProvider>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/settings" exact>
            <Settings />
          </Route>
        </Switch>
      </div>
    </StormProvider>
  </Router>
);

export default App;
