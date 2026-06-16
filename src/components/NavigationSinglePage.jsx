import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const NavigationSinglePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);

      const sections = ['home', 'about', 'projects', 'articles', 'skills', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Articles', id: 'articles' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        {/* Reading progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 group outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-violet-500/20">
                A
              </div>
              <span className="hidden sm:block font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase italic">
                Amsha<span className="text-violet-500 not-italic">.</span>
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-white dark:bg-gray-700 text-violet-600 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-gray-200'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors border border-transparent hover:border-violet-500/30"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col justify-center px-8 space-y-8">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center justify-between group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className={`text-4xl font-bold ${
                activeSection === link.id ? 'text-violet-500' : 'text-slate-800 dark:text-slate-200'
              }`}>
                {link.name}
              </span>
              <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-violet-500" size={32} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavigationSinglePage;
