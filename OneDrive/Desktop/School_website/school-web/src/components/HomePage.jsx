import React, { useRef } from "react";
import Navbar from "./Navbar";
import "../styles/homepage.css";

const Homepage = () => {
  // Create section references
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const messagesRef = useRef(null);
  const galleryRef = useRef(null);
  const achievementsRef = useRef(null);
  const admissionRef = useRef(null);
  const officeRef = useRef(null);
  const contactRef = useRef(null);

  // Map section names to references
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    messages: messagesRef,
    gallery: galleryRef,
    achievements: achievementsRef,
    admission: admissionRef,
    office: officeRef,
    contact: contactRef,
  };

  // Scroll function
  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />

      <div ref={homeRef} className="homepage-content">
        <h2>Home</h2>
        <p>Welcome to Little Flower School.</p>
      </div>

      <div ref={aboutRef} className="section">
        <h2>About Us</h2>
        <p>Learn more about our school.</p>
      </div>

      <div ref={messagesRef} className="section">
        <h2>Messages</h2>
        <p>Read messages from our principal and staff.</p>
      </div>

      <div ref={galleryRef} className="section">
        <h2>Gallery</h2>
        <p>View our school activities and events.</p>
      </div>

      <div ref={achievementsRef} className="section">
        <h2>Achievements</h2>
        <p>Check out our student achievements.</p>
      </div>

      <div ref={admissionRef} className="section">
        <h2>Admission & Fee Structure</h2>
        <p>Details about admission process and fees.</p>
      </div>

      <div ref={officeRef} className="section">
        <h2>Office Bearers</h2>
        <p>Meet the management team.</p>

      </div>

      <div ref={contactRef} className="section">
        <h2>Contact Us</h2>
        <p>Get in touch with us.</p>
      </div>
    </div>
  );
};

export default Homepage;
