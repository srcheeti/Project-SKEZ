//Availibility Map
import React, { useState } from "react";
import map from '../../assets/map.png';
import styles from './map.css';
import { Button } from 'react-native';


const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593",
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457",
    },
};






function Map() {
    return (
        <div className={styles['map-container']}>
            <h1 style={{ textAlign: "Left" }}>Availability Map</h1>
            <img src={map} className="image" alt="logo" />
            <a href="https://react.school/" target="_blank">
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </a>
        </div>
    );
}
export default Map;