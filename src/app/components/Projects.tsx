import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  github?: string;
  demo?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Trade Liberalization and Its Impact in Vietnam",
      description: "In-depth analysis of Vietnam's post-1986 Doi Moi economic reforms using investment data, labor productivity metrics, and sectoral trends. Identified key growth drivers such as private investment, service sector efficiency, and trade liberalization policies.",
      technologies: ["Econometrics", "STATA", "Trade Policy", "Panel Data"],
      period: "Mar 2022 – Jun 2023",
    },
    {
      title: "Forecasting the Price of Natural Gas",
      description: "Time-series forecasting research on natural gas prices (1990–2023) using ARIMA, SARIMA, LSTM, RNN, and VAR models. Analyzed correlations with crude oil and gasoline prices to improve predictive accuracy.",
      technologies: ["Python", "ARIMA", "LSTM", "RNN", "VAR", "Time Series"],
      period: "2023",
    },
    {
      title: "Changing Consumer Preferences and Inequality in India",
      description: "Analyzed NSSO data to compare consumption, affordability, and inequality across rural-urban sectors and income groups. Generated insights to inform targeted policy design and behavioral interventions.",
      technologies: ["R", "NSSO Data", "Statistical Analysis", "Policy Research"],
      period: "2023",
    },
    {
      title: "Growth Drivers and Catch-up Effects in India",
      description: "Panel data analysis using Penn Data (1950–2019) to estimate Barro-type conditional convergence models for BRICS. Identified convergence trends and key growth drivers like investment and trade openness for India.",
      technologies: ["STATA", "Panel Data", "Barro Regression", "BRICS Analysis"],
      period: "2023",
    },
    {
      title: "Market Research & Data Analysis at Aga Analytics",
      description: "Developed custom Python web scraping scripts that cut data collection time by 30%. Analyzed over 5,000 data points to identify key market trends and created Power BI dashboards for interactive visualization.",
      technologies: ["Python", "Web Scraping", "Power BI", "Data Analysis"],
      period: "Jun – Aug 2022",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="flex-shrink-0 text-sm text-gray-500">{project.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
