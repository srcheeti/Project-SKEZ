import './background.css'

import image1 from '../../assets/in-minskoff.jpeg'
import image2 from '../../assets/minskoff.jpg'
import image3 from '../../assets/teamroom.jpeg'

const background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='background' autoplay loop muted>
                {/*<source src={video1} type='video/mp4'/>*/}
            </video>
        )
    }
    else if (heroCount === 0) {
        return <img src={image1} className='background' alt="" />
    }
    else if (heroCount === 1) {
        return <img src={image2} className='background' alt="" />
    }
    else if (heroCount === 2) {
        return <img src={image3} className='background' alt="" />
    }
}

export default background