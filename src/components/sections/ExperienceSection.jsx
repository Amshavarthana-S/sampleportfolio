import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../../mockData';

const ExperienceSection = () => {
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

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen py-20  bg-gradient-to-br from-gray-50 via-white to-cyan-50
            dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
            animate-bgGradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - centered on desktop, left-aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative transition-all duration-700 ${visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                  }`}
              >
                {/* Timeline Dot - adjusted for both mobile and desktop */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-gray-950 z-10" />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                >
                  <div className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-800">
                    {/* Company Logo */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
