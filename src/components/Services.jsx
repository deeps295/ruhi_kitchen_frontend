import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Wedding Catering",
      tamil: "திருமண விருந்து",
      description: "Grand traditional wedding feasts served on banana leaves with authentic spices.",
      icon: "💍"
    },
    {
      title: "Event Catering",
      tamil: "நிகழ்ச்சி விருந்து",
      description: "From corporate events to social gatherings, we bring the best of South Indian cuisine.",
      icon: "🎉"
    },
    {
      title: "Function Catering",
      tamil: "விசேஷ விருந்து",
      description: "Housewarming, baby showers, and all traditional family functions curated with love.",
      icon: "🏠"
    }
  ];

  return (
    <section id="services" className="py-20 bg-beige kolam-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-maroon text-4xl md:text-5xl font-heading mb-2">Our Services</h2>
          <div className="temple-divider mx-auto mb-4"></div>
          <p className="text-maroon/70 font-tamil text-xl">சிறப்பு சேவைகள்</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-gold hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
              <h3 className="text-2xl font-bold text-maroon mb-1">{service.title}</h3>
              <p className="text-gold font-tamil mb-4">{service.tamil}</p>
              <p className="text-maroon/80 font-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
