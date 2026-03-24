import { Music, Camera, Book, Dumbbell, Cpu } from 'lucide-react';

interface Hobby {
  icon: any;
  title: string;
  description: string;
}

export function Miscellaneous() {
  const hobbies: Hobby[] = [
    {
      icon: Camera,
      title: "Photography",
      description: "Passionate about capturing moments through the lens, with a keen eye for landscape and street photography.",
    },
    {
      icon: Book,
      title: "Reading",
      description: "Avid reader spanning economics, history, philosophy, and fiction — always looking for the next great book.",
    },
    {
      icon: Music,
      title: "Music",
      description: "Enjoy exploring different genres of music as a way to unwind and find inspiration.",
    },
    {
      icon: Dumbbell,
      title: "Sports & Fitness",
      description: "Stay active through regular fitness routines and enjoy a variety of sports to keep both body and mind sharp.",
    },
    {
      icon: () => (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3h16.5M3.75 3H2.25M20.25 3h1.5M9 16.5v3.75m6-3.75v3.75M6.75 21h10.5" />
        </svg>
      ),
      title: "Chess",
      description: "Enjoy the strategic depth of chess — always looking to improve and learn new openings and endgames.",
    },
    {
      icon: () => (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      title: "Swimming",
      description: "Swimming is my go-to activity for staying refreshed, building endurance, and clearing my mind.",
    },
    {
      icon: Cpu,
      title: "Electronics Tinkering",
      description: "Love experimenting with hardware, microcontrollers, and DIY electronics projects in my spare time.",
    },
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
                    <h4 className="text-lg font-semibold text-white mb-2">{hobby.title}</h4>
                    <p className="text-gray-400 text-sm">{hobby.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
