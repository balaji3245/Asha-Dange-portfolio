import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, Target, Presentation } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    { title: "Department Leadership", desc: "Successfully heading academic and administrative operations.", icon: <Target size={32} /> },
    { title: "IQAC Coordination", desc: "Driving institutional quality enhancement initiatives.", icon: <Star size={32} /> },
    { title: "NSS Leadership", desc: "Organizing extensive community service and extension programs.", icon: <Trophy size={32} /> },
    { title: "Student Development", desc: "Fostering programs for skill enhancement and industry readiness.", icon: <Users size={32} /> },
    { title: "Event Organization", desc: "Coordinating national-level academic seminars and workshops.", icon: <Presentation size={32} /> }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-primary-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Key Achievements
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:bg-white dark:hover:bg-primary transition-all duration-300"
            >
              <div className="p-4 bg-secondary/10 dark:bg-accent/10 rounded-full text-secondary dark:text-accent mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
