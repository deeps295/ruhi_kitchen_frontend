import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );

    tl.fromTo(linksRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      "-=0.5"
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 glass-traditional px-8 py-4 flex justify-between items-center border-b border-gold/20"
    >
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-[0.2em] uppercase font-heading gold-gradient-text leading-tight">
          RUHI'S KITCHEN
        </h2>
        <h2 className="text-xs font-tamil text-maroon/80 tracking-widest mt-1">
          செட்டிநாடு விருந்து
        </h2>
      </div>

      <div className="hidden md:flex space-x-10 text-sm font-large uppercase tracking-[0.1em]">
        {['home', 'about', 'services', 'gallery', 'contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            ref={el => linksRef.current[index] = el}
            className="text-maroon hover:text-gold transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <button className="md:hidden text-maroon p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
