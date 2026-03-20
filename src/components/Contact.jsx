import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Spotify = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14.5c2.5-1 5.5-1 8 0" />
    <path d="M8 11.5c2.5-1 5.5-1 8 0" />
    <path d="M8 8.5c2.5-1 5.5-1 8 0" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-navy text-lightest-slate text-center flex flex-col items-center min-h-[80vh] justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] w-full"
      >
        <p className="font-mono text-sm tracking-widest uppercase mb-8 text-slate">/ What's Next?</p>
        
        <h2 className="text-[10vw] leading-none font-bold uppercase tracking-tighter mb-12 hover:text-teal transition-colors">
          <a href="mailto:sumitsha711@gmail.com">Let's Talk.</a>
        </h2>
        
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-16 text-slate">
          I'm currently looking for new opportunities. My inbox is always open for questions, collaborations, or just a friendly hello.
        </p>

        <div className="flex justify-center gap-10">
          {[
            { icon: <Github size={32} />, href: 'https://github.com/sumitsharma-code' },
            { icon: <Linkedin size={32} />, href: 'https://www.linkedin.com/in/sumiiitsharma/' },
            { icon: <Spotify size={32} />, href: 'https://open.spotify.com/artist/3cmuxy1d4dLjlqjR1WlPs7' },
            { icon: <Mail size={32} />, href: 'mailto:sumitsha711@gmail.com' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('mailto') ? "_self" : "_blank"}
              rel={social.href.startsWith('mailto') ? "" : "noopener noreferrer"}
              className="text-slate hover:text-teal hover:-translate-y-2 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-navy py-12 text-center text-white border-t border-lightest-navy">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest mb-4 md:mb-0 text-slate">
          &copy; {new Date().getFullYear()} SUMIT SHARMA. ALL RIGHTS RESERVED.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xs uppercase tracking-widest hover:text-teal transition-colors"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default Contact;
