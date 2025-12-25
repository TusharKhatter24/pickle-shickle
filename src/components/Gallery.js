import React from "react";
import "./Gallery.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Court View",
      description: "Professional pickleball court",
      image: image3,
    },
    {
      title: "Terrace Setting",
      description: "Open-air gaming experience",
      image: image4,
    },
    {
      title: "Community",
      description: "Players enjoying the game",
      image: image1,
    },
    {
      title: "Equipment",
      description: "Premium paddles and balls",
      image: image2,
    },
    {
      title: "Events",
      description: "Tournament action",
      image: image3,
    },
    {
      title: "Noida Center",
      description: "Our Location",
      image: image4,
    },
  ];

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="gallery-wrapper">
          <div className="gallery-text-section">
            <h2 className="gallery-title">Experience The Venue</h2>
            <p className="gallery-description">
              Get a glimpse of our world-class facility. Experience the thrill
              of pickleball in a state-of-the-art facility. Whether you're a
              beginner or a pro, we've got you covered!
            </p>
          </div>

          <div className="gallery-content-section">
            <div className="gallery-rail">
              <div className="gallery-rail-track">
                {galleryItems.map((item, index) => (
                  <div className="gallery-rail-item" key={index}>
                    <div className="gallery-rail-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="gallery-rail-content">
                      <h3 className="gallery-rail-title">{item.title}</h3>
                      <p className="gallery-rail-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Duplicate items for seamless loop */}
                {galleryItems.map((item, index) => (
                  <div className="gallery-rail-item" key={`duplicate-${index}`}>
                    <div className="gallery-rail-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="gallery-rail-content">
                      <h3 className="gallery-rail-title">{item.title}</h3>
                      <p className="gallery-rail-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
