import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Linkedin, PlayCircle, Award } from 'lucide-react';
import { certifications } from '../../mockData';

const getIssuerStyles = (issuer) => {
  if (issuer.includes('LinkedIn')) {
    return {
      color: 'text-[#0A66C2] dark:text-[#70B5F9]',
      bg: 'bg-[#0A66C2]/10 dark:bg-[#70B5F9]/10',
      borderHover: 'hover:border-[#0A66C2]/50 dark:hover:border-[#70B5F9]/50',
      shadowHover: 'hover:shadow-[#0A66C2]/20 dark:hover:shadow-[#70B5F9]/20',
      icon: <Linkedin className="w-8 h-8" />
    };
  } else if (issuer.includes('Udemy')) {
    return {
      color: 'text-[#A435F0] dark:text-[#C585F7]',
      bg: 'bg-[#A435F0]/10 dark:bg-[#C585F7]/10',
      borderHover: 'hover:border-[#A435F0]/50 dark:hover:border-[#C585F7]/50',
      shadowHover: 'hover:shadow-[#A435F0]/20 dark:hover:shadow-[#C585F7]/20',
      icon: <PlayCircle className="w-8 h-8" />
    };
  }
  return {
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10 dark:bg-violet-400/10',
    borderHover: 'hover:border-violet-500/50 dark:hover:border-violet-400/50',
    shadowHover: 'hover:shadow-violet-500/20 dark:hover:shadow-violet-400/20',
    icon: <Award className="w-8 h-8" />
  };
};

const CertificationsSection = () => {
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

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="min-h-screen py-20 bg-background font-sans relative overflow-hidden flex items-center"
    >
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-6 py-1.5 rounded-full glass border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            Continuous Learning
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            A showcase of my professional development and the skills I've acquired through various courses and learning paths.
          </p>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {certifications.map((cert, index) => {
            const styles = getIssuerStyles(cert.issuer);
            return (
              <div
                key={cert.id}
                className={`group relative glass-panel rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-white/20 dark:border-white/10 shadow-xl transition-all duration-500 delay-${(index % 4 + 1) * 100} ${styles.borderHover} ${styles.shadowHover} hover:-translate-y-2 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                {cert.link !== "#" && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-400 hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                <div className={`w-16 h-16 rounded-2xl ${styles.bg} ${styles.color} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}>
                  {styles.icon}
                </div>
                
                <h3 className="text-sm md:text-base font-bold text-foreground mb-3 group-hover:text-foreground transition-colors line-clamp-3 leading-snug">
                  {cert.title}
                </h3>
                <p className={`text-xs font-bold ${styles.color} mt-auto uppercase tracking-wider`}>
                  {cert.issuer}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
