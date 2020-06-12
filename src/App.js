import React from 'react';

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
