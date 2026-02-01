import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const certificates = [
    {
      title: 'Master Generative AI and Generative AI Tools',
      organization: 'Udemy',
      date: "Sep '25",
      link: 'https://www.udemy.com/certificate/UC-12194f63-21d3-486c-9bcf-2ad6de9f9145/'
    },
    {
      title: 'Fundamentals of Data Structures using C++',
      organization: 'Lovely Professional University',
      date: "Jul '25",
      link: '#'
    },
    {
      title: 'The Apprentice Project (TAP) Internship',
      organization: 'MentorMe',
      date: "Jul '24",
      link: 'https://www.theapprenticeproject.org/'
    },
    {
      title: 'Legacy Web Design V8',
      organization: 'FreeCodeCamp',
      date: "May '24",
      link: 'https://www.freecodecamp.org/certification/sumit_code/responsive-web-design'
    }
  ];

  const achievementsList = [
    {
      title: 'Solved 150+ LeetCode problems and earned 100 Days Badge 2025.',
      organization: 'Leetcode',
      link: 'https://leetcode.com/u/sumiitsharma/'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="achievements" className="section-padding min-h-screen items-center py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-12"
      >
        <span className="text-teal font-mono text-xl mr-4">02.</span>
        <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap mr-6">Certificates & Achievements</h2>
        <div className="h-[1px] bg-lightest-navy w-full max-w-[300px]"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
        
        {/* Certificates Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-lightest-slate mb-6 flex items-center"
          >
            <span className="text-teal mr-2">▹</span> Certificates
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {certificates.map((item, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-light-navy/50 p-6 rounded-lg hover:bg-light-navy transition-colors border-l-4 border-teal shadow-lg group flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-lightest-slate group-hover:text-teal transition-colors flex items-center gap-2">
                       {item.link !== '#' ? (
                         <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                           {item.title}
                           <ExternalLink className="w-4 h-4 opacity-70" />
                         </a>
                       ) : (
                         item.title
                       )}
                    </h4>
                    <p className="text-teal font-mono text-sm mt-1">| {item.organization}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 min-w-max">
                     <span className="text-slate font-mono text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </span>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-lightest-slate mb-6 flex items-center"
          >
             <span className="text-teal mr-2">▹</span> Achievements
          </motion.h3>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="space-y-4"
          >
            {achievementsList.map((item, i) => (
               <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-light-navy/50 p-6 rounded-lg hover:bg-light-navy transition-colors border-l-4 border-t-0 border-r-0 border-b-0 border-teal shadow-lg group flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                 <div className="flex-1">
                    <h4 className="text-lg font-bold text-lightest-slate group-hover:text-teal transition-colors flex items-center gap-2">
                       {item.link && item.link !== '#' ? (
                         <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                           {item.title}
                           <ExternalLink className="w-4 h-4 opacity-70" />
                         </a>
                       ) : (
                         item.title
                       )}
                    </h4>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-teal font-mono text-sm">| {item.organization}</span>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
