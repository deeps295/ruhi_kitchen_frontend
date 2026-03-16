import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = ({ heroImage }) => {
  const heroRef = useRef(null);
  const textRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
    );

    tl.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
      "-=1.5"
    );
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-ivory"
    >
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={heroImage || "https://images.unsplash.com/photo-1610192244261-3f33de3f72e9?auto=format&fit=crop&q=80&w=2000"}
          alt="Traditional South Indian Meal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/60 via-maroon/40 to-ivory"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h3
          ref={el => textRef.current[0] = el}
          className="text-gold text-xl md:text-2xl font-tamil mb-4 tracking-[0.3em] uppercase drop-shadow-sm"
        >
          வரவேற்பு: உண்மையான சுவை
        </h3>
        <h2
          ref={el => textRef.current[1] = el}
          className="text-white text-5xl md:text-9xl font-heading font-bold mb-6 tracking-tighter"
        >
          RUHI'S <span className="gold-gradient-text">KITCHEN</span>
        </h2>
        <p
          ref={el => textRef.current[2] = el}
          className="text-beige/90 text-lg md:text-2xl font-light mb-12 italic tracking-widest max-w-2xl mx-auto"
        >
          Mastering the Art of Authentic South Indian Catering
        </p>
        <div ref={el => textRef.current[3] = el}>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-maroon transition-all duration-300 bg-gold rounded-none hover:bg-gold-light overflow-hidden shadow-2xl"
          >
            <span className="relative z-10">BOOK AN EXPERIENCE</span>
            <div className="absolute inset-0 w-0 h-full bg-white/20 transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 w-full flex justify-center opacity-30 animate-bounce">
        <div className="w-[1px] h-20 bg-gold"></div>
      </div>

      <div className="absolute top-0 w-full temple-divider opacity-10"></div>
    </section>
  );
};

export default Hero;
