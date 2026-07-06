import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';
import { articles } from '../../mockData';

const tagColors = {
  "LLMs": "bg-cyan-50 text-cyan-700 border-cyan-100 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800",
  "AI Trends": "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800",
  "ML Basics": "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
  "Python": "bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800",
  "Deep Learning": "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800"
};

const ArticlesSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => { itemRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); }); };
  }, []);

  return (
    <section id="articles" className="min-h-screen py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-block px-6 py-1.5 rounded-full glass border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            On Medium
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            AI/ML <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Beginner-friendly deep dives into machine learning concepts, tools, and trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group glass-panel rounded-[2rem] border border-white/20 dark:border-white/10 p-8 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2 transition-all duration-500 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Top row: tag + read time */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-sm ${tagColors[article.tag] || 'glass text-muted-foreground border-white/10'}`}>
                  {article.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-5 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 text-violet-600 dark:text-violet-400 shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {article.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-violet-400 hover:gap-3 transition-all"
              >
                Read on Medium <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://medium.com/@amshavarthana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-[1.03] transition-transform shadow-xl shadow-foreground/10"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
