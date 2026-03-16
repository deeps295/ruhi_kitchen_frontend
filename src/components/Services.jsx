import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgElementsRef = useRef([]);

  const services = [
    {
      title: "Wedding Catering",
      tamil: "திருமண விருந்து",
      description: "Grand traditional wedding feasts served on banana leaves with authentic spices and royal presentation.",
      icon: "🥘"
    },
    {
      title: "Corporate Events",
      tamil: "நிறுவன நிகழ்வுகள்",
      description: "Sophisticated South Indian buffets curated for the professional palate, blending tradition with modern service.",
      icon: "🏢"
    },
    {
      title: "Private Celebrations",
      tamil: "குடும்ப விழாக்கள்",
      description: "From housewarmings to baby showers, we bring the warmth of a home-cooked meal in a grand setting.",
      icon: "🏮"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards entrance
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      // Background Rangoli animations
      bgElementsRef.current.forEach((el, i) => {
        gsap.to(el, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 30 + (i * 10),
          repeat: -1,
          ease: "none"
        });

        gsap.to(el, {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const RangoliSVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={`fill-gold/10 ${className}`}>
      <circle cx="50" cy="50" r="10" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path
          key={angle}
          d="M50 20 Q60 35 50 50 Q40 35 50 20"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <path
          key={angle}
          d="M50 10 Q65 30 50 50 Q35 30 50 10"
          transform={`rotate(${angle} 50 50)`}
          className="opacity-50"
        />
      ))}
    </svg>
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 kolam-pattern opacity-5 pointer-events-none"></div>

      <div ref={el => bgElementsRef.current[0] = el} className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none">
        <RangoliSVG className="w-full h-full" />
      </div>
      <div ref={el => bgElementsRef.current[1] = el} className="absolute -bottom-24 -right-24 w-96 h-96 opacity-20 pointer-events-none">
        <RangoliSVG className="w-full h-full" />
      </div>
      <div ref={el => bgElementsRef.current[2] = el} className="absolute top-1/2 left-1/4 w-48 h-48 opacity-[0.05] pointer-events-none">
        <RangoliSVG className="w-full h-full" />
      </div>
      <div ref={el => bgElementsRef.current[3] = el} className="absolute top-1/3 right-1/4 w-64 h-64 opacity-[0.08] pointer-events-none">
        <RangoliSVG className="w-full h-full" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-start mb-24 gap-x-12 gap-y-4">
          <div className="flex flex-col">
            <h2 className="text-gold text-lg font-tamil tracking-[0.3em] uppercase whitespace-nowrap">சிறப்பு சேவைகள்</h2>
            <div className="w-12 h-[1px] bg-gold opacity-30 mt-2"></div>
          </div>
          <h3 className="text-maroon text-4xl md:text-6xl font-heading font-bold flex flex-wrap items-baseline gap-x-4">
            <span>Our</span>
            <span className="gold-gradient-text">Signature</span>
            <span>Services</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-ivory/80 backdrop-blur-sm p-12 traditional-border hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block grayscale group-hover:grayscale-0">
                {service.icon}
              </div>

              <h4 className="text-2xl font-heading font-bold text-maroon mb-2">{service.title}</h4>
              <p className="text-gold font-tamil text-sm mb-6 tracking-widest">{service.tamil}</p>

              <p className="text-maroon/70 font-body leading-relaxed group-hover:text-maroon transition-colors duration-300">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-gold/10">
                <a href="#contact" className="text-xs font-bold tracking-[0.2em] text-maroon hover:text-gold transition-colors duration-300 uppercase">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
