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
  };

  return (
    <header>
      <div className="content-fit">
        <div className="logo">
          <Link to="/" className="nav-link">Hey you</Link>
        </div>
        <nav>
          <ul>
            <li>
              <button className="nav-link" onClick={() => handleScroll("intro")}>About</button>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
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
