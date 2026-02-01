import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Education', to: 'education' },
  { name: 'Work', to: 'projects' },
  { name: 'Contact', to: 'contact' },
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="flex justify-between items-center px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-teal font-mono text-xl font-bold border-2 border-teal rounded p-1"
        >
          Sumit Sharma
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ol className="flex gap-8 text-light-slate font-mono text-sm">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-teal transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ol>
          <motion.a 
            href="/resume.pdf" 
            target="_blank"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-teal border border-teal rounded px-4 py-2 font-mono text-sm hover:bg-teal/10 transition-colors"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-teal">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-0 bg-light-navy flex flex-col items-center justify-center md:hidden"
            >
              <ul className="flex flex-col gap-8 text-center">
                {navLinks.map((link, i) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="text-light-slate font-mono text-lg hover:text-teal block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
