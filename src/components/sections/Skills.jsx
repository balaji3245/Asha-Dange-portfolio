import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Skills() {
  const { domain: domainSkills, tools } = portfolioData.skills;

  return (
    <section id="skills" className="py-24 bg-white dark:bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Core Competencies
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Domain Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-secondary/10 dark:bg-accent/10 rounded-lg">
                <Settings className="text-secondary dark:text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Domain Expertise</h3>
            </div>
            
            <div className="space-y-6">
              {domainSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                      className="bg-secondary dark:bg-accent h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Tools Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-secondary/10 dark:bg-accent/10 rounded-lg">
                <Code2 className="text-secondary dark:text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Technical Tools</h3>
            </div>

            <div className="flex-1 flex content-start flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-4 py-3 bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 rounded-xl text-slate-700 dark:text-slate-200 font-medium shadow-sm flex items-center justify-center cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-secondary/10 rounded-xl border border-blue-100 dark:border-secondary/20">
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed text-center font-medium">
                Proficient in utilizing modern automation frameworks and educational technologies to drive quality and efficiency.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
