import React from 'react';
import Carousel from './Components/Carousel';
import Nav from './Components/Nav';
import './App.css';
import './Components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Katie and Brian</h1>
      </header>
      <Carousel
        images={['./images/kiss.png', './images/heartWallKiss.png', './images/dance.png']}
      />
      <h4 className="date">September 5, 2020 | Peachtree City, Georgia</h4>
      <Nav />
    </div>
  );
}

export default App;
