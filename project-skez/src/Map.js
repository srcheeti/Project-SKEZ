//Availibility Map
import React, { useState } from "react";
import map from './assets/map.png';
import styles from './Map.css';

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

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

function clickMe() {
  alert("You clicked me!");
}

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;



function Map() {
  return (
    <div className={styles['map-container']}>
      <h1 style={{ textAlign: "Left" }}>Availability Map</h1>
      <img src={map} className="image" alt="logo" />
      <a href="https://react.school" target="_blank">
        <Button>Link</Button>
      </a>
    </div>
  );
}
export default Map;