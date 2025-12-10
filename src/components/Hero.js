import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo-container">
          <img src="/logo.png" alt="Pickle Shickle Logo" className="hero-logo" />
        </div>
        <h1 className="hero-title">
          Welcome to <span className="gradient-text">PICKLE SHICKLE</span>
        </h1>
        <p className="hero-subtitle">
          Noida's Premier Pickleball Gaming Destination
        </p>
        <p className="hero-description">
          Experience the thrill of pickleball in a state-of-the-art facility. 
          Whether you're a beginner or a pro, we've got you covered!
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Book Your Court
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>Premium Courts</h3>
            <p>Top Quality</p>
          </div>
          <div className="stat">
            <h3>Terrace Setting</h3>
            <p>Open Air</p>
          </div>
          <div className="stat">
            <h3>Expert Staff</h3>
            <p>Professional</p>
          </div>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;

