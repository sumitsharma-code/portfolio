import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      degree: 'Bachelor of Technology',
      details: 'Computer Science and Engineering; CGPA: 7.62',
      date: "Aug '23 – Present",
      link: 'https://www.lpu.in/'
    },
    {
      school: 'Pathseekers School',
      location: 'Beas, Punjab',
      degree: 'Intermediate',
      details: 'PCM: Percentage: 81.4',
      date: "Apr '22 – Apr '23",
      link: 'https://pathseekers.edu.in/'
    },
    {
      school: 'Pathseekers School',
      location: 'Beas, Punjab',
      degree: 'Matriculation',
      details: 'PCM: Percentage: 89.2',
      date: "Apr '20 – Apr '21",
      link: 'https://pathseekers.edu.in/'
    }
  ];

  return (
    <section id="education" className="section-padding min-h-screen items-center py-24 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-12"
      >
        <span className="text-teal font-mono text-xl mr-4">03.</span>
        <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap mr-6">Education</h2>
        <div className="h-[1px] bg-lightest-navy w-full max-w-[300px]"></div>
      </motion.div>

      <div className="max-w-3xl mx-auto relative border-l-2 border-light-navy ml-3 md:ml-6">
        {education.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-12 relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal border-4 border-navy box-content"></div>

            <div className="bg-light-navy/50 p-6 rounded-lg hover:bg-light-navy transition-colors shadow-lg group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                   <h3 className="text-xl font-bold text-lightest-slate group-hover:text-teal transition-colors flex items-center gap-2">
                    <GraduationCap className="text-teal w-6 h-6" />
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                        {item.school}
                        {/* Optionally add an external link icon here if desired, e.g. <ExternalLink className="w-4 h-4 opacity-70" /> */}
                      </a>
                    ) : (
                      item.school
                    )}
                  </h3>
                   <h4 className="text-lg text-slate font-medium mt-1">{item.degree}</h4>
                </div>
                
                <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 gap-1">
                   <span className="text-slate font-mono text-sm flex items-center bg-navy/50 px-3 py-1 rounded-full border border-teal/20">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-teal" />
                    {item.date}
                  </span>
                   <span className="text-slate/60 text-xs flex items-center mt-1">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="text-slate/90 pt-2 border-t border-lightest-navy/10 mt-2">
                <p>{item.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
