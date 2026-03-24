export function About() {
  const skills = [
    'Python', 'R', 'STATA', 'SPSS', 'SQL',
    'Machine Learning', 'Web Scraping', 'Data Analysis',
    'Power BI', 'Microsoft Excel', 'Econometrics', 'Financial Forecasting',
    'Canva', 'Microsoft PowerPoint',
  ];

  const education = [
    {
      year: '2024 – 2026',
      degree: 'M.A. Economics (Trade & Finance)',
      institution: 'Indian Institute of Foreign Trade, Delhi',
    },
    {
      year: '2020 – 2023',
      degree: 'B.Sc. Economics',
      institution: 'Gokhale Institute of Politics and Economics, Pune',
      score: '8.15/10',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">About Me</h2>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-16">
          <p>
            I am a Master's student in Economics (Trade & Finance) at the{' '}
            <span className="text-white font-medium">Indian Institute of Foreign Trade, Delhi</span>,
            with a keen interest in the ways data, markets, and world trade policies intersect
            to inform business and policy decisions.
          </p>
          <p>
            My experience spans quantitative research, financial forecasting, and data analysis.
            I have worked on projects ranging from time-series forecasting of natural gas prices
            using ARIMA, SARIMA, LSTM, and VAR models, to analyzing inequality patterns in India
            using NSSO data, to studying trade liberalization and growth convergence in BRICS economies.
          </p>
          <p>
            I am passionate about applying econometrics and machine learning to real-world problems
            and am actively seeking roles in financial analysis, consulting, or business strategy
            where I can learn, add value, and make meaningful impact.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 border border-white/10 rounded-lg px-6 py-4 bg-white/5"
              >
                <span className="text-gray-400 text-sm md:w-28 flex-shrink-0">{edu.year}</span>
                <div className="flex-1">
                  <p className="text-white font-medium">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </div>
                {edu.score && (
                  <span className="text-gray-400 text-sm flex-shrink-0">{edu.score}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-white/20 rounded-md text-gray-300 text-sm hover:border-white/40 hover:text-white transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
