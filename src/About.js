import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-intro">
          <p>
            I’m a junior Software Engineer with a strong frontend and product focus, passionate about building accessible, user-friendly, and visually compelling digital products. I currently work as a software engineer, developing large-scale user-facing applications as well as internal tools, where I collaborate closely with designers, backend developers, and product teams.
          </p>
          <p>
            My journey into tech is built on more than 10 years in the fashion and textile industry, where I developed a strong visual language, creativity, and a deep understanding of how design decisions affect real users. Running my own knitwear brand also gave me hands-on experience in marketing and communication across social media, print, TV, and live events—shaping the way I approach products from both a creative and business perspective.
          </p>
          <p>
            In my day-to-day work, I use JavaScript and TypeScript with frameworks such as React and Vue, alongside HTML and CSS, to build scalable and maintainable interfaces. I also work with APIs and full-stack solutions using Node.js, and relational databases, while continuing to strengthen my skills through ongoing learning and real-world application.
          </p>
          <p>
            My transition into software engineering began with structured front-end training at Cerebrum Hub, followed by academic studies in web technologies and databases at Tallinn University of Technology (TalTech). Today, alongside my professional work, I continue to deepen my skills through targeted, practice-oriented learning via Udemy.
          </p>
          <p>
            Having lived and worked in Thailand, Sweden, Germany, and the Netherlands, I thrive in international environments and adapt quickly to new teams and cultures. What motivates me most is bridging visual sensibility and engineering - creating products that don’t just function correctly, but feel intuitive, thoughtful, and genuinely human to use.
          </p>
        </div>

        {/* Spotlight Currently */}
        <div className="about-currently">
          <h3>📍 Currently</h3>
          <p>
            Software Engineer at{" "}
            <strong>Lumav Commerce</strong>
          </p>
        </div>


        {/* Education */}
        <div className="about-education">
          <h3>🎓 Education & Certifications</h3>
          <div className="education-mini">
            <h4>Tallinn University of Technology (TalTech)</h4>
            <p>Web Technologies</p>
            <p>Database Basics</p>
            <p>External student (12 ECTS)</p>
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
            <h4>Udemy</h4>
            <p>NodeJS - The Complete Guide</p>
            <p>JavaScript - The Complete JavaScript Course</p>
            <p>Figma UI UX Design Advanced</p>
            <p className="education-timeline">Jan 2026 – Present</p>
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
