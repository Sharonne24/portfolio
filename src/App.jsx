import React from 'react';
import Navbar from './Navbar';
// import Hero from './components/Hero';
 import About from './About';
 import Skills from './Skills';
 import Portfolio from './Portfolio';
 //import Contact from './Contact';
// import Footer from './components/Footer';
//import './Styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* <section id="hero">
          <Hero />
        </section> */}
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};
export default App;
