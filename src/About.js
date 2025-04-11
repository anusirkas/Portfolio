import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <section id="about" className="about" data-aos="fade-up">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
          Curious
          Creative
          and sometimes Cool
          I come from a background in fashion, where I designed knitwear and drew patterns.
          I love photography, dogs, and exploring diverse cultures after living in 5 countries.
          I'm on a mission to create visually stunning, user-friendly experiences.
          </p>
          <p>
            I’m a junior Front-End Developer with a passion for technology and innovation, transitioning from a background in fashion design. With a Master’s in Textile Design and a Bachelor’s in Garment Technology, I spent years working in design and quality assurance, developing a keen sense of user-first thinking, problem-solving, and creativity. Now, I bring that same attention to detail and creativity to web development, combining technical skills with a strong design sensibility.
          </p>
          <p>
            After completing the Meta Front-End Developer Professional Certificate in March 2025, I’ve immersed myself in HTML, CSS, JavaScript, and React, focusing on creating seamless, accessible, and visually compelling digital experiences. My expertise in design tools like Adobe Creative Suite and Figma allows me to translate complex concepts into functional and engaging interfaces.
          </p>
          <p>
            My international experiences—having lived in Thailand, Sweden, Germany, and the Netherlands—have shaped my adaptability and curiosity. I believe that great design and technology should serve people first, which is why I’m passionate about accessibility, intuitive UI, and building experiences that are both beautiful and functional. I’m currently enhancing my skills through online coding platforms (Odin Project, FreeCodeCamp) to build my portfolio, and looking for opportunities to collaborate on real-world projects where I can make an impact with both creativity and code.
          </p>
          <p>
            🚀 Always learning. Always designing. Always coding.
            Should I talk about my core values too? dont hurt others, let live and live yourself, sustainability !! make the world more united and happier place. 
          </p>

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
