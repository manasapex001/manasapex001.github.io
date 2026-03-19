import { Award } from 'lucide-react';

interface AwardItem {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export function Awards() {
  const awards: AwardItem[] = [
    {
      title: "Excellence in Research Award",
      organization: "IIT Bombay",
      year: "2026",
      description: "Awarded for outstanding contributions to machine learning research"
    },
    {
      title: "Best Paper Award",
      organization: "International Conference on AI",
      year: "2025",
      description: "Recognized for innovative work in reinforcement learning"
    },
    {
      title: "Merit Scholarship",
      organization: "IIT Bombay",
      year: "2024",
      description: "Top 5% academic performance"
    },
    {
      title: "Hackathon Winner",
      organization: "TechFest 2024",
      year: "2024",
      description: "First place in AI/ML category"
    }
  ];

  return (
    <section id="awards" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Awards & Honors</h2>
        <div className="space-y-6">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {award.title}
                </h3>
                <p className="text-gray-400 mb-2">
                  {award.organization} · {award.year}
                </p>
                {award.description && (
                  <p className="text-gray-500 text-sm">
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
