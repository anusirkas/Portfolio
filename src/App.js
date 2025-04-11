import React from 'react';
import Hero from './Hero';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

const WaveDivider = ({ className = '' }) => (
  <svg viewBox="0 0 1440 320" className={`wave-divider ${className}`}>
    <path fill="#2a2a2a" fillOpacity="1"
    d="M0,200 
         C120,50,360,350,480,200 
         C600,50,840,350,960,200 
         C1080,50,1320,350,1440,200 
         L1440,320 L0,320 Z" 
    />
  </svg>
);


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <WaveDivider />
      <Skills />
      <Portfolio />
      <WaveDivider className="shadow-wave" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
