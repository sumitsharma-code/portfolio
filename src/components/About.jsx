import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const skills = [
    'C++', 'PYTHON', 'JAVASCRIPT', 'REACT JS', 'NODE JS', 'MONGODB', 'TAILWIND CSS', 'GIT', 'GITHUB', 'BLENDER',
    'C++', 'PYTHON', 'JAVASCRIPT', 'REACT JS', 'NODE JS', 'MONGODB', 'TAILWIND CSS', 'GIT', 'GITHUB', 'BLENDER',
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Para 1: bright → dim as you scroll past 40%
  const para1Color = useTransform(scrollYProgress, [0, 0.25, 0.45], ["#f8fafc", "#f8fafc", "#475569"]);
  // Para 2: dim → bright at 0.3, stays bright until 0.72, then dims smoothly
  const para2Color = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.72, 0.88], ["#475569", "#475569", "#f8fafc", "#f8fafc", "#475569"]);
  // Para 3: dim → bright starting at 0.72
  const para3Color = useTransform(scrollYProgress, [0.72, 0.92], ["#334155", "#f8fafc"]);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-light-navy text-white min-h-[160vh] relative flex flex-col justify-center overflow-clip">
      
      {/* Infinite Marquee for Skills */}
      <div className="absolute top-0 left-0 w-full h-[300px] overflow-hidden z-0 pointer-events-none">
        <div className="w-[110vw] -ml-[5vw] mt-20 border-y-2 border-slate py-6 bg-navy rotate-2">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="flex whitespace-nowrap w-max"
          >
            {skills.map((skill, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold font-mono tracking-widest px-8 text-white uppercase">
                {skill} <span className="text-teal ml-8">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10 mt-48 lg:mt-64">
        <div className="grid md:grid-cols-12 gap-12 items-start relative h-full">
          {/* Brutalist Bio Text */}
          <div className="md:col-span-7">
            <h2 className="text-sm font-mono tracking-widest text-slate mb-6 uppercase">/ About Me</h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight uppercase font-heading pr-4 lg:pr-12"
            >
              <motion.p style={{ color: para1Color }} className="mb-8">
                I'm Sumit Sharma — a CS student who turns ideas into real-world digital experiences.
              </motion.p>
              <motion.p style={{ color: para2Color }} className="mb-8">
                B.Tech Computer Science. Full-stack focused. Building scalable apps with JavaScript, Node.js & modern frameworks — powered by a love for clean interfaces and strong DSA foundations.
              </motion.p>
              <motion.p style={{ color: para3Color }} className="text-xl md:text-2xl lg:text-3xl font-mono tracking-wide normal-case">
                Also a Punjabi music producer under{' '}
                <span className="text-teal font-bold">ZiKKR</span>
                {' '}— where code meets creativity.
              </motion.p>
            </motion.div>
          </div>

          {/* Stark Profile Image */}
          <div className="md:col-span-5 h-full relative mt-12 md:mt-0 pointer-events-none">
            <div className="sticky top-[20vh] flex justify-center md:justify-end mt-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-lg lg:max-w-2xl"
              >
                {/* Seamless Profile Image */}
                <div className="w-full flex items-start justify-center">
                  <img 
                    src="/prof-bg-rem.png" 
                    alt="Sumit" 
                    className="w-[145%] h-auto object-contain object-top drop-shadow-2xl pointer-events-auto md:-mr-20" 
                    style={{ 
                      maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", 
                      WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" 
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
