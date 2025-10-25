import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

