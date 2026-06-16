import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Database, Code2 } from 'lucide-react';
import { skills } from '../../mockData';

const categoryIcons = {
  "Machine Learning": Cpu,
  "Data Science": Database,
  "Algorithms": Code2
};

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => [...new Set([...prev, entry.target.dataset.category])]);
          }
        });
      },
      { threshold: 0.2 }
    );
    const categories = document.querySelectorAll('.skill-category-card');
    categories.forEach((cat) => observer.observe(cat));
    return () => categories.forEach((cat) => observer.unobserve(cat));
  }, []);

  return (
    <section id="skills" className="min-h-screen py-24 bg-[#f8faff] dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <div className="inline-block px-6 py-1.5 rounded-full border border-violet-200 bg-violet-50 dark:bg-violet-900/30 dark:border-violet-800 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            My Toolbox
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Technical <span className="text-violet-600 dark:text-violet-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            The ML and data science stack I use to build intelligent solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => {
            const Icon = categoryIcons[category.category] || Code2;
            const isVisible = visibleSkills.includes(category.category);

            return (
              <div
                key={idx}
                data-category={category.category}
                className="skill-category-card group bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-700 hover:shadow-lg hover:shadow-violet-100 dark:hover:shadow-violet-900/20"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest mt-1">
                      {category.items.length} Skills
                    </p>
                  </div>
                </div>

                <div className="space-y-7">
                  {category.items.map((skill, sIdx) => (
                    <div key={sIdx} className="group/item">
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover/item:text-violet-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-[2000ms] ease-out shadow-[0_0_8px_rgba(124,58,237,0.2)]"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${sIdx * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
