import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">SSB</div>
      <div className="nav">Spartan Study Buddies</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Groups</li>
        <li>Reserve</li>
      </ul>
    </div>
  )
}

export default Navbar;

