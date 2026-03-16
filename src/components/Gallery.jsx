import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const images = [
    {
      src: "https://wallpaperaccess.com/full/6340449.jpg",
      alt: "Traditional Morning Feast"
    },
    {
      src: "https://rakskitchen.net/wp-content/uploads/2014/03/12848548843_64fcef3f69_b.jpg",
      alt: "Authentic Food Combo"
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/035/375/552/non_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg",
      alt: "Sizzling Biryani"
    },
    {
      src: "https://img.freepik.com/premium-photo/indian-sweets-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu-gujiya_999766-2684.jpg?w=2000",
      alt: "Royal Sweets"
    },
    {
      src: "https://www.tastingtable.com/img/gallery/12-traditional-diwali-snacks-you-need-to-try/l-intro-1698942348.jpg",
      alt: "South Indian Special Chats"
    },
    {
      src: "https://munchmalaysia.com/wp-content/uploads/2024/04/Bonda-The-Crispy-Spicy-South-Indian-Snack.jpg",
      alt: "Evening Snacks"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(itemsRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-32 bg-maroon relative overflow-hidden"
    >
      <div className="absolute inset-0 kolam-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-gold text-lg font-tamil mb-4 tracking-[0.4em] uppercase">உணவுத் தொகுப்பு</h2>
          <h3 className="text-white text-4xl md:text-6xl font-heading font-bold mb-6">Visual <span className="gold-gradient-text">Feasts</span></h3>
          <div className="w-24 h-[1px] bg-gold mx-auto opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="relative aspect-square overflow-hidden group traditional-border border-gold/40 cursor-pointer shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center p-8">
                <span className="text-gold border border-gold px-8 py-3 uppercase text-xs tracking-[0.3em] font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.alt}
                </span>
                <div className="w-12 h-[1px] bg-white/40 mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full temple-divider opacity-10 rotate-180"></div>
    </section>
  );
};

export default Gallery;
