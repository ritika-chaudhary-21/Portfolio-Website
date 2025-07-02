
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToNext = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'contact'];
    const currentIndex = sections.indexOf(activeSection);
    const nextSection = sections[currentIndex + 1] || sections[0];
    scrollToSection(nextSection);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero onScrollToNext={scrollToNext} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-serif mb-2">Ritika Chaudhary</h3>
            <p className="text-slate-300">Aspiring Data Analyst & AIML Engineering Student</p>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400">
              © 2025 Ritika Chaudhary. Designed with passion for data and meaningful experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
