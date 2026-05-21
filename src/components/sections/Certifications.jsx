import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { title: "Software Testing Certification", issuer: "Industry Standard", icon: <CheckCircle /> },
    { title: "NAAC/IQAC Workshops", issuer: "Academic Quality", icon: <Award /> },
    { title: "FDP Certifications", issuer: "Faculty Development", icon: <Award /> },
    { title: "NPTEL Certifications", issuer: "Govt. of India", icon: <Award /> },
    { title: "Coursera Certifications", issuer: "Coursera", icon: <CheckCircle /> },
    { title: "Udemy Certifications", issuer: "Udemy", icon: <CheckCircle /> }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-primary transition-colors duration-300">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 border border-slate-100 dark:border-white/5 flex items-start gap-4"
            >
              <div className="p-3 bg-secondary/10 dark:bg-primary rounded-xl text-secondary dark:text-accent shrink-0">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight mb-1">
                  {cert.title}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
