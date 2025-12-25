import React from 'react';
import './Hero.css';
import heroBg from '../images/image2.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">PICKLE SHICKLE</span>
        </h1>
        <p className="hero-description">
          Experience the thrill of pickleball in a state-of-the-art facility. 
          Whether you're a beginner or a pro, we've got you covered!
        </p>
        <div className="hero-buttons">
          <a href="https://hudle.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Your Court
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

