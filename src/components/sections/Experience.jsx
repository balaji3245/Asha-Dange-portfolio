import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id || index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-primary border-4 border-secondary dark:border-accent transform -translate-x-1/2 flex items-center justify-center shadow-lg z-10 mt-6 md:mt-0">
                    <Briefcase size={16} className="text-secondary dark:text-accent" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} w-full`}>
                    <div className="glass-card p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent rounded-full text-sm font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h4 className="text-md font-medium text-slate-600 dark:text-slate-400 mb-4">
                        {exp.company}
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Responsibilities:</p>
                          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {exp.achievements && (
                          <div>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Key Achievement:</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                              {exp.achievements}
                            </p>
                          </div>
                        )}

                        <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
                          {exp.tools.map((tool, i) => (
                            <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-primary text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-white/5">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
