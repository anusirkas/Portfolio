import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 800);
    }
    setIsMenuOpen(false); // close the menu after click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="content-fit">
        <div className="logo">
          {/* Clicking on the logo scrolls to the top (hero section) */}
          <Link to="/" className="nav-link" onClick={() => handleScroll("hero")}>
            Anu Sirkas
          </Link>
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <button className="nav-link" onClick={() => handleScroll("about")}>
                About
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => handleScroll("portfolio")}>
                Portfolio
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => handleScroll("contact")}>
                Contact
              </button>
            </li>
          </ul>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
