
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Styles.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">SA.</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="nav-socials">
        <a href="https://www.linkedin.com/in/sharon-awuor-313b582a2/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Sharonne24" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/nerdybaine/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </header>
  );
};

export default Navbar;
