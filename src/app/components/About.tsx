export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">About Me</h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I am an undergraduate student at IIT Bombay, interested in Machine Learning, 
            Natural Language Processing, Reinforcement Learning, and Optimization. I am 
            advised by Prof. Mayank Baranwal and Prof. Debasish Chatterjee.
          </p>
          <p>
            I enjoy solving hard problems and exploring the intersection of theory and 
            practice in artificial intelligence. My research focuses on developing robust 
            and efficient algorithms that can scale to real-world applications.
          </p>
          <p>
            Beyond academics, I'm passionate about open-source contributions and building 
            tools that make machine learning more accessible to researchers and practitioners.
          </p>
        </div>
      </div>
    </section>
  );
}
