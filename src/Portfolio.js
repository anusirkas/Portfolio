import React from 'react';
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
  },
  {
    id: 2,
    title: 'Get Some Peace',
    description: 'I built a 3D animated website using Sketchfab models, Three.js for rendering, GSAP for animations, and GLTFLoader to load 3D models. Get Some Peace is a fictional house rent website.',
    imageUrl: '/images/modernhouse.png',
    demoUrl: 'https://getsomepeace.vercel.app/',
    githubUrl: 'https://github.com/anusirkas/getsomepeace',
  },
  {
    id: 3,
    title: '3D Space',
    description: 'I learned how to make a 3D animated webpage with moving object. I used three.js, Vanilla JS and Vite framework. Updating Vercel link asap! It is actually looking way better.',
    imageUrl: '/images/3dspace.png',
    demoUrl: 'https://3d-space-beta.vercel.app/',
    githubUrl: 'https://github.com/anusirkas/3D-space',
  },
  {
    id: 4,
    title: 'Flight Seat App',
    description: 'Flight seat planner built with React & TailwindCSS. Clean UI, flight selection, and seat recommendation logic.',
    imageUrl: '/images/flight.jpg',
    demoUrl: 'https://flight-seat-app.vercel.app/',
    githubUrl: 'https://github.com/anusirkas/flight-seat-app',
  },
  {
    id: 5,
    title: 'Kombucha Drinks',
    description: 'Interactive Hero section for healthy drinks webshop made in Figma',
    imageUrl: '/images/freshy.png',
    demoUrl: 'https://www.figma.com/proto/49sBruaZKoTAve9GXSCQG1/Kombucha?node-id=16-153&p=f&t=nYC4W646goYFaBAB-1&scaling=min-zoom&content-scaling=fixed&page-id=9%3A165&starting-point-node-id=16%3A153',
  },
  {
    id: 6,
    title: 'Textile Designer Portfolio',
    description: 'A portfolio page about my past career as textile designer just to give you a glimpse of my creativity. It was a great chapter and I will keep cherish it as my hobby but I want to move on from fashion to software development.',
    imageUrl: '/images/streamandrocks.png',
    demoUrl: 'https://anusirkas.wixsite.com/portfolio',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} />
            <div className="portfolio-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {/* If you have an internal detail page for the project, you could add: */}
                {/* <Link to={`/portfolio/${project.id}`}>More Info</Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
