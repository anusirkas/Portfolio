import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Little Lemon Restaurant Website',
    description: 'Little Lemon Website is a fictional website created as a part of the Meta Frontend Developer course.',
    imageUrl: '/images/restaurant chef B.jpg',
    demoUrl: 'https://little-lemon-sigma-two.vercel.app/',
    githubUrl: 'https://github.com/anusirkas/LittleLemon',
    figmaUrl: 'https://www.figma.com/file/9xznjKlGWUxwCHjqB66bJh/Little-Lemon-exercise?node-id=304%3A82&t=hUYzLtPMACHnpGMD-1',
    category: ['Front-End', 'Creative'],   // <-- now an array
  },
  {
    id: 2,
    title: 'Get Some Peace',
    description: 'I built a 3D animated website using Sketchfab models, Three.js for rendering, GSAP for animations, and GLTFLoader to load 3D models. Get Some Peace is a fictional house rent website.',
    imageUrl: '/images/modernhouse.png',
    demoUrl: 'https://getsomepeace.vercel.app/',
    githubUrl: 'https://github.com/anusirkas/getsomepeace',
    category: ['Creative'],   // single‐element array
  },
  {
    id: 3,
    title: '3D Space',
    description: 'I learned how to make a 3D animated webpage with moving object. I used three.js, Vanilla JS and Vite framework. Updating Vercel link asap! It is actually looking way better.',
    imageUrl: '/images/3dspace.png',
    demoUrl: 'https://3d-space-beta.vercel.app/',
    githubUrl: 'https://github.com/anusirkas/3D-space',
    category: ['Front-End'],
  },
  {
    id: 4,
    title: 'Flight Seat App',
    description: 'Flight seat planner built with React & TailwindCSS. Clean UI, flight selection, and seat recommendation logic.',
    imageUrl: '/images/flight.jpg',
    demoUrl: 'https://flight-seat-app.vercel.app/',
    githubUrl: 'https://github.com/anusirkas/flight-seat-app',
    category: ['Front-End'],
  },
  {
    id: 5,
    title: 'Kombucha Drinks',
    description: 'Interactive Hero section for healthy drinks webshop made in Figma',
    imageUrl: '/images/freshy.png',
    figmaUrl: 'https://www.figma.com/proto/49sBruaZKoTAve9GXSCQG1/Kombucha?node-id=16-27&starting-point-node-id=16%3A153&t=Fj76KqwW9SWxn9Eu-1',
    category: ['Creative'],
  },
  {
    id: 6,
    title: 'Textile Designer Portfolio',
    description: 'A portfolio page about my past career as textile designer just to give you a glimpse of my creativity. It was a great chapter and I will keep cherish it as my hobby but I want to move on from fashion to software development.',
    imageUrl: '/images/streamandrocks.png',
    demoUrl: 'https://anusirkas.wixsite.com/portfolio',
    category: ['Creative'],
  }
];

const categories = ['All', 'Front-End', 'Creative'];

const Portfolio = () => {
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>

      {/* Category Buttons */}
      <div className="portfolio-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} />
            <div className="portfolio-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.figmaUrl && (
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
