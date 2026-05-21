import React, { useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import { Moon, Sun, Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass-card rounded-none border-t-0 border-x-0 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-primary-light/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="p-2 bg-secondary/10 dark:bg-accent/10 rounded-lg text-secondary dark:text-accent flex-shrink-0">
              <BookOpen size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
              Asha Dange
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-secondary dark:text-slate-300 dark:hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(colorTheme)}
              className="p-2 rounded-full bg-slate-100 dark:bg-primary text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {colorTheme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-secondary hover:bg-blue-600 text-white text-sm font-medium transition-all shadow-lg shadow-secondary/30">
              Contact Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={() => setTheme(colorTheme)}
              className="p-2 rounded-full bg-slate-100 dark:bg-primary text-slate-600 dark:text-slate-300"
            >
              {colorTheme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-accent"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-card absolute w-full border-t border-slate-200 dark:border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-primary"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-3 py-3 text-center rounded-lg bg-secondary text-white font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
