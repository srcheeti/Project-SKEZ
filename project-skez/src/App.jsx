import { useState, useEffect } from 'react';
import React from 'react';
import Background from './components/background/background'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'

const App = () => {
  let heroData = [
    { text1: "", text2: "" },
    { text1: "", text2: "" },
    { text1: "", text2: "" },
  ]
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  }, [])

  return (
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
    </div>
  )
}

export default App



