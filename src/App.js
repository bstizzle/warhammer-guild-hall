import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  return (
    <div className="app-container">
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/sheet'>
        <CharacterSheet />
      </Route>
    </div>
  );
}

export default App;
