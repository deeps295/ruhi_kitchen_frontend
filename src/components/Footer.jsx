import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-maroon text-gold py-16 border-t-4 border-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-heading mb-4 uppercase tracking-widest">RUHI'S KITCHEN</h3>
            <p className="font-tamil text-beige/60 text-sm mb-6">பாரம்பர்ய சுவை, நவீன முறையில்.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-maroon transition-colors text-xl">f</a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-maroon transition-colors text-xl">ig</a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-maroon transition-colors text-xl">tw</a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-beige/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-beige/80">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>House Functions</li>
              <li>Party Orders</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-beige/80">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <span>123, Vivekanandha Street,<br />Kinathukadavu,<br /> Coimbatore - 641 202</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <span>+91 80566 10204</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <span>ruhi.kitchen@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 text-center text-beige/40 text-sm">
          <p>© 2026 RUHI'S KITCHEN Traditional Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
