import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Updates } from './components/Updates';
import { Writings } from './components/Writings';
import { Miscellaneous } from './components/Miscellaneous';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'publications',
        'projects',
        'awards',
        'updates',
        'writings',
        'miscellaneous',
        'contact'
      ];

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Publications />
      <Projects />
      <Awards />
      <Updates />
      <Writings />
      <Miscellaneous />
      <Contact />
    </div>
  );
}
