import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: 'Languages',
    number: '01',
    skills: ['C++', 'Python', 'JavaScript'],
  },
  {
    label: 'Technologies & Frameworks',
    number: '02',
    skills: ['HTML', 'CSS', 'React JS', 'Node JS', 'MongoDB', 'Tailwind CSS', 'Git', 'GitHub', 'Blender'],
  },
  {
    label: 'Domain Skills',
    number: '03',
    skills: [
      'Data Structures & Algorithms',
      'Problem-Solving',
      'Responsive Web Design',
      'Object-Oriented Programming',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-40 px-6 md:px-12 bg-light-navy text-white">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end border-b-2 border-slate pb-4 mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-lightest-slate">
            Skills
          </h2>
          <span className="text-slate font-mono hidden md:block">03</span>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-20">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="grid md:grid-cols-12 gap-6 md:gap-12 items-start"
            >
              {/* Category label */}
              <div className="md:col-span-3">
                <span className="text-teal font-mono text-sm tracking-widest uppercase block mb-2">
                  / {cat.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-lightest-slate uppercase tracking-tight leading-tight">
                  {cat.label}
                </h3>
              </div>

              {/* Skill chips */}
              <motion.div
                className="md:col-span-9 flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    variants={chipVariants}
                    className="px-5 py-2 border border-lightest-navy text-slate font-mono text-sm uppercase tracking-wider
                               hover:border-teal hover:text-teal hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
