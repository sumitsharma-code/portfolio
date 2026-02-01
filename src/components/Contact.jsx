import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

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
    <section id="contact" className="section-padding py-24 text-center max-w-[600px] font-sans">
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-teal font-mono mb-6"
      >
        04. What's Next?
      </motion.p>
      
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6"
      >
        Get In Touch
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate text-lg mb-12"
      >
        I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>
      
      <motion.a 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        href="mailto:sumitsha711@gmail.com" 
        className="inline-block border border-teal text-teal px-8 py-4 rounded font-mono hover:bg-teal/10 transition-colors"
      >
        Say Hello
      </motion.a>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 mt-12"
      >
        {[
          { icon: <Github size={24} />, href: 'https://github.com/sumitsharma-code' },
          { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/sumiiitsharma/' },
          { icon: <Spotify size={24} />, href: 'https://open.spotify.com/artist/3cmuxy1d4dLjlqjR1WlPs7' },
          { icon: <Mail size={24} />, href: 'mailto:sumitsha711@gmail.com' },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target={social.href.startsWith('mailto') ? "_self" : "_blank"}
            rel={social.href.startsWith('mailto') ? "" : "noopener noreferrer"}
            className="text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  const socials = [
    { icon: <Github size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Mail size={20} />, href: 'mailto:sumitsha711@gmail.com' },
  ];

  return (
    <footer className="bg-navy py-8 text-center">
      <div className="flex justify-center gap-6 mb-8 md:hidden">
        {socials.map((s, i) => (
            <a 
              key={i} 
              href={s.href} 
              className="text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300"
            >
              {s.icon}
            </a>
        ))}
      </div>
      
      <a 
        href="https://github.com/bchiang7/v4" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-mono text-xs text-slate hover:text-teal mb-2 block transition-colors"
      >
        Start building
      </a>
      <p className="font-mono text-xs text-slate">
        &copy; {new Date().getFullYear()} Sumit. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Contact;
