import React from 'react';
import './background.css'

import image1 from '../../assets/Broad.png'
import image2 from '../../assets/Main.png'
import image3 from '../../assets/Law.png'

const background = ({ heroCount }) => {
    if (heroCount === 0) {
        return <img src={image1} className='background fade-in' alt="" />
    }
    else if (heroCount === 1) {
        return <img src={image2} className='background fade-in' alt="" />
    }
    else if (heroCount === 2) {
        return <img src={image3} className='background fade-in' alt="" />
    }
}

export default background
