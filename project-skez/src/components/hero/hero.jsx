import './hero.css'
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const Hero = ({ heroData }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        {/* <Link href="https://docs.google.com/presentation/d/1qiEAvTI8GX9l4nEaqyBldg-AeqQ-NWmx_aacRuZqgbk/edit?usp=sharing">Get Started</Link> */}
        <Link to={'/helloWorld'}>Get Started</Link>
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