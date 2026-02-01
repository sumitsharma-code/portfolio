import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Inventory App',
      date: "Dec '25",
      description: 'Full-stack MERN web application for comprehensive inventory management.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/sumitsharma-code/inventory-app',
      external: 'https://www.quantara-inventory.tech/'
    },
    {
      title: 'Hospital Patient System',
      date: "Jul '25",
      description: 'Efficient C++ console system for managing patient records involving file-based data persistence.',
      tech: ['C', 'C++'],
      github: 'https://github.com/sumitsharma-code/HospitalSystem?tab=readme-ov-file#hospital-patient-system',
      external: null
    }
  ];

  return (
    <section id="projects" className="section-padding py-24 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-12"
      >
        <span className="text-teal font-mono text-xl mr-4">03.</span>
        <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap mr-6">Some Things I've Built</h2>
        <div className="h-[1px] bg-lightest-navy w-full max-w-[300px]"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-light-navy rounded-lg p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <Folder className="text-teal w-10 h-10" />
              <div className="flex flex-col items-end gap-2">
                 <div className="flex gap-4">
                  <a href={project.github} className="text-slate hover:text-teal transition-colors" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                  {project.external && project.external !== '#' && (
                    <a href={project.external} className="text-slate hover:text-teal transition-colors" aria-label="Live Site">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <span className="text-slate font-mono text-xs flex items-center">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    {project.date}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-lightest-slate mb-4 group-hover:text-teal transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate mb-8 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-slate opacity-80 mt-auto">
              {project.tech.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
