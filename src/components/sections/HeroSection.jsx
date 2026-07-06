import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, BookOpen, ArrowDown } from 'lucide-react';
import { personalInfo } from '../../mockData';
import { SiPython, SiScikitlearn, SiPandas, SiNumpy, SiJupyter } from "react-icons/si";

const HeroSection = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  const TITLES = personalInfo.title;

  useEffect(() => {
    let charIndex = 0;
    const currentTitle = TITLES[titleIndex];
    setDisplayedTagline('');
    setShowTagline(false);

    const typingInterval = setInterval(() => {
      setDisplayedTitle(currentTitle.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentTitle.length) {
        clearInterval(typingInterval);
        setTimeout(() => setShowTagline(true), 500);
        const waitTime = (personalInfo.tagline.length * 35) + 3000;
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }, waitTime);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [titleIndex]);

  useEffect(() => {
    if (showTagline) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedTagline(personalInfo.tagline.substring(0, i + 1));
        i++;
        if (i === personalInfo.tagline.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    }
  }, [showTagline]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 text-center pt-16 sm:pt-20">
      
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 dark:from-violet-900/20 dark:via-background dark:to-cyan-900/20 animate-pulse duration-[10000ms]" />
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center">
        
        {/* Status badge - Glassmorphic */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold mt-8 mb-10 shadow-lg shadow-violet-500/10 backdrop-blur-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
          </span>
          Available for Internship · 2026
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
          <span className="block text-foreground leading-none mb-2">Hi, I'm</span>
          <span className="text-gradient italic drop-shadow-xl">
            {personalInfo.name}
          </span>
        </h1>

        {/* Typewriter title */}
        <div className="min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground text-center tracking-tight">
            {displayedTitle}
            <span className="inline-block w-[3px] h-6 sm:h-8 lg:h-10 bg-violet-500 ml-2 animate-pulse rounded-full align-middle" />
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 min-h-[3rem] font-medium">
          {displayedTagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-6 mb-20 sm:flex-row sm:flex-wrap sm:gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl shadow-violet-500/25 ring-1 ring-white/20"
          >
            View My Projects
          </button>

          <div className="flex items-center justify-center gap-4">
            {[
              { icon: <Github size={20} />, link: personalInfo.social.github, label: 'GitHub' },
              { icon: <Linkedin size={20} />, link: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: <BookOpen size={20} />, link: personalInfo.social.medium, label: 'Medium' },
              { icon: <Mail size={20} />, link: personalInfo.social.email, label: 'Email' }
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full glass hover:bg-white/20 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground border-white/20 hover:border-violet-500/50 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Tech stack row - Glassmorphic */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 py-6 px-10 rounded-[2rem] glass-panel border-white/10">
          {[
            { Icon: SiPython, color: "hover:text-[#3776AB]", label: "Python" },
            { Icon: SiPandas, color: "hover:text-[#7B2FBE]", label: "Pandas" },
            { Icon: SiNumpy, color: "hover:text-[#4DABCF]", label: "NumPy" },
            { Icon: SiScikitlearn, color: "hover:text-[#F7931E]", label: "scikit-learn" },
            { Icon: SiJupyter, color: "hover:text-[#F37626]", label: "Jupyter" }
          ].map((item, i) => (
            <div key={i} className="group relative">
              <item.Icon
                size={32}
                className={`text-muted-foreground/60 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${item.color}`}
              />
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded font-medium whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollToSection('about')}>
        <ArrowDown size={24} className="text-violet-500 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
