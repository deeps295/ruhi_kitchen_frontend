import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-ivory relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-maroon">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div ref={imageRef} className="lg:w-1/2 relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border border-gold opacity-30 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="traditional-border p-2 bg-white shadow-2xl">
              <img
                src="https://wp.scoopwhoop.com/wp-content/uploads/2017/09/59a5253a6e510a069e43f935_356fbdba-d570-41b4-888d-138129b70355.jpg"
                alt="Traditional South Indian Culinary Setup"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div ref={contentRef} className="lg:w-1/2">
            <h2 className="text-gold text-lg font-tamil mb-4 tracking-[0.4em] uppercase">எங்களைப் பற்றி</h2>
            <h3 className="text-maroon text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              A Legacy of <span className="gold-gradient-text">Authentic</span> Flavors
            </h3>

            <div className="w-24 h-1 bg-gold mb-10 opacity-40"></div>

            <p className="text-maroon/90 text-xl leading-relaxed mb-8 font-light italic"><h3>
              "Cooking is not just about ingredients, it's about the soul of tradition."</h3>
            </p>

            <p className="text-maroon/70 text-lg leading-relaxed mb-10 font-body max-w-xl">
              At RUHI'S KITCHEN, we believe that food is a celebration of heritage. Originating from the heart of Chettinad, we bring you recipes passed down through generations, ensuring every bite carries the true essence of traditional Tamil hospitality.
            </p>

            <div className="flex gap-8 items-stretch mb-12">
              <div className="w-1.5 bg-gold shrink-0"></div>
              <p className="text-2xl md:text-3xl font-tamil leading-relaxed text-maroon font-bold italic">
                "ஒவ்வொரு விருந்திலும் <br />பாரம்பரியத்தின் சுவை"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-gold/10">
              <div>
                <p className="text-5xl font-bold text-maroon font-heading mb-2">25+</p>
                <p className="text-xs text-gold font-bold uppercase tracking-[0.2em]">Years of Legacy</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-maroon font-heading mb-2">1k+</p>
                <p className="text-xs text-gold font-bold uppercase tracking-[0.2em]">Events Catered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
