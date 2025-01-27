import React, { useState,useEffect } from 'react';

import { NavLink} from 'react-router-dom';
 import logo from '../../Images/Parmar_logo.svg';
import './Navbar.css'; // Link to your CSS file for navbar styles


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    
    const currentURL = window.location.href;


    const navLinks = document.querySelectorAll('.nav_bar nav_elements li a');


    navLinks.forEach((link) => {
      if (link.href === currentURL) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, []); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  




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
            <NavLink to="/contact">CONTACTUS</NavLink>
          </li>
        </ul>
      
      <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {}
        </div>
    </div>
  );
}

export default Navbar;
