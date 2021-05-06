import React from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Header from './components/Header';
import Home from './components/Home';
// import HTMLFlipBook from 'react-pageflip';

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

//junk code for potential PageFlip implementation
/* <HTMLFlipBook
  width={300}
  height={300}
  flippingTime={2000}
  size="stretch"
  showCover={false}
>
  <div className="demo-page" pagedensity="soft">
    Page1
  </div>
  <div className="demo-page" pagedensity="soft">
    <Home />
  </div>
  <div className="demo-page" pagedensity="soft">
    <CharacterSheet />
  </div>
</HTMLFlipBook> */
