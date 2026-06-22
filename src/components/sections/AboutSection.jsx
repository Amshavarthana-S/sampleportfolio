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
    { label: "Focus", value: "ML & Data Science" },
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
      className="min-h-screen py-20 bg-[#f8faff] dark:bg-gray-900 font-sans"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-6 py-1.5 rounded-full border border-violet-200 bg-violet-50 dark:bg-violet-900/30 dark:border-violet-800 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Data-Driven by Nature, <span className="text-violet-600 dark:text-violet-400">Curious by Instinct</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Profile Card */}
          <div className={`lg:col-span-5 bg-white dark:bg-gray-800 rounded-[2rem] p-8 border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex flex-col items-center text-center">

              {/* Real profile photo */}
              <div className="w-48 h-48 rounded-full mb-6 ring-4 ring-violet-200 dark:ring-violet-700 overflow-hidden shadow-xl shadow-violet-500/10">
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

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{personalInfo.name}</h3>
              <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-1">
              Aspiring Data Scientist & ML Engineer
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mb-8">{personalInfo.university}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <span className="text-xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>

              
              <a
                href="/Amshavarthana_CV.pdf"
                download="Amshavarthana_CV.pdf"
                className="w-4/5 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition-colors mb-8 shadow-md shadow-violet-500/20 text-sm"
              >
                <Download className="w-3.5 h-3.5" /> Download CV
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
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-violet-50 hover:text-violet-600 dark:hover:bg-gray-600 transition-colors"
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
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                I'm a 3rd-year Software Engineering undergraduate at the University of Kelaniya, passionate about applying machine learning to real-world problems. My focus areas are predictive modelling, AI-powered applications, and making sense of messy datasets.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                I've built an AI student companion for Sri Lankan students (EduMind AI), a voice assistant powered by Whisper and deep learning, and several end-to-end ML pipelines. I also write beginner-friendly AI/ML articles on Medium to share what I learn.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic font-medium">
                "The goal is to turn data into information, and information into insight."
              </p>
            </div>

            {/* Skills grid */}
            <div className="mb-8">
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-semibold bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-800 rounded-lg"
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
                  className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-violet-300 dark:hover:border-violet-500 transition-colors"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">{item.label}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</p>
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
