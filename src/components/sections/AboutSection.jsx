import React, { useEffect, useRef, useState } from 'react';
import { Download, Github, Linkedin, BookOpen } from 'lucide-react';
import { personalInfo } from '../../mockData';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const stats = [
    { value: "6+", label: "Projects" },
    { value: "5+", label: "Articles" },
    { value: "3rd", label: "Year" },
    { value: "Open", label: "to Internship" }
  ];

  const details = [
    { label: "University", value: "University of Kelaniya" },
    { label: "Degree", value: "B.Sc.(Hons) in Software Engineering" },
    { label: "Focus", value: "Data Science, ML & Software Development" },
    { label: "Email", value: personalInfo.email },
    { label: "Phone", value: personalInfo.phone },
    { label: "Availability", value: "Seeking Internship · 2026" }
  ];

  const skills = [
    "Python", "scikit-learn", "Pandas", "NumPy",
    "KNN", "Linear Regression", "Logistic Regression",
    "Decision Trees", "Random Forest", "SVM", "K-Means",
    "Streamlit", "Flask", "Power BI", "SQLite"
  ];

  const socials = [
    { Icon: Github, url: personalInfo.social.github, label: "GitHub" },
    { Icon: Linkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
    { Icon: BookOpen, url: personalInfo.social.medium, label: "Medium" }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 bg-background font-sans relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-6 py-1.5 rounded-full glass border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Data-Driven by Nature, <span className="text-gradient">Curious by Instinct</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Profile Card */}
          <div className={`lg:col-span-5 glass-panel rounded-[2rem] p-8 border border-white/20 dark:border-white/10 shadow-xl transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex flex-col items-center text-center">

              {/* Real profile photo */}
              <div className="w-48 h-48 rounded-full mb-6 ring-4 ring-violet-500/30 overflow-hidden shadow-2xl shadow-violet-500/20">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #7c3aed, #4f46e5)';
                    e.target.parentElement.style.display = 'flex';
                    e.target.parentElement.style.alignItems = 'center';
                    e.target.parentElement.style.justifyContent = 'center';
                    e.target.parentElement.innerHTML = '<span style="color:white;font-size:3rem;font-weight:900">A</span>';
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-1">{personalInfo.name}</h3>
              <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-1">
              Aspiring Data Scientist & ML Engineer | Software Developer
              </p>
              <p className="text-muted-foreground text-xs mb-8">{personalInfo.university}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl glass border border-white/10">
                    <span className="text-xl font-bold text-foreground mb-1">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="/Amshavarthana-DS-CV.pdf"
                download="Amshavarthana-DS-CV.pdf"
                className="w-4/5 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 mb-8 shadow-xl shadow-violet-500/20 text-sm ring-1 ring-white/20"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>

              {/* Socials */}
              <div className="flex items-center justify-center gap-4">
                {socials.map(({ Icon, url, label }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:scale-110 transition-all shadow-md"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bio & Details */}
          <div className={`lg:col-span-7 flex flex-col justify-center pt-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                I'm a 3rd-year Software Engineering undergraduate at the University of Kelaniya, passionate about Software Development and applying machine learning to real-world problems. My focus areas are building robust software applications, predictive modelling, AI-powered systems, and making sense of messy datasets.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                I've built an AI student companion for Sri Lankan students (EduMind AI), a voice assistant powered by Whisper, and several end-to-end ML pipelines. Alongside my Data Science and ML projects, I actively develop full-stack software applications.
              </p>
              <p className="text-muted-foreground text-sm italic font-medium border-l-2 border-violet-500 pl-4">
                "The goal is to turn data into information, and information into insight."
              </p>
            </div>

            {/* Skills grid */}
            <div className="mb-10">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-[11px] font-semibold glass text-foreground border border-violet-500/20 rounded-md shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Details grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {details.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-violet-500/50 transition-colors group"
                >
                  <p className="text-xs text-muted-foreground mb-1.5 group-hover:text-violet-400 transition-colors">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
