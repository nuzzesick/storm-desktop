import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

import StormProvider from './context/Storm.provider';

const App = () => (
  <Router>
    <StormProvider>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </StormProvider>
  </Router>
);

export default App;
