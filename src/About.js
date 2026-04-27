import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: '.about-education',
          start: 'top center',
          markers: false,
        },
      });
    });

    // Card hover scale effect
    const cards = gsap.utils.toArray('.glass-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-intro">
          <p>
            I'm a junior Software Engineer with a strong frontend and product focus, passionate about building accessible, user-friendly, and visually compelling digital products. I currently work as a software engineer, developing large-scale user-facing applications as well as internal tools, where I collaborate closely with designers, backend developers, and product teams.
          </p>
          <p>
            My journey into tech is built on more than 10 years in the fashion and textile industry, where I developed a strong visual language, creativity, and a deep understanding of how design decisions affect real users. Running my own knitwear brand also gave me hands-on experience in marketing and communication across social media, print, TV, and live events - shaping the way I approach products from both a creative and business perspective.
          </p>
          <p>
            In my day-to-day work, I use JavaScript and TypeScript with frameworks such as React and Vue, alongside HTML and CSS, to build scalable and maintainable interfaces. I also work with APIs and full-stack solutions using Node.js, and relational databases, while continuing to strengthen my skills through ongoing learning and real-world application.
          </p>
          <p>
            My transition into software engineering began with structured front-end training at Cerebrum Hub, followed by academic studies in web technologies and databases at Tallinn University of Technology (TalTech). Today, alongside my professional work, I continue to deepen my skills through targeted, practice-oriented learning via Udemy.
          </p>
          <p>
            Having lived and worked in Thailand, Sweden, Germany, and the Netherlands, I thrive in international environments and adapt quickly to new teams and cultures. What motivates me most is bridging visual sensibility and engineering - creating products that don't just function correctly, but feel intuitive, thoughtful, and genuinely human to use.
          </p>
        </div>

        {/* Spotlight Currently - Glassmorphism Card */}
        <div className="glass-card about-currently">
          <h3>Currently</h3>
          <p>
            Software Engineer at{" "}
            <strong>Lumav Commerce</strong>
          </p>
          <p className="timeline-date">Jun 2025 – Present</p>
        </div>


        {/* Education Timeline */}
        <div className="about-education">
          <h3>Education & Certifications</h3>
          <div className="timeline">
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <h4>Udemy</h4>
                <p>NodeJS - The Complete Guide</p>
                <p>JavaScript - The Complete JavaScript Course</p>
                <p>Figma UI UX Design Advanced</p>
                <p className="timeline-date">Jan 2026 – Present</p>
              </div>
            </div>

            <div className="timeline-item timeline-right">
              <div className="timeline-content">
                <h4>Tallinn University of Technology (TalTech)</h4>
                <p>Web Technologies</p>
                <p>Database Basics</p>
                <p>External student (12 ECTS)</p>
                <p className="timeline-date">Sep 2025 – Jan 2026</p>
              </div>
            </div>

            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <h4>Cerebrum Hub / Coursera</h4>
                <p>Front-End Developer</p>
                <p className="timeline-date">Nov 2024 – Mar 2025</p>
                <a 
                  className="timeline-link" 
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

        {/* Core Strengths */}
        <div className="about-strengths">
          <h3>Core Strengths</h3>
          <ul>
            <li><strong>Empathy & Inclusion</strong><span className="strength-desc">seeing the human side in every solution.</span></li>
            <li><strong>Creativity & Design Sense</strong><span className="strength-desc">building visually compelling, intuitive interfaces.</span></li>
            <li><strong>Sustainability & Awareness</strong><span className="strength-desc">mindful of long-term impact and environment.</span></li>
            <li><strong>Problem-Solving & Growth</strong><span className="strength-desc">learning fast and adapting to challenges.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
