import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      title: 'Court View',
      description: 'Professional pickleball court'
    },
    {
      title: 'Terrace Setting',
      description: 'Open-air gaming experience'
    },
    {
      title: 'Community',
      description: 'Players enjoying the game'
    },
    {
      title: 'Equipment',
      description: 'Premium paddles and balls'
    },
    {
      title: 'Events',
      description: 'Tournament action'
    },
    {
      title: 'Coaching',
      description: 'Expert guidance'
    }
  ];

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <h2 className="section-title">Experience The Venue</h2>
        <p className="section-subtitle">
          Get a glimpse of our world-class facility
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <div className="gallery-placeholder">
                <img src="/logo.png" alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <h3>Ready to Experience It Yourself?</h3>
          <p>Visit us at our Sector 68 location and see why we're Noida's premier pickleball destination</p>
          <a href="#contact" className="btn btn-primary">Visit Us Today</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

