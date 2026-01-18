import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SelectedWorks />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
