import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'MERN Stack',
    'Python',
    'C++',
    'Blender',
    'JavaScript (ES6+)',
    'FL Studio'
  ];

  return (
    <section id="about" className="section-padding min-h-screen flex items-center">
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-10"
        >
          <span className="text-teal font-mono text-xl mr-4">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap mr-6">About Me</h2>
          <div className="h-[1px] bg-lightest-navy w-full max-w-[300px]"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate text-lg leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-4">
                Hello! My name is <span className="font-bold text-teal">Sumit</span>, and I enjoy creating things that live on the internet. My interest in <span className="font-bold text-teal">web development</span> grew from experimenting with layouts, interfaces, and figuring out how things work under the hood — turns out turning ideas into real web experiences is pretty addictive.
              </p>
              <p className="mb-4">
                Fast-forward to today, I’m a <span className="font-bold text-teal">B.Tech CSE</span> student exploring the world of software engineering. I enjoy building clean, accessible, and human-centered digital experiences, and I’m currently focused on strengthening my <span className="font-bold text-teal">full-stack skills</span> and problem-solving through DSA.
              </p>
              <p className="mb-4">
                Outside of coding, I like making <span className="text-teal font-bold">music</span> — it’s my way of staying creative and balanced.
              </p>
              <p className="mb-6">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 font-mono text-sm max-w-[400px]">
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-slate">
                    <span className="text-teal mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="md:col-span-1 flex justify-center md:justify-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-64 h-64 md:w-72 md:h-72 group"
            >
              {/* Image Container with Hover Effect */}
              <div className="w-full h-full bg-light-navy rounded overflow-hidden border-2 border-teal transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 relative z-0 text-center flex items-center justify-center">
                 <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover transition-all duration-300" />
              </div>
              <div className="absolute inset-0 border-2 border-teal rounded translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
