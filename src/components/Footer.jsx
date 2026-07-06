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
    <footer className="bg-background border-t border-border/50 text-muted-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-black text-foreground tracking-tight italic">
              Amsha<span className="text-violet-500 not-italic">.</span>
            </span>
            <p className="text-sm mt-1">ML Student & Tech Writer</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            {['home', 'about', 'projects', 'articles', 'skills', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="capitalize hover:text-violet-500 transition-colors font-medium"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, url: 'https://github.com/Amshavarthana-S', label: 'GitHub' },
              { Icon: Linkedin, url: 'https://www.linkedin.com/in/amshavarthana-sreesivanathasarma/', label: 'LinkedIn' },
              { Icon: BookOpen, url: 'https://medium.com/@amsha09sarma11', label: 'Medium' },
              { Icon: Mail, url: 'mailto:amshasarma@gmail.com', label: 'Email' }
            ].map(({ Icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl glass hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 text-muted-foreground shadow-sm"
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
