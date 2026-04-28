import { Link } from 'react-router';
import { ArrowRight, Award, BookOpen } from 'lucide-react';
import { certifications } from '../data/certifications';

export function CertificationsPreview() {
  // Show the 3 most recent (any category), sorted newest first.
  const featured = [...certifications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  const totalCount = certifications.length;
  const certCount = certifications.filter((c) => c.category === 'certification').length;

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center px-8 py-32"
    >
      <div className="max-w-4xl w-full">
        <div className="flex items-end justify-between gap-6 mb-3 flex-wrap">
          <h2 className="text-5xl font-bold text-white">Certifications</h2>
          <span className="text-sm text-gray-500 pb-2">
            {certCount} {certCount === 1 ? 'certification' : 'certifications'}
            {' · '}
            {totalCount - certCount} achievements
          </span>
        </div>
        <p className="text-gray-400 text-base mb-10 max-w-2xl">
          Selected highlights. The full list with credential IDs and verifiable links lives on a
          dedicated page.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {featured.map((c) => (
            <div
              key={c.id}
              className="p-5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    c.category === 'certification' ? 'bg-blue-500/15' : 'bg-yellow-500/15'
                  }`}
                >
                  {c.category === 'certification' ? (
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  ) : (
                    <Award className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
                <span className="text-xs text-gray-500 self-center">{c.year}</span>
              </div>
              <h3 className="text-base font-semibold text-white leading-snug mb-1">
                {c.title}
              </h3>
              <p className="text-xs text-gray-400">{c.provider}</p>
            </div>
          ))}
        </div>

        <Link
          to="/certifications"
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all"
        >
          View all {totalCount} certifications &amp; achievements
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
