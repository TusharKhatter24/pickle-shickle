import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-text-section">
            <h2 className="contact-title">Visit Us</h2>
            <p className="contact-description">
              Come experience the best pickleball facility in Noida. Located in the vibrant Sector 68, our state-of-the-art terrace facility offers a unique open-air gaming experience.
            </p>
          </div>

          <div className="contact-content">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>A, 5, Block A, Sector 68</p>
              <p>Groovy Building - Terrace</p>
              <p>Noida, Uttar Pradesh</p>
              <a 
                href="https://maps.app.goo.gl/CHPbqQKVwmGAm5eA8?g_st=ic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                Get Directions →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <a href="mailto:pickleshicklenoida@gmail.com">
                pickleshicklenoida@gmail.com
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Hours</h3>
              <p>Monday - Friday: 6 AM - 11 PM</p>
              <p>Saturday - Sunday: 6 AM - 12 AM</p>
            </div>
          </div>
        </div>

        <div className="map-container">
          <h3>Find Us On The Map</h3>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2d77.3!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pickle Shickle Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

