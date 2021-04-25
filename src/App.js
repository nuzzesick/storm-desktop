import React, { useState } from 'react';
import { Header } from './containers';
import './App.css';

const App = () => {
  const currentTheme = localStorage.getItem('dark');
  const [darkTheme, setDarkTheme] = useState(currentTheme);
  return (
    <div className="App">
      <Header darkTheme={darkTheme} />
    </div>
  );
};

export default App;
