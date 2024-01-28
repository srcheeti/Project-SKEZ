import Background from './components/background/background'
import Navbar from './components/navbar/navbar'

import { useState } from 'react';

const App = () => {
  let heroData = [
    { text1: "Study", text2: "freely" },
    { text1: "Relax", text2: "completely" },
    { text1: "Ace", text2: "your academics" },
  ]
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  )
}

export default App




