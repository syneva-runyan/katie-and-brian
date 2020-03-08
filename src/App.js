import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Intro from './blocks/Intro';
import EventInfo from './blocks/EventInfo';
import Nav from './Components/Nav';
import './App.css';
import MasonryGrid from './Components/MasonryGrid';
import shuffle from 'shuffle-array';
import ComingSoon from './Components/ComingSoon';
import OurStory from './blocks/OurStory';
import Accomodations from './blocks/Accomodations';
import WeddingParty from './blocks/WeddingParty';

// example photo gallery images
let images = [];
for(let i = 0; i<= 40; i++){
	images.push(`./images/photo-gallery/${i}.jpg`);
}

shuffle(images);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/event-info">
            <Nav />
            <EventInfo />
          </Route>
          <Route path="/accomodations">
            <Nav />
            <Accomodations />
          </Route>
          <Route path="/wedding-party">
            <Nav />
            <WeddingParty />
          </Route>
          <Route path="/our-story">
            <Nav />
            <OurStory />
          </Route>
          <Route path="/photos">
            <Nav />
            <MasonryGrid breakPoints={[350, 500, 750]} images={images} />
          </Route>
          <Route path="/registry">
            <Nav />
            <ComingSoon />
          </Route>
          <Route path="/things-to-do">
            <Nav />
            <ComingSoon />
          </Route>
          <Route exact path="">
            <Intro />
            <Nav alwaysExpanded />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
