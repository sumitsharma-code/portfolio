import React from 'react';
import { motion } from 'framer-motion';
import { Music, Dumbbell, Plane, Book, Coffee, Heart } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    { name: 'Music', icon: <Music size={24} /> },
    { name: 'Fitness', icon: <Dumbbell size={24} /> },
    { name: 'Travelling', icon: <Plane size={24} /> },
    { name: 'Reading', icon: <Book size={24} /> },
    { name: 'Coffee', icon: <Coffee size={24} /> },
    { name: 'Social Service', icon: <Heart size={24} /> },
  ];

  return (
    <section className="section-padding py-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-lightest-slate mb-4">Other Interests</h2>
        <p className="text-slate max-w-lg mx-auto">
          When I'm not coding, I enjoy exploring other creative fields and activities.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {hobbies.map((hobby, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-light-navy p-6 rounded-lg flex flex-col items-center justify-center gap-3 hover:text-teal hover:-translate-y-1 transition-all duration-300 group cursor-default"
          >
            <div className="text-slate group-hover:text-teal transition-colors">
              {hobby.icon}
            </div>
            <span className="font-mono text-sm text-slate group-hover:text-teal transition-colors">{hobby.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
