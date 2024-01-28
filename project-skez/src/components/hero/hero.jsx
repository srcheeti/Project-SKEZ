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
        <p>About Us</p>
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