import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-wrapper">
        <div className="about-content">
            <div className="about-card">
              <div className="about-card-icon">🏆</div>
              <h3>Professional Courts</h3>
            <p>
                Located in the vibrant Sector 68 of Noida, Pickle Shickle features tournament-grade courts 
                with perfect surface quality for optimal gameplay.
              </p>
          </div>

            <div className="about-card">
              <div className="about-card-icon">👨‍🏫</div>
              <h3>Expert Coaching</h3>
              <p>
                Our state-of-the-art terrace facility at the Groovy Building offers expert coaching 
                to help players of all skill levels improve their game.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">🌟</div>
              <h3>Open Air Terrace</h3>
              <p>
                Experience a unique open-air gaming atmosphere. Whether you're looking to learn, compete, 
                or just have fun with friends, we've got you covered.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">🎾</div>
              <h3>Premium Equipment</h3>
              <p>
                Top-quality paddles and balls available for all players. Join our growing community 
                and elevate your pickleball experience.
              </p>
            </div>
          </div>

          <div className="about-text-section">
            <h2 className="about-title">Your premier pickleball destination.</h2>
            <p className="about-description">
              Located in the vibrant Sector 68 of Noida, Pickle Shickle is more than just a pickleball court—it's a community where players of all skill levels come together to enjoy the fastest-growing sport in the world.
            </p>
            <p className="about-description">
              Our state-of-the-art terrace facility at the Groovy Building offers a unique open-air gaming experience. With professional-grade courts, premium equipment, and expert coaching, we provide everything you need to elevate your game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

