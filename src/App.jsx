import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
