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

// example photo gallery images
let images = [];
for(let i = 0; i< 50; i++){
	images.push(`./images/photo-gallery/${i}.jpg`);
}

shuffle(images);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/event-info" />
          <Route path="/accomodations" />
          <Route path="/wedding-party" />
          <Route path="/our-story" />
          <Route path="/photos" />
          <Route path="/registry" />
          <Route path="/things-to-do" />
          <Route exact path="">
            <Intro />
          </Route>
        </Switch>
        <Nav />
        <Switch>
          <Route path="/event-info">
            <EventInfo />
          </Route>
          <Route path="/accomodations">
            <Accomodations />
          </Route>
          <Route path="/wedding-party">
            <ComingSoon />
          </Route>
          <Route path="/our-story">
            <OurStory />
          </Route>
          <Route path="/photos">
            <MasonryGrid breakPoints={[350, 500, 750]} images={images} />
          </Route>
          <Route path="/registry">
            <ComingSoon />
          </Route>
          <Route path="/things-to-do">
            <ComingSoon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
