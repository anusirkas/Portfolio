import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import animationData from './assets/Flow 1.json';
import Lottie from 'lottie-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left column with text */}
        <div className="contact-left">
          <h2>CONTACT ME</h2>
          <div className="contact-info">
            <p>Drop me a message at:</p>
            <p className="contact-email">anusirkas@gmail.com</p>
          </div>
          <div className="contact-socials">
            <p>Or connect with me on:</p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Right column with the Lottie animation */}
        <div className="contact-right">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
