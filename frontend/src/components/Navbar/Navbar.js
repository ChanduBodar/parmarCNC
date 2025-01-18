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
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to change the sidebar width
  const toggleMen = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  return (
    <div className="nav_bar">
      
      <img src={logo} alt="Logo" />

    
        <ul className={`nav__elements ${menuOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" class="close-btn" onclick={toggleMen}>×</a>
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
