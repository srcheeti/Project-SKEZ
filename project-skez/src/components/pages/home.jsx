import React from 'react';
import styles from './home.module.css' // Make sure the file is named 'home.module.css'
import map from '../../assets/map.png'

function Home() {
    return (
        <div className={styles['map-container']}>
            <h1 style={{ textAlign: "Left" }}>Availability Map</h1>
            <img src={map} className="image" alt="logo" />
        </div>
    );
}

export default Home;
