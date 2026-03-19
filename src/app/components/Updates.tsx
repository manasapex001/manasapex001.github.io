import { Calendar } from 'lucide-react';

interface Update {
  date: string;
  title: string;
  description: string;
  type: 'research' | 'talk' | 'publication' | 'misc';
}

export function Updates() {
  const updates: Update[] = [
    {
      date: "March 2026",
      title: "Paper accepted at ICML 2026",
      description: "Our work on efficient optimization methods has been accepted for publication",
      type: "publication"
    },
    {
      date: "February 2026",
      title: "Invited Talk at ML Conference",
      description: "Presented research on robust NLP methods to industry practitioners",
      type: "talk"
    },
    {
      date: "January 2026",
      title: "Started Research Collaboration",
      description: "Beginning new project on multi-agent reinforcement learning",
      type: "research"
    },
    {
      date: "December 2025",
      title: "Paper accepted at NAACL 2025",
      description: "Work on limited supervision NLP accepted for publication",
      type: "publication"
    },
    {
      date: "November 2025",
      title: "Conference Presentation",
      description: "Presented at NeurIPS on distributed optimization systems",
      type: "talk"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'research': return 'bg-blue-500/20 text-blue-300';
      case 'talk': return 'bg-purple-500/20 text-purple-300';
      case 'publication': return 'bg-green-500/20 text-green-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <section id="updates" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Updates</h2>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {update.title}
                  </h3>
                  <span className={`flex-shrink-0 px-3 py-1 text-xs rounded-full ${getTypeColor(update.type)}`}>
                    {update.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-2">{update.description}</p>
                <p className="text-gray-500 text-sm">{update.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
