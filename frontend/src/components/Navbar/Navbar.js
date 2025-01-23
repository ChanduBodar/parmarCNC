import React, { useState,useEffect } from 'react';

import { NavLink,Link } from 'react-router-dom';
 import logo from './navbar_images/Group 25.svg';
import './Navbar.css'; // Link to your CSS file for navbar styles


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
  useEffect(() => {
    // Get the current URL
    const currentURL = window.location.href;

    // Select all the nav links
    const navLinks = document.querySelectorAll('.nav_bar nav_elements li a');

    // Loop through each link and add the 'active' class if the href matches the current URL
    navLinks.forEach((link) => {
      if (link.href === currentURL) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, []); // Empty dependency array ensures this runs only once after the component mounts


  return (
    <div className="nav_bar">
      
      <img src={logo} alt="Logo" />

    
        <ul className={`nav__elements ${menuOpen ? 'open' : ''}`}>
       
          <li>
            <NavLink to="/" >HOME</NavLink>
          </li>
          <li>
            <NavLink to="/company" >COMPANY</NavLink>
          </li>
          <li>
            <NavLink to="/products"  >PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to="/event" >EVENT</NavLink>
          </li>
          <li>
            <NavLink to="/download" >DOWNLOAD</NavLink>
          </li>
          <li>
            <NavLink to="/videos" >VIDEOS</NavLink>
          </li>
          <li id='contect-me'>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      
      <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {}
        </div>
    </div>
  );
}

export default Navbar;
