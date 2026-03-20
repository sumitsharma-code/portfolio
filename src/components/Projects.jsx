import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'INVENTORY APP',
      date: "DEC '25",
      description: 'Comprehensive inventory management system.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
      github: 'https://github.com/sumitsharma-code/inventory-app',
      external: 'https://www.quantara-inventory.tech/'
    },
    {
      title: 'AUDIENTRA',
      date: "JUN–JUL '25",
      description: 'Music streaming backend — secure auth, track uploads & playlist management.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'ImageKit', 'Multer'],
      github: 'https://github.com/sumitsharma-code/spotify-clone',
      external: null
    },
    {
      title: 'HOSPITAL SYSTEM',
      date: "JUL '25",
      description: 'C++ console system for patient records.',
      tech: ['C', 'C++'],
      github: 'https://github.com/sumitsharma-code/HospitalSystem',
      external: null
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-40 px-6 md:px-12 bg-navy text-white min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex justify-between items-end border-b-2 border-slate pb-8"
        >
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-lightest-slate">Selected Works</h2>
          <span className="text-slate font-mono hidden md:block">(03)</span>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-b border-lightest-navy relative py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-light-navy transition-colors duration-500 cursor-pointer overflow-hidden px-4 md:px-8"
            >
              <div className="flex relative z-10 w-full md:w-auto items-baseline gap-4 md:gap-8 mb-6 md:mb-0">
                <span className="text-slate font-mono text-sm">0{i + 1}</span>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500 text-lightest-slate">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex flex-col items-start md:items-end relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300 w-full md:w-auto">
                <p className="text-lg md:text-xl font-medium mb-3">{project.description}</p>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate">
                  {project.tech.map((t, index) => (
                    <li key={index} className="px-3 py-1 border border-slate rounded-full uppercase">{t}</li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-6">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-teal flex items-center gap-2 text-sm uppercase font-bold tracking-wider">
                      <span>Source</span> <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noreferrer" className="text-white hover:text-teal flex items-center gap-2 text-sm uppercase font-bold tracking-wider">
                      <span>Visit</span> <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
