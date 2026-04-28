import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Publications } from '../components/Publications';
import { Internship } from '../components/Internship';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Updates } from '../components/Updates';
import { Writings } from '../components/Writings';
import { Miscellaneous } from '../components/Miscellaneous';
import { Contact } from '../components/Contact';

export function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'publications',
        'internship',
        'projects',
        'certifications',
        'updates',
        'writings',
        'miscellaneous',
        'contact',
      ];
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Publications />
      <Internship />
      <Projects />
      <Certifications />
      <Updates />
      <Writings />
      <Miscellaneous />
      <Contact />
    </div>
  );
}
