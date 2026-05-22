import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Contact() {
  const { phone, email, location } = portfolioData.contact;
  
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Information & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Whether you want to discuss academic collaborations, institutional development, or software quality assurance, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 dark:bg-accent/10 rounded-xl text-secondary dark:text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Call Me</h4>
                  <p className="text-lg font-medium text-slate-800 dark:text-white">{phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 dark:bg-accent/10 rounded-xl text-secondary dark:text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Email Me</h4>
                  <p className="text-lg font-medium text-slate-800 dark:text-white">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 dark:bg-accent/10 rounded-xl text-secondary dark:text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Location</h4>
                  <p className="text-lg font-medium text-slate-800 dark:text-white">{location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10">
              <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white dark:hover:bg-accent transition-all duration-300 flex items-center justify-center w-11 h-11">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>

                <a href="#" className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white dark:hover:bg-accent transition-all duration-300 flex items-center justify-center w-11 h-11">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-slate-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-slate-800 dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-slate-800 dark:text-white resize-none"
                  ></textarea>
                </div>

                {status === 'success' && <div className="text-sm font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">Message sent successfully! I'll get back to you soon.</div>}
                {status === 'error' && <div className="text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">Failed to send message. Please try again.</div>}

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-secondary hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-secondary/30"
                >
                  <Send size={18} className={status === 'sending' ? 'animate-pulse' : ''} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
