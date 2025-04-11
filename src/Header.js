import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,  // Adjust offset as needed
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to home and then scroll after delay
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
  };

  return (
    <header>
      <div className="content-fit">
        <div className="logo">
          <Link to="/" className="nav-link" onClick={() => handleScroll("hero")}>
            Anu Sirkas
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <button className="nav-link" onClick={() => handleScroll("about")}>About</button>
            </li>
            <li>
              <button className="nav-link" onClick={() => handleScroll("portfolio")}>Portfolio</button>
            </li>
            <li>
              <button className="nav-link" onClick={() => handleScroll("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
