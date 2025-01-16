import React, { useState } from 'react';

import { NavLink,Link } from 'react-router-dom';
 import logo from './navbar_images/Group 25.svg';
import './Navbar.css'; // Link to your CSS file for navbar styles
import './Navbar_media.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav_bar">
      
      <img src={logo} alt="Logo" />

    
        <ul className={`nav__elements ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" className="active" >HOME</NavLink>
          </li>
          <li>
            <Link to="/company">COMPANY</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/event">EVENT</Link>
          </li>
          <li>
            <Link to="/download">DOWNLOAD</Link>
          </li>
          <li>
            <Link to="/videos">VIDEOS</Link>
          </li>
          <li id='contect-me'>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      
      <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {}
        </div>
    </div>
  );
}

export default Navbar;
