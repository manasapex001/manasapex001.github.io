import { BookOpen, ExternalLink } from 'lucide-react';

interface Writing {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link?: string;
}

export function Writings() {
  const writings: Writing[] = [
    {
      title: "Understanding Deep Learning Optimization",
      excerpt: "An in-depth exploration of modern optimization techniques in neural networks, from SGD to adaptive methods like Adam and beyond.",
      date: "March 10, 2026",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "The Future of Natural Language Processing",
      excerpt: "Examining recent trends in NLP, including large language models, few-shot learning, and the challenges of multilingual understanding.",
      date: "February 15, 2026",
      readTime: "12 min read",
      link: "#"
    },
    {
      title: "Reinforcement Learning in Practice",
      excerpt: "Practical insights into implementing RL algorithms, common pitfalls, and strategies for debugging and improving agent performance.",
      date: "January 20, 2026",
      readTime: "10 min read",
      link: "#"
    },
    {
      title: "Research Tips for Graduate Students",
      excerpt: "Personal reflections on navigating graduate research, managing time effectively, and maintaining work-life balance.",
      date: "December 5, 2025",
      readTime: "6 min read",
      link: "#"
    }
  ];

  return (
    <section id="writings" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Writings</h2>
        <div className="space-y-6">
          {writings.map((writing, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {writing.title}
                    </h3>
                    {writing.link && (
                      <a
                        href={writing.link}
                        className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-400 mb-3">{writing.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{writing.date}</span>
                    <span>·</span>
                    <span>{writing.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
