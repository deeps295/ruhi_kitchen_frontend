import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-maroon text-gold shadow-lg px-6 py-4 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-wider uppercase font-heading"><h2>RUHI'S KITCHEN</h2></span>
        <span className="text-sm font-tamil text-beige tracking-widest"><h3>செட்டிநாடு விருந்து</h3></span>
      </div>
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="#home" className="hover:text-beige transition-colors">Home</a>
        <a href="#about" className="hover:text-beige transition-colors">About</a>
        <a href="#services" className="hover:text-beige transition-colors">Services</a>
        <a href="#gallery" className="hover:text-beige transition-colors">Gallery</a>
        <a href="#contact" className="hover:text-beige transition-colors">Contact</a>
      </div>
      <button className="md:hidden text-gold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
