import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Certifications() {
  const certifications = portfolioData.certifications || [];
  const [showAll, setShowAll] = useState(false);

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 4);

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCertifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-6 border border-slate-100 dark:border-white/5 flex flex-col items-center text-center gap-4 h-full transition-all hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/30"
              >
                <div className="p-4 bg-secondary/10 dark:bg-primary rounded-full text-secondary dark:text-accent shrink-0">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-md font-bold text-slate-800 dark:text-white leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                    {cert.issuer}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {certifications.length > 4 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold hover:bg-secondary hover:text-white dark:hover:bg-accent transition-colors duration-300"
            >
              {showAll ? 'View Less' : `View All ${certifications.length} Certificates`}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
