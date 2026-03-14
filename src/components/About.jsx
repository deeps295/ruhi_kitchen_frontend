import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-maroon">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0"></div>
            <img
              src="https://im.whatshot.in/venue/2015/Dec/1449492214-v.jpg"
              alt="Traditional Kitchen"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-gold text-2xl font-tamil mb-2 tracking-widest">எங்களைப் பற்றி</h2>
            <h3 className="text-maroon text-4xl md:text-5xl font-heading mb-6">Traditional Heart, Modern Service</h3>
            <div className="temple-divider mb-8"></div>

            <p className="text-maroon/80 text-lg leading-relaxed mb-6 font-body">
              At RUHI'S KITCHEN, we believe that food is not just about sustenance; it's a celebration of heritage. Originating from the heart of Chettinad, we bring you recipes passed down through generations.
            </p>
            <p className="text-maroon/80 text-lg leading-relaxed mb-8 font-body">
              We specialize in authentic South Indian catering, ensuring every grain of rice and every spice blend carries the true essence of traditional Tamil hospitality. Whether it's a grand wedding or an intimate gathering, we serve tradition on a plate.
            </p>

            <div className="border-l-4 border-gold pl-6 py-2 mb-8 italic">
              <p className="text-maroon text-2xl font-tamil leading-relaxed">
                "ஒவ்வொரு விருந்திலும் <br />பாரம்பரியத்தின் சுவை."
              </p>
            </div>
            
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-maroon font-heading">25+</p>
                <p className="text-sm text-gold font-bold uppercase tracking-tighter">Years of Legacy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-maroon font-heading">500+</p>
                <p className="text-sm text-gold font-bold uppercase tracking-tighter">Events Catered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
