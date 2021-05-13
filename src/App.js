import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import Home from './components/Home';

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
    </>
  );
}

export default App;
