import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Hero() {
  const { name, roles, tagline } = portfolioData.hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white dark:from-primary-light dark:to-primary" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/20 dark:bg-secondary/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 dark:bg-accent/10 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-secondary dark:text-accent font-semibold tracking-wide uppercase text-sm mb-3">
                Academic Professional
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                {name}
              </h1>
              
              {/* Roles */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {roles.map((role, idx) => (
                  <span key={idx} className="px-4 py-1.5 rounded-full bg-white dark:bg-primary-light border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-sm">
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-secondary hover:bg-blue-600 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-secondary/30">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="/resume.pdf" target="_blank" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-primary-light border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium flex items-center justify-center gap-2 transition-all shadow-sm">
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-secondary to-accent">
              <div className="w-full h-full rounded-full bg-white dark:bg-primary flex items-center justify-center overflow-hidden border-4 border-white dark:border-primary">
                <img 
                  src="/avatar.png" 
                  alt={name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
