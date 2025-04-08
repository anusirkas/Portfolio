import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Anu Sirkas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
