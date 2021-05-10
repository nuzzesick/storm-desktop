import React, { useState } from 'react';
import { Navbar } from './containers';
import './App.css';

const App = () => {
  const currentTheme = localStorage.getItem('dark');
  const [darkTheme, setDarkTheme] = useState(currentTheme);
  console.log(setDarkTheme);
  return (
    <div className="App">
      <Navbar darkTheme={darkTheme} />
    </div>
  );
};

export default App;
