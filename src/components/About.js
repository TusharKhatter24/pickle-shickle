import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Pickle Shickle</h2>
        <p className="section-subtitle">
          Where passion meets play in the heart of Noida
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Your Premier Pickleball Destination</h3>
            <p>
              Located in the vibrant Sector 68 of Noida, Pickle Shickle is more than just a pickleball court – 
              it's a community where players of all skill levels come together to enjoy the fastest-growing 
              sport in the world.
            </p>
            <p>
              Our state-of-the-art terrace facility at the Groovy Building offers a unique open-air 
              gaming experience. With professional-grade courts, premium equipment, and expert coaching, 
              we provide everything you need to elevate your game.
            </p>
            <p>
              Whether you're looking to learn, compete, or just have fun with friends, Pickle Shickle 
              is your go-to destination for all things pickleball. Join our growing community today!
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🏆</div>
                <h4>Professional Courts</h4>
                <p>Tournament-grade surfaces</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">👨‍🏫</div>
                <h4>Expert Coaching</h4>
                <p>Learn from the best</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🌟</div>
                <h4>Open Air Terrace</h4>
                <p>Unique gaming atmosphere</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <img src="/logo.png" alt="Pickle Shickle" />
            </div>
            <div className="floating-card card-1">
              <h4>Premium Equipment</h4>
              <p>Top-quality paddles & balls</p>
            </div>
            <div className="floating-card card-2">
              <h4>All Skill Levels</h4>
              <p>Beginners to Pros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

