import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      school: 'IIT Guwahati',
      location: 'Remote',
      degree: 'Credit-Linked Program / Artificial Intelligence & Machine Learning',
      details: 'Part-time · Online',
      date: "MAY '25 – PRESENT",
      link: 'https://www.iitg.ac.in/'
    },
    {
      school: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      degree: 'B.Tech CSE',
      details: 'CGPA: 7.62',
      date: "AUG '23 – PRESENT",
      link: 'https://www.lpu.in/'
    },
    {
      school: 'Pathseekers School',
      location: 'Beas, Punjab',
      degree: 'Intermediate / PCM',
      details: 'Percentage: 81.4',
      date: "APR '22 – APR '23",
      link: 'https://pathseekers.edu.in/'
    },
    {
      school: 'Pathseekers School',
      location: 'Beas, Punjab',
      degree: 'Matriculation',
      details: 'Percentage: 89.2',
      date: "APR '20 – APR '21",
      link: 'https://pathseekers.edu.in/'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-navy text-white min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end border-b-2 border-slate pb-4 mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-lightest-slate">Education</h2>
          <span className="text-slate font-mono hidden md:block">05</span>
        </motion.div>

        <div className="relative border-l-2 border-slate ml-2 md:ml-4">
          {education.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mb-16 relative pl-8 md:pl-16 group"
            >
              {/* Brutalist Timeline Marker */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 bg-white group-hover:scale-125 transition-transform"></div>

              <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
                <div>
                   <h3 className="text-3xl md:text-4xl font-bold text-lightest-slate uppercase tracking-tight">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-teal hover:underline transition-colors">
                        {item.school}
                      </a>
                    ) : (
                      item.school
                    )}
                  </h3>
                   <h4 className="text-xl text-slate font-sans mt-2 uppercase tracking-wide">{item.degree}</h4>
                   <p className="text-slate/80 font-mono mt-4 text-sm">{item.details} — {item.location}</p>
                </div>
                
                <div className="bg-white text-navy px-4 py-2 font-mono text-sm font-bold tracking-widest uppercase">
                  {item.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
