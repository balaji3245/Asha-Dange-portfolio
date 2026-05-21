import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="p-1.5 sm:p-2 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
              <BookOpen size={20} className="sm:hidden" />
              <BookOpen size={24} className="hidden sm:block" />
            </div>
            <span className="font-bold text-base sm:text-xl tracking-tight text-slate-800">
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
                  className="nav-link text-sm font-medium text-slate-600 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-secondary hover:bg-blue-600 text-white text-sm font-medium transition-all shadow-lg shadow-secondary/30">
              Contact Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-secondary"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-secondary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-3 py-3 text-center rounded-lg bg-secondary text-white font-medium text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
