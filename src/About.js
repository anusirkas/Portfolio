import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <section id="about" className="about" data-aos="fade-up">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
          I’m a junior Front‑End Developer with a passion for UX/UI design, transitioning from a decade in fashion and textile design. Armed with a Master’s in Textile Design and a Bachelor’s in Garment Technology, I spent years honing visual thinking, user‑first problem‑solving, and quality assurance—skills I now bring to the web.
          </p>
          <p>
          After earning the Meta Front‑End Developer Professional Certificate in March 2025, I dove deep into HTML, CSS, JavaScript, and React, crafting accessible, visually compelling interfaces. I lean on Figma and Adobe Creative Suite to translate complex ideas into intuitive layouts—and my curiosity drives me to explore back‑end technologies so I can bridge the gap between front and back.
          </p>
          <p>
          Having lived in Thailand, Sweden, Germany, and the Netherlands, I’ve learned to adapt quickly, collaborate across cultures, and appreciate new perspectives. I believe great tech serves people first, which is why I champion accessibility, clear UX flows, and thoughtful interactions.
          </p>

          {/* New Values Section */}
          <div className="values">
          <h3>What I Value</h3>
          <ul>
            <li>
              <strong>Life–Work Balance & Health</strong><br/>
              I deliver results on time—and I honor rest, exercise, and mental well‑being so I can bring my best self every day.
            </li>
            <li>
              <strong>Growth & Creativity</strong><br/>
              I’m driven to learn new tools, explore “what‑if” solutions, and iterate quickly in a culture that encourages experimentation.
            </li>
            <li>
              <strong>Autonomy & Trust</strong><br/>
              I thrive when empowered to own my work—and I help create a team culture built on trust and mutual support.
            </li>
            <li>
              <strong>Empathy, Inclusion & Sustainability</strong><br/>
              I build with respect for all people, planet, and future generations—making experiences welcoming, accessible, and low‑impact.
            </li>
          </ul>
        </div>
      



          {/* Education / Journey Section */}
          <div className="education">
            <h3>Education & Certifications</h3>
            <div className="education-item">
              <img 
                src="/images/meta-front-end-developer-certificate.png" 
                alt="Meta Front-End Developer Badge" 
                className="education-badge" 
              />
              <div className="education-info">
                <h4>Front-End Developer</h4>
                <p>
                  Earned the Meta Front-End Developer Professional Certificate through Coursera, 
                  in partnership with Cerebrum Hub.
                </p>
                <p className="education-timeline">Nov 2024 - Mar 2025</p>
                <a 
                  className="education-link" 
                  href="https://www.coursera.org/account/accomplishments/specialization/P2PJA2WX5LS4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
