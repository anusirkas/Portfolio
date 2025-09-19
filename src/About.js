import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-intro">
          <p>
            I’m a Front-End Developer with a passion for crafting accessible, user-friendly, and visually compelling digital products. My journey into tech is built on more than 10 years in the fashion and textile industry, where I developed a strong visual language, creativity, and an understanding of how design decisions impact the end user. Running my own knitwear brand also gave me hands-on experience in marketing across social media, print, TV, and live events — teaching me to think about design and communication from both the creative and business side.
          </p>
          <p>
          After completing the Meta Front-End Developer Certificate, I deepened my skills in React, JavaScript, HTML, CSS, and UX/UI principles, and I continue to strengthen my full-stack knowledge with TypeScript, Vue, Nuxt, Node.js, GraphQL, and SCSS. To expand into backend development, I study Web Technologies (PHP, JavaScript, HTML, CSS) and Database Basics (MySQL) at TalTech. Currently, I am a Software Engineering Intern at Lumav Commerce, where I’ve contributed production-ready components to a large-scale e-commerce platform (60k+ products) that are now live.
          </p>
          <p>
          Having lived and studied in Thailand, Sweden, Germany, and the Netherlands, I’ve built adaptability, problem-solving skills, and cross-cultural communication. What excites me most is bridging design sensibility and engineering to create products that not only work but feel intuitive, human, and enjoyable to use.
          </p>
        </div>

        {/* Spotlight Currently */}
        <div className="about-currently">
          <h3>📍 Currently</h3>
          <p>
            Software Engineering Intern at{" "}
            <a 
              href="https://www.lumav.ee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="company-link"
            >
              <strong>Lumav Commerce</strong>
            </a>, contributing to front-end development on large-scale Magento-based 
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
