import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Front-end developer',
      'Passionate about UX/UI design',
      'Based in Tallinn, Estonia',
    ],
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
    loop: 0, // 0 means infinite loop
  });

  return (
    <section id="hero" className="hero">
      <div className="hero-frame">
        <img 
          src="/images/fromfashiontotech11.png" 
          alt="From Fashion to Tech" 
          className="hero-img" 
        />
      </div>
      <div className="hero-content">
        <h1>Hey, I am Anu</h1>
        <h2>
          {text}
          <Cursor />
        </h2>
      </div>
    </section>
  );
};

export default Hero;
