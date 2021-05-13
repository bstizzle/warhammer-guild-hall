import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import Home from './components/Home';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

import { Button, Row, Col } from 'antd';

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
    <>
    <div className="app-container">
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Row>
        <Col span={24}>
        <Header />
        </Col>
      </Row>
      <Button type="primary" onClick={toggleTheme}>Toggle Theme</Button>
      <Row>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/sheet'>
        <CharacterSheet />
      </Route>
      </Row>
    </ThemeProvider>
    </div>
    </>
  );
}

export default App;
