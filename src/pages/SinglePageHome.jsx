import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ArticlesSection from '../components/sections/ArticlesSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

const SinglePageHome = () => {
  return (
    <div className="single-page-portfolio">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ArticlesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SinglePageHome;
