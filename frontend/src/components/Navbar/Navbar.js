import React, { useState } from 'react';
import './media.css'
import { NavLink,Link } from 'react-router-dom';
 import logo from './navbar_images/Group 25.svg';
import './Navbar.css'; // Link to your CSS file for navbar styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      
      <img src={logo} alt="Logo" />

      <div className={`nav_elements ${menuOpen ? 'open' : ''}`}>
        <ul>
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
          <li>
            <Link to="/contact">CONTACT-US</Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {}
        </div>
    </div>
  );
}

export default Navbar;
