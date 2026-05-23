import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Contact() {
  const { phone, email, location } = portfolioData.contact;

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you want to discuss academic collaborations, institutional development, or software quality assurance, I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-secondary/10 dark:bg-accent/10 rounded-full text-secondary dark:text-accent">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Call Me</h4>
                  <p className="text-lg font-medium text-slate-800 dark:text-white mt-1">{phone}</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-secondary/10 dark:bg-accent/10 rounded-full text-secondary dark:text-accent">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Email Me</h4>
                  <p className="text-lg font-medium text-slate-800 dark:text-white mt-1">{email}</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-secondary/10 dark:bg-accent/10 rounded-full text-secondary dark:text-accent">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Location</h4>
                  <p className="text-lg font-medium text-slate-800 dark:text-white mt-1">{location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10 mt-8 border-t border-slate-200 dark:border-white/10 flex flex-col items-center">
              <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-6">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white dark:hover:bg-accent transition-all duration-300 flex items-center justify-center w-12 h-12">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>

                <a href="#" className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white dark:hover:bg-accent transition-all duration-300 flex items-center justify-center w-12 h-12">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
