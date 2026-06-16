import React, { useEffect, useRef, useState } from 'react';
import { Code, Zap, Heart } from 'lucide-react';
import { personalInfo } from '../mockData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications that deliver speed"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Focused on exceptional user experiences"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-teal-500 rounded-2xl blur-2xl opacity-20" />
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I thrive on solving complex problems and turning ideas into reality. Whether it's 
              building responsive web interfaces, designing robust backend systems, or training 
              machine learning models, I bring dedication and creativity to every project.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <Icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-3" />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
