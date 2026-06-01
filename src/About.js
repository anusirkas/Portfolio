import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Timeline items animation
    gsap.utils.toArray(".timeline-item").forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: ".about-education",
          start: "top center",
          markers: false,
        },
      });
    });

    // Card hover scale effect
    const cards = gsap.utils.toArray(".glass-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-intro">
          <p>
            I'm a Fullstack Developer with production experience in e-commerce systems and a 10+ year background in the
            fashion and textile industry.
          </p>

          <p>
            I currently work at Lumav Commerce, building frontend and full-stack features for large-scale e-commerce
            platforms, including product catalogs with 10k+ items, reusable component systems, internal tooling, and API
            integrations. My daily stack includes Vue.js, Nuxt, React, Next.js, Node.js, and relational databases such
            as MariaDB.
          </p>

          <p>
            Before transitioning into software engineering, I spent over a decade in fashion as a garment technologist,
            quality specialist, and founder of my own zero-waste knitwear brand with a WooCommerce store. This gave me a
            strong understanding of product data, supply chains, and customer-facing commerce systems from both
            operational and creative perspectives.
          </p>

          <p>
            I studied Textile Design (MA) and Garment Technology (BA), with international experience across Sweden,
            Thailand, Germany, and the Netherlands. My transition into engineering began through structured front-end
            training and continued into formal studies in web technologies and databases at TalTech, alongside
            continuous self-directed learning.
          </p>

          <p>
            I am particularly interested in building scalable e-commerce and marketplace systems where product data,
            user experience, and sustainability intersect.
          </p>

          <p>
            I enjoy working at the intersection of engineering, product thinking, and domain knowledge — building
            systems that are not only technically solid, but also meaningful in real-world use.
          </p>
        </div>

        {/* Spotlight Currently - Glassmorphism Card */}
        <div className="glass-card about-currently">
          <h3>Currently</h3>
          <p>
            Software Engineer at <strong>Lumav Commerce</strong>
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
        <p className="about-quote">
          <em>"Passionate about fashion tech, sustainable retail, and building products that serve real users."</em>
        </p>
      </div>
    </section>
  );
};

export default About;
