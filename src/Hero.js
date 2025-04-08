import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Based in Tallinn, Estonia.',
      'Passionate about visual design.',
      'From knitting to digital art.',
      'And inventing and coding them into reality.'
    ],
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
    loop: 0, // 0 means infinite loop
  });

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hey, I am Anu, Front-End Developer</h1>
        <h2>
          {text}
          <Cursor />
        </h2>
        <p>
          I come from a background in fashion, where I designed knitwear and drew patterns.
          I love photography, dogs, and exploring diverse cultures after living in 5 countries.
          I'm on a mission to create visually stunning, user-friendly experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
