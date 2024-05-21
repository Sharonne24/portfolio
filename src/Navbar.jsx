import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 md:flex md:items-center">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-xl font-bold font-roboto">Your Name</a>
          <button type="button" className="inline-flex items-center md:hidden focus:outline-none">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-roboto">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-roboto">Skills</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-roboto">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-roboto">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
