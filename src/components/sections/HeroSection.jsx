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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 px-6 text-center pt-16 sm:pt-20">
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)]" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center">
        
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold mt-8 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          Available for Internship · 2026
        </div>

       

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
          <span className="block text-slate-900 dark:text-white leading-none">Hi, I'm</span>
          <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent italic">
            {personalInfo.name}
          </span>
        </h1>

        {/* Typewriter title */}
        <div className="min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-700 dark:text-slate-300 text-center">
            {displayedTitle}
            <span className="inline-block w-[3px] h-8 sm:h-10 bg-violet-600 dark:bg-violet-400 ml-2 animate-pulse rounded-full" />
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 min-h-[3rem]">
          {displayedTagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row sm:flex-wrap sm:gap-5">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-violet-500/20"
          >
            View My Projects
          </button>

          <div className="flex items-center justify-center gap-3">
            {[
              { icon: <Github size={22} />, link: personalInfo.social.github, label: 'GitHub' },
              { icon: <Linkedin size={22} />, link: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: <BookOpen size={22} />, link: personalInfo.social.medium, label: 'Medium' },
              { icon: <Mail size={22} />, link: personalInfo.social.email, label: 'Email' }
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/50 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Tech stack row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 py-6 px-10 rounded-3xl bg-slate-200/30 dark:bg-slate-800/20 backdrop-blur-sm">
          {[
            { Icon: SiPython, color: "hover:text-[#3776AB]", label: "Python" },
            { Icon: SiPandas, color: "hover:text-[#7B2FBE]", label: "Pandas" },
            { Icon: SiNumpy, color: "hover:text-[#4DABCF]", label: "NumPy" },
            { Icon: SiScikitlearn, color: "hover:text-[#F7931E]", label: "scikit-learn" },
            { Icon: SiJupyter, color: "hover:text-[#F37626]", label: "Jupyter" }
          ].map((item, i) => (
            <item.Icon
              key={i}
              size={30}
              className={`text-slate-400 transition-all duration-500 hover:scale-125 opacity-50 hover:opacity-100 ${item.color}`}
              title={item.label}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <ArrowDown size={18} className="text-violet-500 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
