import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

export default function Research() {
  const publications = [
    {
      title: "Empowering B.Com Graduates for the Digital Workforce: Skills, Curriculum & Industry Expectations",
      type: "Research Publication",
      date: "Recent",
      description: "An in-depth analysis of the skill gaps between academic curricula and digital industry demands, proposing strategic educational interventions."
    }
  ];

  return (
    <section id="research" className="py-24 bg-slate-50 dark:bg-primary-light transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Research & Publications
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group cursor-pointer border border-slate-200 dark:border-white/10 hover:border-secondary dark:hover:border-accent transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="p-4 bg-secondary/10 dark:bg-primary rounded-2xl text-secondary dark:text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FileText size={32} />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-snug">
                      {pub.title}
                    </h3>
                    <ExternalLink size={20} className="text-slate-400 group-hover:text-secondary shrink-0 mt-1 transition-colors" />
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {pub.type}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {pub.date}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 pt-2 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
