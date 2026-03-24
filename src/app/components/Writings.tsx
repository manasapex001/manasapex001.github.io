import { BookOpen } from 'lucide-react';

export function Writings() {
  return (
    <section id="writings" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Writings</h2>
        <div className="flex flex-col items-center justify-center py-24 text-center border border-white/10 rounded-lg bg-white/5">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Coming Soon</h3>
          <p className="text-gray-400 max-w-md">
            Articles and blog posts on economics, data analysis, trade policy, and financial markets are on the way. Check back soon!
          </p>
        </div>
      </div>
    </section>
  );
}
