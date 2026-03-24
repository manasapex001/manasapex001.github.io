import { Calendar } from 'lucide-react';

export function Updates() {
  return (
    <section id="updates" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Updates</h2>
        <div className="flex flex-col items-center justify-center py-24 text-center border border-white/10 rounded-lg bg-white/5">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">No Updates Yet</h3>
          <p className="text-gray-400 max-w-md">
            Stay tuned! Updates on new projects, research, internships, and achievements will be posted here.
          </p>
        </div>
      </div>
    </section>
  );
}
