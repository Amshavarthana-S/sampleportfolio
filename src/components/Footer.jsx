import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-black text-white tracking-tight italic">
              Amsha<span className="text-violet-400 not-italic">.</span>
            </span>
            <p className="text-sm text-gray-500 mt-1">ML Student & Tech Writer</p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm">
            {['home', 'about', 'projects', 'articles', 'skills', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="capitalize hover:text-violet-400 transition-colors"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, url: 'https://github.com/amshavarthana', label: 'GitHub' },
              { Icon: Linkedin, url: 'https://linkedin.com/in/amshavarthana', label: 'LinkedIn' },
              { Icon: BookOpen, url: 'https://medium.com/@amshavarthana', label: 'Medium' },
              { Icon: Mail, url: 'mailto:amshavarthana@gmail.com', label: 'Email' }
            ].map(({ Icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl bg-gray-800 hover:bg-violet-600 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
