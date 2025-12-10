import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎾',
      title: 'Premium Courts',
      description: 'Professional-grade pickleball courts with perfect surface quality for optimal gameplay.'
    },
    {
      icon: '🏢',
      title: 'Terrace Facility',
      description: 'Unique open-air terrace setting providing a refreshing and exciting gaming environment.'
    },
    {
      icon: '🎯',
      title: 'All Skill Levels',
      description: 'From beginners to advanced players, we cater to everyone with tailored experiences.'
    },
    {
      icon: '👥',
      title: 'Community Events',
      description: 'Regular tournaments, leagues, and social events to connect with fellow players.'
    },
    {
      icon: '⚡',
      title: 'Quick Booking',
      description: 'Easy online booking system to reserve your court in just a few clicks.'
    },
    {
      icon: '🏆',
      title: 'Pro Coaching',
      description: 'Expert coaching sessions available to help you improve your game.'
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Everything you need for the perfect pickleball experience
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

