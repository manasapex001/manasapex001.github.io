import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

export function Hero() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:manassingh2001@gmail.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/manasapex001' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/manas-singh-a21a57189/' },
    { icon: GraduationCap, label: 'Google Scholar', href: 'https://scholar.google.com' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-5xl w-full flex items-center gap-16 flex-col md:flex-row">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 bg-gray-700 flex items-center justify-center">
            <span className="text-white text-6xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>MS</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Manas<br />Singh
          </h1>
          <p className="text-2xl text-gray-400 mb-8">Economics & Data Analyst</p>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/5 hover:border-white/40 transition-all duration-200"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
            {socialLinks.slice(3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/5 hover:border-white/40 transition-all duration-200"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
            ))}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/5 hover:border-white/40 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X</span>
            </a>
          </div>

          {/* Quote */}
          <blockquote className="text-gray-500 italic text-lg">
            "It's not who I am underneath but what I do that defines me"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
