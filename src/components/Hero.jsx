import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../mockData';


import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiSpringboot
} from "react-icons/si";

const floatingSkills = [
  { Icon: SiReact, top: "20%", left: "10%", delay: "0s" },
  { Icon: SiJavascript, top: "30%", right: "15%", delay: "1s" },
  { Icon: SiTailwindcss, bottom: "35%", left: "12%", delay: "2s" },
  { Icon: SiPhp, bottom: "25%", right: "18%", delay: "3s" },
  { Icon: SiMysql, top: "55%", left: "45%", delay: "4s" },
  { Icon: SiSpringboot, top: "15%", right: "40%", delay: "5s" }
];


const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  // Word-by-word reveal for title
  useEffect(() => {
    const words = personalInfo.title.split(' ');
    if (titleIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(prev => prev + (prev ? ' ' : '') + words[titleIndex]);
        setTitleIndex(titleIndex + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowTagline(true), 300);
    }
  }, [titleIndex]);

  // Character-by-character reveal for tagline
  useEffect(() => {
    if (showTagline && taglineIndex < personalInfo.tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayedTagline(prev => prev + personalInfo.tagline[taglineIndex]);
        setTaglineIndex(taglineIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [showTagline, taglineIndex]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 overflow-hidden">

      {/* Background Ripple */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 dark:bg-cyan-400/5 animate-ripple" />
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 dark:bg-cyan-400/5 animate-ripple animation-delay-2000" />
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 dark:bg-cyan-400/5 animate-ripple animation-delay-4000" />
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl animate-float animation-delay-3000" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 sm:px-8 lg:px-12 text-left flex flex-col justify-center h-screen">
        {/* Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 min-h-12">
          {displayedTitle}
          {titleIndex < personalInfo.title.split(' ').length && (
            <span className="inline-block w-1 h-8 bg-cyan-600 dark:bg-cyan-400 ml-1 animate-blink" />
          )}
        </h2>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl min-h-12">
          {displayedTagline}
          {showTagline && taglineIndex < personalInfo.tagline.length && (
            <span className="inline-block w-0.5 h-6 bg-gray-600 dark:bg-gray-400 ml-1 animate-blink" />
          )}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Link
            to="/projects"
            className="group px-8 py-4 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:scale-110 transition-all"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400" />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:scale-110 transition-all"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400" />
          </a>
          <a
            href={personalInfo.social.email}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:scale-110 transition-all"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400" />
          </a>
        </div>

        

        

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
