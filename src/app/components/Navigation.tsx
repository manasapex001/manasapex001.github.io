import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'About',
    'Publications',
    'Projects',
    'Awards',
    'Updates',
    'Writings',
    'Miscellaneous',
    'Contact'
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center gap-12 py-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-base transition-colors duration-200 hover:text-white ${
                activeSection === item.toLowerCase()
                  ? 'text-white'
                  : 'text-gray-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </nav>
  );
}
