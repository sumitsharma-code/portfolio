import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto pt-20">
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lightest-slate font-mono mb-5 ml-1"
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-5xl md:text-7xl font-bold text-teal mb-4 tracking-tight"
      >
        Sumit.
      </motion.h1>
      
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-slate mb-6"
      >
        I code stuff and cook beats.
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-slate text-lg md:text-xl max-w-[540px] mb-12 leading-relaxed"
      >
        I'm a B.Tech student focused on building exceptional digital experiences through full-stack development. I care about accessibility, human-centered design, and sometimes, I express creativity by making music.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <a 
          href="#projects" 
          className="text-teal border border-teal rounded px-7 py-4 font-mono text-sm hover:bg-teal/10 transition-colors inline-block"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
