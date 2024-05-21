import React from 'react';
import Navbar from './Navbar';
// import HeroSection from './components/HeroSection';
 import About from './About';
 import Skills from './Skills';
 import Portfolio from './Portfolio';
 //import Contact from './Contact';
// import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div className="font-roboto">
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
