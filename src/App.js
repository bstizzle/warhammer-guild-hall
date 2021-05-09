import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import Home from './components/Home';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className="app-container">
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/sheet'>
        <CharacterSheet />
      </Route>
    </ThemeProvider>
    </div>
  );
}

export default App;
