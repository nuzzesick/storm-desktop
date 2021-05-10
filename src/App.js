import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Navbar } from './containers';
import { Settings } from './pages';
import './App.css';

const App = () => {
  const currentTheme = localStorage.getItem('dark');
  const [darkTheme, setDarkTheme] = useState(currentTheme);
  console.log(setDarkTheme);
  return (
    <Router>
      <div className="App">
        <Navbar darkTheme={darkTheme} />
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
