import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        <p className="section-subtitle">
          Come experience the best pickleball facility in Noida
        </p>

        <div className="contact-content">
          <div className="contact-info">
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

          <div className="contact-form-section">
            <div className="form-header">
              <h3>Book Your Court</h3>
              <p>Send us a message and we'll get back to you shortly</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your@email.com"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+91 XXXXX XXXXX"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  required 
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  placeholder="Tell us about your booking requirements..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
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

