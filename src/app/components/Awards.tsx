import { Award, BookOpen } from 'lucide-react';

interface AwardItem {
  title: string;
  organization: string;
  year: string;
  description?: string;
  type: 'certification' | 'achievement';
}

export function Awards() {
  const awards: AwardItem[] = [
    {
      title: "Neural Networks and Deep Learning",
      organization: "Coursera / DeepLearning.AI",
      year: "2024",
      description: "Completed certification covering fundamentals of neural networks, deep learning, and practical ML techniques.",
      type: "certification"
    },
    {
      title: "IBM Data Analyst Specialization",
      organization: "IBM / Coursera",
      year: "2024",
      description: "Professional certification covering data analysis, Python, SQL, Power BI, and data visualization.",
      type: "certification"
    },
    {
      title: "Market Research Experience Program",
      organization: "Finlatics",
      year: "2025",
      description: "Selected for a competitive market research program focused on financial markets and business strategy.",
      type: "achievement"
    },
    {
      title: "B.Sc. Economics with Distinction",
      organization: "Gokhale Institute of Politics and Economics, Pune",
      year: "2023",
      description: "Graduated with a strong academic record of 8.15/10, ranking among top performers in the program.",
      type: "achievement"
    },
  ];

  return (
    <section id="awards" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Certifications & Achievements</h2>
        <div className="space-y-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  award.type === 'certification' ? 'bg-blue-500/20' : 'bg-yellow-500/20'
                }`}>
                  {award.type === 'certification'
                    ? <BookOpen className="w-6 h-6 text-blue-400" />
                    : <Award className="w-6 h-6 text-yellow-400" />
                  }
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">{award.title}</h3>
                <p className="text-gray-400 mb-2">{award.organization} · {award.year}</p>
                {award.description && (
                  <p className="text-gray-500 text-sm">{award.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
