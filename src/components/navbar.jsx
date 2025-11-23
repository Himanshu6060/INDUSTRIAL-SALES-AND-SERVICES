import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        {/* <h2>SALES & SERVICES</h2> */}
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/"> Home</Link>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <Link id="btn" to="/contact">Contact Us</Link>
      </div>

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
