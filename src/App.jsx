import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact, { Footer } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-navy text-slate font-sans selection:bg-teal selection:text-navy">
      <Navbar />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Achievements />
        <Education />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
