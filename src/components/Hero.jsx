import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Dramatic Parallax effects
  const yTitle1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yTitle2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const xTitle1 = useTransform(scrollYProgress, [0, 1], [0, -800]); // Slides left
  const xTitle2 = useTransform(scrollYProgress, [0, 1], [0, 800]);  // Slides right
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]); // Fades later

  return (
    <section ref={containerRef} className="h-[100vh] w-full flex flex-col justify-center relative overflow-hidden bg-navy">

      {/* Staggered Typography Content */}
      <div className="relative w-full h-full z-10 pointer-events-none max-w-[1600px] mx-auto">
        
        {/* Left Name Block & Info */}
        <div className="absolute left-2 md:left-6 lg:left-10 top-[12%] md:top-[25%] flex flex-col items-start z-10">
          <motion.div style={{ y: yTitle1, x: xTitle1, opacity }}>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
              className="text-[14vw] md:text-[16vw] leading-none font-bold text-[#bac4b8] uppercase tracking-tighter drop-shadow-2xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              SUMIT
            </motion.h1>
          </motion.div>

          <motion.div
            style={{ y: yTitle1, x: xTitle1, opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 md:mt-8 ml-2 text-left pointer-events-auto"
          >
            <p className="text-sm md:text-xl text-[#bac4b8] font-sans font-medium mix-blend-difference mb-1">Software Engineer,</p>
            <p className="text-sm md:text-xl text-[#bac4b8] font-sans font-medium mix-blend-difference mb-6 md:mb-8">& Musician</p>
            
            <a 
              href="#projects" 
              className="inline-block text-navy bg-[#bac4b8] px-8 py-3 rounded-full uppercase font-bold text-xs tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Works
            </a>
          </motion.div>
        </div>
        
        {/* Right Name Block */}
        <motion.div style={{ y: yTitle2, x: xTitle2, opacity }} className="absolute right-2 md:right-6 lg:right-10 top-[65%] md:top-[60%] flex flex-col items-end z-10">
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[14vw] md:text-[16vw] leading-none font-bold text-[#bac4b8] uppercase tracking-tighter drop-shadow-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            SHARMA
          </motion.h1>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
