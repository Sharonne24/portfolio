// import React from 'react';
// import './Styles.css'; // Import the CSS file for styling

// const Navbar = () => {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <a href="#hero">SA.</a> {/* Replace "JH." with your initials or logo */}
//         </div>
//         <nav>
//           <ul className="nav-links">
//             <li><a href="#hero">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Styles.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">SA.</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="nav-socials">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </header>
  );
};

export default Navbar;
