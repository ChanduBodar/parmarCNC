import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/Parmar_logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (menuOpen && !e.target.closest('.nav_bar')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('click', closeMenu);
    
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <div className={`nav_bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Parmar Logo" className="logo" />
      </div>
      
      <ul className={`nav__elements ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>HOME</NavLink></li>
        <li><NavLink to="/company" onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>COMPANY</NavLink></li>
        <li><NavLink to="/products" onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>PRODUCTS</NavLink></li>
        <li><NavLink to="/event" onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>EVENT</NavLink></li>
        <li><NavLink to="/download" onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>DOWNLOAD</NavLink></li>
        <li><NavLink to="/videos" onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>VIDEOS</NavLink></li>
        <li id="contact-me"><NavLink to="/contact" onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>CONTACT</NavLink></li>
      </ul>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;