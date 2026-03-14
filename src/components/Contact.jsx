import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-beige kolam-pattern">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border-t-8 border-gold">
          <div className="bg-maroon text-gold p-12 md:w-1/3 flex flex-col justify-center">
            <h3 className="text-3xl font-heading mb-6">Enquiry</h3>
            <p className="font-tamil mb-8 text-beige/80">விசாரணைச் செய்யுங்கள்</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span>+91 80566 10204</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <div className="p-12 md:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-maroon font-bold mb-2">Name</label>
                  <input type="text" className="w-full border-b-2 border-beige focus:border-gold outline-none py-2 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-maroon font-bold mb-2">Phone</label>
                  <input type="text" className="w-full border-b-2 border-beige focus:border-gold outline-none py-2 transition-colors" placeholder="Your Phone Number" />
                </div>
              </div>
              <div>
                <label className="block text-maroon font-bold mb-2">Event Type</label>
                <select className="w-full border-b-2 border-beige focus:border-gold outline-none py-2 transition-colors bg-white">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Family Function</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-maroon font-bold mb-2">Message</label>
                <textarea rows="4" className="w-full border-b-2 border-beige focus:border-gold outline-none py-2 transition-colors resize-none" placeholder="Details about your event..."></textarea>
              </div>
              <button type="submit" className="w-full bg-maroon text-gold font-bold py-4 rounded-xl hover:bg-[#521717] transition-colors shadow-lg">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
