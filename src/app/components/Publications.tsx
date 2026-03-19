import { ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  status?: string;
}

export function Publications() {
  const publications: Publication[] = [
    {
      title: "Efficient Optimization Methods for Deep Reinforcement Learning",
      authors: "Abhinav Raghuvanshi, Mayank Baranwal, Debasish Chatterjee",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2026",
      status: "Under Review"
    },
    {
      title: "Robust Natural Language Processing with Limited Supervision",
      authors: "Abhinav Raghuvanshi, John Doe, Jane Smith",
      venue: "Annual Conference of the North American Chapter of the Association for Computational Linguistics (NAACL)",
      year: "2025",
      link: "https://arxiv.org"
    },
    {
      title: "Scalable Multi-Agent Systems for Distributed Optimization",
      authors: "Abhinav Raghuvanshi, Collaborators",
      venue: "Neural Information Processing Systems (NeurIPS)",
      year: "2025",
      link: "https://arxiv.org"
    }
  ];

  return (
    <section id="publications" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{pub.authors}</p>
                  <p className="text-gray-500 text-sm mb-2">
                    {pub.venue}, {pub.year}
                  </p>
                  {pub.status && (
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                      {pub.status}
                    </span>
                  )}
                </div>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
