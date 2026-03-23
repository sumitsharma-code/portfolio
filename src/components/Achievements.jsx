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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-navy text-white min-h-screen">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-1 gap-20">
        <div id="certifications">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-end border-b-2 border-slate pb-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-lightest-slate">Certificates</h2>
            <span className="text-slate font-mono hidden md:block">03</span>
          </motion.div>

          {/* Certificates Section */}
          <div className="mt-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {certificates.map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="border-b border-lightest-navy hover:bg-light-navy transition-colors duration-300 py-6 px-4 group flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4"
                >
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-lightest-slate uppercase tracking-tight group-hover:text-teal transition-colors">
                         {item.link !== '#' ? (
                           <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                             {item.title}
                             <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                           </a>
                         ) : (
                           item.title
                         )}
                      </h4>
                      <p className="text-slate font-mono text-xs uppercase tracking-widest mt-2">{item.organization}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 min-w-max">
                       <span className="text-white font-mono text-sm border border-slate px-3 py-1 rounded-full uppercase">
                        {item.date}
                      </span>
                    </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div id="achievements">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-end border-b-2 border-slate pb-4 pt-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-lightest-slate">Achievements</h2>
            <span className="text-slate font-mono hidden md:block">04</span>
          </motion.div>

          {/* Achievements Section */}
          <div className="mt-8">
            <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="flex flex-col"
          >
            {achievementsList.map((item, i) => (
               <motion.div 
                key={i}
                variants={itemVariants}
                className="border-b border-lightest-navy hover:bg-light-navy transition-colors duration-300 py-6 px-4 group flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4"
              >
                 <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-lightest-slate uppercase tracking-tight group-hover:text-teal transition-colors">
                       {item.link && item.link !== '#' ? (
                         <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                           {item.title}
                           <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                         </a>
                       ) : (
                         item.title
                       )}
                    </h4>
                    <p className="text-slate font-mono text-xs uppercase tracking-widest mt-2">{item.organization}</p>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
