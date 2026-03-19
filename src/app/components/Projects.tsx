import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Neural Network Optimizer Toolkit",
      description: "A comprehensive toolkit for experimenting with various optimization algorithms in deep learning. Includes implementations of Adam, AdaGrad, RMSprop with custom extensions.",
      technologies: ["Python", "PyTorch", "NumPy"],
      github: "https://github.com/abhinavr11",
      demo: "https://demo.com"
    },
    {
      title: "NLP Sentiment Analysis Framework",
      description: "End-to-end framework for sentiment analysis on social media data. Supports multiple languages and includes pre-trained models for quick deployment.",
      technologies: ["Python", "Transformers", "FastAPI", "Docker"],
      github: "https://github.com/abhinavr11"
    },
    {
      title: "Reinforcement Learning Environment Suite",
      description: "Collection of custom RL environments for testing novel algorithms. Built on OpenAI Gym interface with additional visualization tools.",
      technologies: ["Python", "OpenAI Gym", "Matplotlib"],
      github: "https://github.com/abhinavr11"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
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
