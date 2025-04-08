import React from 'react';
import Hero from './Hero';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
