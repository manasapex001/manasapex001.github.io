import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { label: 'About', section: 'about' },
  { label: 'Publications', section: 'publications' },
  { label: 'Internship', section: 'internship' },
  { label: 'Projects', section: 'projects' },
  { label: 'Certifications', section: 'certifications' },
  { label: 'Updates', section: 'updates' },
  { label: 'Writings', section: 'writings' },
  { label: 'Miscellaneous', section: 'miscellaneous' },
  { label: 'Contact', section: 'contact' },
];

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center gap-7 py-6 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.section)}
              className={`text-base transition-colors duration-200 hover:text-white ${
                activeSection === item.section ? 'text-white' : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </nav>
  );
}
