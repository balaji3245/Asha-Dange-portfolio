import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, tagline } = portfolioData.hero;
  const { email, location, phone } = portfolioData.contact;

  return (
    <footer className="bg-slate-50 dark:bg-primary-light border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              {name}
            </h3>
            <p className="text-xs md:text-base text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              {tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${email}`} className="text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-accent transition-colors flex items-center gap-3">
                  <Mail size={16} />
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone}`} className="text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-accent transition-colors flex items-center gap-3">
                  <Phone size={16} />
                  {phone}
                </a>
              </li>
              <li className="text-slate-500 dark:text-slate-400 flex items-center gap-3">
                <MapPin size={16} />
                {location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {currentYear} {name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-slate-200 dark:bg-primary text-slate-600 dark:text-slate-300 hover:text-secondary hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center w-9 h-9">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-200 dark:bg-primary text-slate-600 dark:text-slate-300 hover:text-secondary hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center w-9 h-9">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
