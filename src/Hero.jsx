import React from 'react';
import './Styles.css';


const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-left">
          <div className="name-container">
            <h1>Sharon</h1>
            <h1>Awuor.</h1>
          </div>
          <p className="social-links">
            <a href="https://www.instagram.com/nerdybaine/" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://www.linkedin.com/in/sharon-awuor-313b582a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href="https://github.com/Sharonne24" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          </p>
          <a href="#contact" className="btn-primary">Contact Me</a>
        </div>
        <div className="hero-center">
          <img src="path-to-your-image.jpg" alt="Sharon Awuor" className="hero-image" />
        </div>
        <div className="hero-right">
          <div className="intro">
            <h2>Introduction</h2>
            <h3>UI/UX Designer, Full Stack Web Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#about" className="learn-more">Learn more <span>&#8595;</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
