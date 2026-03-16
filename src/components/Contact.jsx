import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
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
      id="contact" 
      ref={sectionRef}
      className="py-32 bg-ivory relative overflow-hidden kolam-pattern"
    >
      <div className="container mx-auto px-8 max-w-6xl">
        <div 
          ref={formRef}
          className="bg-white shadow-[0_50px_100px_-20px_rgba(107,30,30,0.15)] flex flex-col md:flex-row traditional-border"
        >
          <div className="bg-maroon text-gold p-16 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-sm font-tamil tracking-[0.4em] uppercase mb-4 opacity-70">விசாரணை</h2>
              <h3 className="text-4xl font-heading font-bold mb-8">Begin Your <span className="text-white">Tradition</span></h3>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold/60 mb-1">Call Us</p>
                    <p className="text-lg font-medium">+91 80566 10204</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold/60 mb-1">Visit Us</p>
                    <p className="text-lg font-medium">Coimbatore, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-xs tracking-widest opacity-40 uppercase">
              Est. 1999 • Authentic Chettinad
            </div>
          </div>

          <div className="p-16 md:w-3/5 bg-white">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-maroon/20 focus:border-gold outline-none py-4 transition-all duration-300 peer group-hover:border-maroon/40"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-maroon/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-maroon/20 focus:border-gold outline-none py-4 transition-all duration-300 peer group-hover:border-maroon/40"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-maroon/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Phone Number</label>
                </div>
              </div>

              <div className="relative group">
                <select className="w-full bg-transparent border-b border-maroon/20 focus:border-gold outline-none py-4 transition-all duration-300 appearance-none cursor-pointer group-hover:border-maroon/40">
                  <option disabled selected>Type of Event</option>
                  <option>Royal Wedding</option>
                  <option>Corporate Gala</option>
                  <option>Traditional Ceremony</option>
                  <option>Private Banquet</option>
                </select>
                <div className="absolute right-0 top-5 pointer-events-none text-gold">↓</div>
              </div>

              <div className="relative group">
                <textarea 
                  rows="3" 
                  className="w-full bg-transparent border-b border-maroon/20 focus:border-gold outline-none py-4 transition-all duration-300 resize-none peer group-hover:border-maroon/40"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-0 top-4 text-maroon/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Event Details</label>
              </div>

              <button 
                type="submit" 
                className="group relative w-full bg-maroon text-gold font-bold py-5 overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <span className="relative z-10 tracking-[0.3em] uppercase">Request a Quote</span>
                <div className="absolute inset-0 w-0 h-full bg-gold transition-all duration-500 group-hover:w-full"></div>
                <span className="absolute inset-0 flex items-center justify-center text-maroon font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 tracking-[0.3em] uppercase">Submit Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
