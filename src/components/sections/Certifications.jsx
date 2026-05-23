import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Certifications() {
  const certifications = portfolioData.certifications || [];
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

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
              <div 
                onClick={() => setSelectedCert(cert.link)}
                className="glass-card p-6 border border-slate-100 dark:border-white/5 flex flex-col items-center text-center gap-4 h-full transition-all hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/30 cursor-pointer"
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
              </div>
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

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" 
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col" 
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-primary">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <Award size={20} className="text-secondary" /> Certificate Preview
                </h3>
                <button 
                  onClick={() => setSelectedCert(null)} 
                  className="p-2 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 relative">
                <object data={`${selectedCert}#view=Fit`} type="application/pdf" className="w-full h-full">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Your browser does not support inline PDF viewing.</p>
                    <a href={selectedCert} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-secondary hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                      Open Certificate
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
