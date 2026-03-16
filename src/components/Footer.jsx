import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <footer className="bg-maroon text-gold py-24 pb-12 border-t border-gold/20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-heading font-bold mb-4 tracking-[0.1em]">RUHI'S KITCHEN</h3>
            <p className="font-tamil text-beige/80 text-lg mb-8 leading-relaxed">
              பாரம்பர்ய சுவை, நவீன முறையில்.
            </p>
            <div className="flex space-x-6">
              {['f', 'ig', 'tw'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-gold flex items-center justify-center hover:bg-gold-light transition-all duration-300 shadow-lg text-maroon font-bold text-xl"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-2xl font-heading font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-beige/80 text-lg">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-2xl font-heading font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-beige/80 text-lg">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>House Functions</li>
              <li>Party Orders</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-2xl font-heading font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-beige/80 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-pink-400 mt-1">📍</span>
                <span>123, Vivekanandha Street,<br />Kinathukadavu,<br /> Coimbatore - 641 202</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-pink-400">📞</span>
                <span className="text-beige">+91 80566 10204</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-pink-400">✉️</span>
                <span>ruhi.kitchen@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-beige/40 text-sm tracking-widest">
          <p>© 2026 RUHI'S KITCHEN Traditional Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
