import React from 'react';

const Gallery = () => {
  const images = [
    "https://tse2.mm.bing.net/th/id/OIP.AAEh5BmBs2IZ7HQRNVG2pwHaFo?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://rakskitchen.net/wp-content/uploads/2014/03/12848548843_64fcef3f69_b.jpg",
    "https://img.freepik.com/premium-photo/juicy-chicken-biryani-with-smoke_303085-7807.jpg",
    "https://img.freepik.com/premium-photo/indian-sweets-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu-gujiya_999766-2684.jpg?w=2000",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    "https://munchmalaysia.com/wp-content/uploads/2024/04/Bonda-The-Crispy-Spicy-South-Indian-Snack.jpg"
  ];

  return (
    <section id="gallery" className="py-20 bg-maroon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold text-4xl md:text-5xl font-heading mb-2">Food Gallery</h2>
          <div className="temple-divider bg-gold/30 mx-auto mb-4"></div>
          <p className="text-beige/80 font-tamil text-xl">உணவுத் தொகுப்பு</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative overflow-hidden group rounded-xl shadow-2xl h-80">
              <img
                src={img}
                alt={`Traditional Dish ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold border-2 border-gold px-6 py-2 rounded-full font-bold">View Dish</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
