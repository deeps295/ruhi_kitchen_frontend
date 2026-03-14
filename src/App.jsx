import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import heroImg from './assets/hero.png'

function App() {
  return (
    <div className="min-h-screen bg-beige selection:bg-gold selection:text-maroon overflow-x-hidden">
      <Navbar />
      <main>
        <Hero heroImage={heroImg} />
        <About />
        <div className="temple-divider opacity-50"></div>
        <Services />
        <div className="temple-divider opacity-50"></div>
        <Gallery />
        <div className="temple-divider opacity-50"></div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
