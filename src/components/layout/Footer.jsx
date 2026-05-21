import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-primary-light border-t border-slate-200 dark:border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">Asha Dange</h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-xs">
              Dedicated academic leader passionate about technology education, institutional quality enhancement, and student development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Research', 'Certifications'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin size={18} className="text-secondary" />
                <span>Latur, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+910000000000" className="hover:text-secondary transition-colors">+91 (Phone placeholder)</a>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:contact@placeholder.com" className="hover:text-secondary transition-colors">contact@placeholder.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {currentYear} Asha Dange. All rights reserved.
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
