import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>CONTACT ME</h2>
        
        {/* Email Information */}
        <div className="contact-info">
          <p>Drop me a message at:</p>
          <p className="contact-email">anusirkas@gmail.com</p>
        </div>
        
        {/* Social Links */}
        <div className="contact-socials">
          <p>Or connect with me on:</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
