import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, ShieldCheck } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function About() {
  const { summary, highlights, stats } = portfolioData.about;

  // Map dynamic string labels back to Lucide icons
  const iconMap = {
    "Years Experience": <Award size={24} />,
    "Academic Leadership": <BookOpen size={24} />,
    "Institutional Roles": <Users size={24} />,
    "QA Industry Exp.": <ShieldCheck size={24} />
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
              Bridging Academia & Industry Quality
            </h3>
            <p className="text-xs md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {summary}
            </p>
            
            <ul className="pt-4 space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="mt-1 p-1 bg-secondary/10 dark:bg-accent/10 rounded-full text-secondary dark:text-accent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 glass-card border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-primary-light/50 flex flex-col items-center text-center space-y-3"
              >
                <div className="p-3 bg-white dark:bg-primary rounded-xl text-secondary dark:text-accent shadow-sm">
                  {iconMap[stat.label] || <Award size={24} />}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
