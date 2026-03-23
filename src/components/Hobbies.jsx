import React from 'react';
import { motion } from 'framer-motion';
import { Music, Dumbbell, Plane, Book, Coffee, Heart } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    { name: 'MUSIC', icon: <Music size={48} /> },
    { name: 'FITNESS', icon: <Dumbbell size={48} /> },
    { name: 'TRAVELLING', icon: <Plane size={48} /> },
    { name: 'READING', icon: <Book size={48} /> },
    { name: 'COFFEE', icon: <Coffee size={48} /> },
    { name: 'SOCIAL', icon: <Heart size={48} /> },
  ];

  return (
    <section id="hobbies" className="py-24 px-6 md:px-12 bg-navy text-white min-h-[50vh] flex flex-col justify-center border-t-2 border-slate">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-lightest-slate mb-6">Off The Grid</h2>
          <p className="text-slate font-mono text-sm max-w-lg mx-auto uppercase tracking-widest">
            Other creative fields and activities I enjoy
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-lightest-navy">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square border-r border-b border-lightest-navy flex flex-col items-center justify-center gap-6 hover:bg-white hover:text-navy text-slate transition-all duration-300 group cursor-default"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {hobby.icon}
              </div>
              <span className="font-sans font-bold text-xs uppercase tracking-widest">{hobby.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
