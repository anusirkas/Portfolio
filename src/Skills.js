import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiFigma, SiAdobecreativecloud, SiMongodb, SiGraphql, SiTypescript, 
  SiNuxtdotjs, SiVuedotjs, SiMysql, SiPhp, SiBitbucket, SiJirasoftware,
  SiRender
} from 'react-icons/si';
import { FaNetworkWired } from 'react-icons/fa';

import { GiPencilBrush } from 'react-icons/gi';

import './Skills.css';

const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript (ES6+)', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Vue.js', icon: <SiVuedotjs /> },
    { name: 'Nuxt.js', icon: <SiNuxtdotjs /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <FaNodeJs /> },
    { name: 'GraphQL (Apollo)', icon: <SiGraphql /> },
    { name: 'REST API', icon: <FaNetworkWired /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL (studying at TalTech)', icon: <SiMysql /> },
    { name: 'PHP (studying at TalTech)', icon: <SiPhp /> },
  ],
  tools: [
    { name: 'Git & GitHub', icon: <FaGitAlt /> },
    { name: 'Bitbucket', icon: <SiBitbucket /> },
    { name: 'Jira (Atlassian)', icon: <SiJirasoftware /> },
    { name: 'Render & Vercel (Deployment)', icon: <SiRender /> },
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
        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <h3>{group.charAt(0).toUpperCase() + group.slice(1)}</h3>
            <ul>
              {items.map((skill, index) => (
                <li key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
