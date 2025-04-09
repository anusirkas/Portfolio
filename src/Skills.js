import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiFigma, SiAdobecreativecloud } from 'react-icons/si';
import { GiPencilBrush } from 'react-icons/gi';
import './Skills.css';


const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
  ],
  tools: [
    { name: 'Version Control (Git & GitHub)', icon: <FaGitAlt /> },
  ],
  creative: [
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'Adobe Creative Suite', icon: <SiAdobecreativecloud /> },
    { name: 'Sketching & Drawing', icon: <GiPencilBrush /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>What I Bring to the Table</h2>
      <div className="skills-container">
        <div className="skill-group">
          <h3>Front-End</h3>
          <ul>
            {skills.frontend.map((skill, index) => (
              <li key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skill-group">
          <h3>Tools</h3>
          <ul>
            {skills.tools.map((skill, index) => (
              <li key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skill-group">
          <h3>Creative</h3>
          <ul>
            {skills.creative.map((skill, index) => (
              <li key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
