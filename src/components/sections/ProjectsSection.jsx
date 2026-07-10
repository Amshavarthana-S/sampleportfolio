import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../mockData';

const badgeColors = {
  "AI + Web App":            "text-violet-600 bg-violet-50 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800",
  "Voice AI + Deep Learning": "text-cyan-600 bg-cyan-50 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800",
  "ML + Web App":            "text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800",
  "ML + Power BI":           "text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800",
  "Data Analysis":           "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    setVisibleProjects([]);
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              setVisibleProjects((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.1 }
      );
      projectRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
      return () => { projectRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); }); };
    }, 100);
    return () => clearTimeout(timeout);
  }, [filter]);

  const filters = [
    { id: 'all',  label: 'All Projects' },
    { id: 'ml',   label: 'ML / AI' },
    { id: 'data', label: 'Data Analysis' },
  ];

  const filtered = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="min-h-screen py-24 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-block px-6 py-1.5 rounded-full glass border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A collection of Software Development, ML, AI, and Data Science projects built on real-world datasets.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === f.id
                  ? 'bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-500/25'
                  : 'glass text-muted-foreground hover:text-foreground hover:border-violet-500/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index}
              className={`group glass-panel rounded-[2rem] overflow-hidden flex flex-col transition-all duration-700 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2 border border-white/20 dark:border-white/10 ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-muted relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge overlay */}
                <div className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-full border shadow-sm backdrop-blur-md ${badgeColors[project.badge] || 'text-violet-600 bg-violet-50/90 border-violet-200'}`}>
                  {project.badge}
                </div>
                {/* GitHub hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-black/80 backdrop-blur-md text-foreground rounded-full text-xs font-bold hover:scale-105 transition-transform shadow-xl border border-white/20"
                    onClick={e => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" /> View on GitHub
                  </a>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow bg-white/5 dark:bg-black/5">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-[11px] font-semibold glass text-foreground rounded-md shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo button only (if available) */}
                {project.demo !== '#' && (
                  <div className="pt-6 border-t border-border/50">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600/10 hover:bg-violet-600 text-violet-700 dark:text-violet-300 hover:text-white text-xs font-bold transition-all duration-300 border border-violet-500/20 hover:border-transparent shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/Amshavarthana-S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-[1.03] transition-transform shadow-xl shadow-foreground/10"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;