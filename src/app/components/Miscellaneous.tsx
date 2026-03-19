import { Music, Camera, Book, Coffee } from 'lucide-react';

interface Hobby {
  icon: any;
  title: string;
  description: string;
}

export function Miscellaneous() {
  const hobbies: Hobby[] = [
    {
      icon: Music,
      title: "Music",
      description: "Enjoy playing guitar and exploring different genres of music in my free time"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Amateur photographer with interest in landscape and street photography"
    },
    {
      icon: Book,
      title: "Reading",
      description: "Avid reader of science fiction, philosophy, and technical literature"
    },
    {
      icon: Coffee,
      title: "Coffee Brewing",
      description: "Enthusiast of specialty coffee and experimenting with different brewing methods"
    }
  ];

  return (
    <section id="miscellaneous" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Miscellaneous</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Interests & Hobbies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => (
              <div 
                key={index} 
                className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <hobby.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {hobby.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Fun Facts</h3>
          <div className="space-y-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-300">
                🎓 I've mentored over 20 undergraduate students in their research projects
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-300">
                🌍 Attended conferences in 5 different countries, expanding both my research network and cultural experiences
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-300">
                💻 Contributed to several open-source projects with over 1000+ stars on GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
