import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../Images/Parmar_logo.svg";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="nav_bar">
      <img src={logo} alt="Logo" />

      <ul className={`nav__elements ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={toggleMenu}>HOME</NavLink></li>
        <li><NavLink to="/company" onClick={toggleMenu}>COMPANY</NavLink></li>
        <li><NavLink to="/products" onClick={toggleMenu}>PRODUCTS</NavLink></li>
        <li><NavLink to="/event" onClick={toggleMenu}>EVENT</NavLink></li>
        <li><NavLink to="/download" onClick={toggleMenu}>DOWNLOAD</NavLink></li>
        <li><NavLink to="/videos" onClick={toggleMenu}>VIDEOS</NavLink></li>
        <li id="contact-me"><NavLink to="/contact" onClick={toggleMenu}>CONTACT</NavLink></li>

        {/* Show Login/Signup or Logout button based on authentication */}
        {!isAuthenticated ? (
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </>
        ) : (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
