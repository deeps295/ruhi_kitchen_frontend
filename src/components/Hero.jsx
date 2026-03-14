import React from 'react';

const Hero = ({ heroImage }) => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage || "https://images.unsplash.com/photo-1610192244261-3f33de3f72e9?auto=format&fit=crop&q=80&w=2000"}
          alt="Traditional South Indian Meal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h2 className="text-gold text-2xl md:text-3xl font-tamil mb-4 tracking-widest animate-fade-in">
          வரவேற்பு: உண்மையான சுவை
        </h2>
        <h1 className="text-beige text-4xl md:text-7xl font-heading font-bold mb-6 drop-shadow-md">
          RUHI'S KITCHEN
        </h1>
        <p className="text-white text-lg md:text-2xl font-light mb-8 italic tracking-wide">
          Authentic South Indian Traditional Catering
        </p>
        <a
          href="#contact"
          className="bg-gold hover:bg-[#B8962E] text-maroon px-10 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 inline-block shadow-xl"
        >
          Book Catering
        </a>
      </div>

      <div className="absolute bottom-0 w-full temple-divider rotate-180"></div>
    </section>
  );
};

export default Hero;
