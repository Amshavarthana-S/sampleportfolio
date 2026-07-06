import React from 'react';
import { skills } from '../../mockData';

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-24 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-block px-6 py-1.5 rounded-full glass border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            My Toolbox
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            The ML, Data Science, and Software Engineering stack I use to build intelligent solutions.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-[#0d1117] border border-white/10 font-mono text-sm sm:text-base transition-transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] duration-500">
          {/* Header */}
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto text-[#8b949e] text-xs font-semibold opacity-80">
              amshavarthana@portfolio: ~/skills
            </div>
            <div className="w-10" /> {/* Spacer to balance header */}
          </div>
          
          {/* Body */}
          <div className="p-6 sm:p-8 text-[#c9d1d9] space-y-6 bg-black/40 backdrop-blur-sm">
            {skills.map((category) => {
              const fileName = category.category.toLowerCase().replace(/ /g, '_').replace(/&/g, 'and') + '.json';
              return (
                <div key={category.category} className="group cursor-default">
                  <div className="flex items-center gap-2 mb-3 text-[#79c0ff]">
                    <span className="text-[#3fb950] font-bold">➜</span>
                    <span className="text-[#a5d6ff]">~</span>
                    <span className="text-[#c9d1d9]">cat</span>
                    <span className="text-[#79c0ff] group-hover:text-violet-400 transition-colors">{fileName}</span>
                  </div>
                  <div className="pl-4 sm:pl-6 border-l-2 border-[#30363d] space-y-1">
                    <span className="text-[#8b949e]">[</span>
                    {category.items.map((skill, idx) => (
                      <div key={idx} className="pl-6 sm:pl-8 group/item hover:bg-white/5 rounded py-0.5 transition-colors">
                        <span className="text-[#a5d6ff]">"</span>
                        <span className="text-[#d2a8ff] group-hover/item:text-white transition-colors">{skill.name}</span>
                        <span className="text-[#a5d6ff]">"</span>
                        {idx < category.items.length - 1 && <span className="text-[#8b949e]">,</span>}
                        {/* Optional subtle percentage */}
                        <span className="text-[#8b949e] text-xs ml-4 opacity-0 group-hover/item:opacity-50 transition-opacity">
                          // {skill.level}% proficiency
                        </span>
                      </div>
                    ))}
                    <span className="text-[#8b949e]">]</span>
                  </div>
                </div>
              );
            })}
            
            <div className="flex items-center gap-2 mt-8 pt-4">
              <span className="text-[#3fb950] font-bold">➜</span>
              <span className="text-[#a5d6ff]">~</span>
              <span className="w-2.5 h-5 bg-[#c9d1d9] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
