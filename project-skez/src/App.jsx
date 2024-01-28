import { useState, useEffect } from 'react';
import Background from './components/background/background'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'

import Home from './components/home/home'
import Home from './components/reserve/reserve'
//import Home from './components//home'

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

let ScrollLink = Scroll.Link;

const App = () => {
  let heroData = [
    { text1: "Study", text2: "freely" },
    { text1: "Collaborate", text2: "with others" },
    { text1: "Ace", text2: "your academics" },
  ]
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  }, [])

  return (
    <Router>
      <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
        <ul>
          <li><ScrollLink to="section1" smooth={true}>Go to Section 1</ScrollLink></li>
          <li><ScrollLink to="section2" smooth={true}>Go to Section 2</ScrollLink></li>
        </ul>

        <Route path="/section1" component={Section1} />
        <Route path="/section2" component={Section2} />
      </div>
    </Router>
  )
}

class Section1 extends React.Component {
  render() {
    return (
      <div id="section1">
        <h2>Section 1</h2>
        <p>This is Section 1.</p>
      </div>
    );
  }
}

class Section2 extends React.Component {
  render() {
    return (
      <div id="section2">
        <h2>Section 2</h2>
        <p>This is Section 2.</p>
      </div>
    );
  }
}

export default App;





