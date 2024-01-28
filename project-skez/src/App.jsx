import Background from './components/background/background'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import { useState } from 'react';

const App = () => {
  let heroData = [
    { text1: "Study", text2: "freely" },
    { text1: "Collaborate", text2: "with others" },
    { text1: "Ace", text2: "your academics" },
  ]
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        herCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App




