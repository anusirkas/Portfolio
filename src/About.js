import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-intro">
          <p>
            I’m a Junior Front-End Developer passionate about building accessible and 
            user-friendly digital products. With a background in fashion design, I bring a strong visual language, creativity, and empathy toward client needs — qualities I now apply to software development.
          </p>
          <p>
            I have contributed production-ready code in real client projects and collaborated effectively in agile teams. International experience across several countries has strengthened my adaptability, problem-solving, and cross-cultural communication.
          </p>
        </div>

        {/* Spotlight Currently */}
        <div className="about-currently">
          <h3>📍 Currently</h3>
          <p>
            Software Engineering Intern at <strong>Lumav Commerce</strong>, 
            contributing to front-end development on large-scale Magento-based 
            e-commerce projects.
          </p>
        </div>

        {/* Education */}
        <div className="about-education">
          <h3>🎓 Education & Certifications</h3>
          <div className="education-mini">
            <h4>Tallinn University of Technology (TalTech)</h4>
            <p>External student – Web Technologies & Database Basics (12 ECTS)</p>
            <p className="education-timeline">Sep 2025 – Jan 2026</p>
          </div>
          <div className="education-mini">
            <h4>Cerebrum Hub / Coursera</h4>
            <p>Front-End Developer</p>
            <p className="education-timeline">Nov 2024 – Mar 2025</p>
            <a 
              className="education-link" 
              href="https://www.coursera.org/account/accomplishments/specialization/P2PJA2WX5LS4" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
          <div className="education-mini">
            <h4>The Odin Project</h4>
            <p>Full-Stack JavaScript Curriculum (self-paced)</p>
            <p className="education-timeline">Mar 2025 – Present</p>
          </div>
        </div>

        {/* Core Strengths at bottom */}
        <div className="about-strengths">
          <h3>⚡ Core Strengths</h3>
          <ul>
            <li><strong>Empathy & Inclusion</strong> – seeing the human side in every solution.</li>
            <li><strong>Creativity & Design Sense</strong> – building visually compelling, intuitive interfaces.</li>
            <li><strong>Sustainability & Awareness</strong> – mindful of long-term impact and environment.</li>
            <li><strong>Problem-Solving & Growth</strong> – learning fast and adapting to challenges.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
