import React from 'react';
import logo from './logo.svg';
import './App.css';

import ThemeContext from "./ThemeContext";

function App() {
  
  const theme = "light";

  return (
    <ThemeContext.provider value={theme}>

    </ThemeContext.provider>
  );
}

export default App;
