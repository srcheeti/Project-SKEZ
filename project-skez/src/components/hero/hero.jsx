import './hero.css'
import PropTypes from 'prop-types';

const Hero = ({ heroData, setHeroCount, heroCount }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore Our Study Spaces</p>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heroData: PropTypes.shape({
    text1: PropTypes.string,
    text2: PropTypes.string,
  }),
  setHeroCount: PropTypes.func,
  heroCount: PropTypes.number,
};

export default Hero