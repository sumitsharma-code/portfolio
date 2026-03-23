import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact, { Footer } from './components/Contact';
import ResumePage from './pages/ResumePage';
import MusicPage from './pages/MusicPage';

const HomePage = () => (
  <div className="min-h-screen bg-navy text-slate font-sans selection:bg-teal selection:text-navy">
    <Navbar />
    <main className="container mx-auto px-6 md:px-12 lg:px-24">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Hobbies />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/music" element={<MusicPage />} />
    </Routes>
  );
}

export default App;
