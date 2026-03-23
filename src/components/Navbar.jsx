import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

const navLinks = [
  { name: 'ABOUT', to: 'about' },
  { name: 'SKILLS', to: 'skills' },
  { name: 'EDUCATION', to: 'education' },
  { name: 'CERTIFICATION', to: 'certifications' },
  { name: 'ACHIEVEMENT', to: 'achievements' },
  { name: 'OFF THE GRID', to: 'hobbies' },
  { name: 'CONTACT', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-navy/95 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto flex justify-between items-center px-6 md:px-12">
        <RouterLink to="/" className="text-white font-heading text-2xl md:text-3xl font-bold uppercase tracking-tighter hover:text-teal transition-colors">
          SUMIT
        </RouterLink>

        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-12 text-slate font-sans text-xs uppercase tracking-widest font-bold">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {link.name}
                </ScrollLink>
              </motion.li>
            ))}
            <motion.li initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <RouterLink to="/music" className="cursor-pointer hover:text-white transition-colors flex items-center gap-1.5">
                <Music size={12} /> MUSIC
              </RouterLink>
            </motion.li>
          </ul>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <RouterLink
              to="/resume"
              className="text-navy bg-white rounded-full px-6 py-2 font-sans text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform inline-block"
            >
              RESUME
            </RouterLink>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-navy flex flex-col items-center justify-center md:hidden"
            >
              <ul className="flex flex-col gap-10 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={800}
                      onClick={() => setIsOpen(false)}
                      className="text-lightest-slate font-heading text-5xl uppercase font-bold tracking-tighter hover:text-teal block"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                ))}
                <li>
                  <RouterLink
                    to="/music"
                    onClick={() => setIsOpen(false)}
                    className="text-lightest-slate font-heading text-5xl uppercase font-bold tracking-tighter hover:text-teal flex items-center justify-center gap-3"
                  >
                    <Music size={32} /> MUSIC
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/resume"
                    onClick={() => setIsOpen(false)}
                    className="text-navy bg-white mt-8 inline-block rounded-full px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest"
                  >
                    RESUME
                  </RouterLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
