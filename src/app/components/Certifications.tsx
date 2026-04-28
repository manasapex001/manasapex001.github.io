import { useMemo } from 'react';
import { ArrowUpRight, Award, BookOpen, Download } from 'lucide-react';
import {
  certifications,
  groupByYear,
  totalHours,
  uniqueProviders,
  type Certification,
} from '../data/certifications';

export function Certifications() {
  const certs = useMemo(
    () => certifications.filter((c) => c.category === 'certification'),
    []
  );
  const achievements = useMemo(
    () => certifications.filter((c) => c.category === 'achievement'),
    []
  );

  const grouped = useMemo(() => groupByYear(certs), [certs]);
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  const stats = {
    count: certs.length,
    hours: totalHours(certs),
    providers: uniqueProviders(certs).length,
    latest: certs.reduce((max, c) => (c.year > max ? c.year : max), 0),
  };

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center px-8 py-32"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-3">Certifications</h2>
        <p className="text-gray-400 text-base mb-10 max-w-2xl">
          Continuous learning across data science, finance, and economics. Each credential
          listed below is independently verifiable.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <StatCard label="Certifications" value={String(stats.count)} />
          <StatCard label="Hours of study" value={stats.hours > 0 ? `~${stats.hours}` : '—'} />
          <StatCard label="Providers" value={String(stats.providers)} />
          <StatCard label="Most recent" value={stats.latest ? String(stats.latest) : '—'} />
        </div>

        {years.map((y) => (
          <div key={y}>
            <div className="text-[11px] text-gray-500 tracking-[1.5px] uppercase mt-6 mb-3 pb-1.5 border-b border-white/[0.06]">
              {y}
            </div>
            {grouped[y].map((c) => (
              <CertRow key={c.id} c={c} />
            ))}
          </div>
        ))}

        {achievements.length > 0 && (
          <div className="mt-14">
            <div className="text-[11px] text-gray-500 tracking-[1.5px] uppercase mb-3 pb-1.5 border-b border-white/[0.06]">
              Achievements
            </div>
            {achievements
              .sort((a, b) => b.year - a.year)
              .map((c) => (
                <CertRow key={c.id} c={c} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3.5">
      <div className="text-2xl text-white leading-none" style={{ fontFamily: 'Georgia, serif' }}>
        {value}
      </div>
      <div className="text-[11px] text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function ProviderInitial({
  provider,
  category,
}: {
  provider: string;
  category: 'certification' | 'achievement';
}) {
  if (category === 'achievement') {
    return (
      <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center bg-yellow-500/15">
        <Award className="w-5 h-5 text-yellow-400" />
      </div>
    );
  }
  const palettes: Record<string, { bg: string; fg: string }> = {
    'DeepLearning.AI': { bg: 'rgba(13, 58, 107, 0.4)', fg: '#7ab8f5' },
    'IBM':             { bg: 'rgba(10, 58, 90, 0.5)',  fg: '#6cb4ee' },
    'Coursera':        { bg: 'rgba(0, 86, 210, 0.25)', fg: '#5fa8ff' },
    'Yale University': { bg: 'rgba(26, 58, 74, 0.5)',  fg: '#88c2dd' },
  };
  const fallback = { bg: 'rgba(59, 130, 246, 0.15)', fg: '#60a5fa' };
  const p = palettes[provider] ?? fallback;
  return (
    <div
      className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
      style={{ background: p.bg, color: p.fg }}
    >
      <BookOpen className="w-5 h-5" />
    </div>
  );
}

function CertRow({ c }: { c: Certification }) {
  const hasVerify = Boolean(c.verifyUrl);
  const hasFile = Boolean(c.certificateFile);

  return (
    <div className="flex gap-3 p-3.5 bg-white/[0.03] border border-white/10 rounded-lg mb-2 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/20">
      <ProviderInitial provider={c.provider} category={c.category} />
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-medium text-white mb-1">{c.title}</div>
        <div className="text-[11px] text-gray-400 mb-2">
          {c.provider}
          {c.via && ` · ${c.via}`}
          {` · ${c.date}`}
          {c.hours && ` · ${c.hours}`}
        </div>
        {c.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-1.5">
            {c.skills.map((s) => (
              <span
                key={s}
                className="text-[9.5px] px-1.5 py-0.5 bg-white/[0.06] rounded text-gray-300"
              >
                {s}
              </span>
            ))}
          </div>
        )}
        {c.credentialId && (
          <span className="font-mono text-[9.5px] text-gray-500">{c.credentialId}</span>
        )}
      </div>
      {(hasVerify || hasFile) && (
        <div className="flex gap-1.5 self-center flex-shrink-0">
          {hasVerify && (
            <a
              href={c.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10.5px] px-2.5 py-1.5 rounded border border-white/20 text-gray-200 hover:bg-white hover:text-black hover:border-white inline-flex items-center gap-1 transition-all"
            >
              Verify
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          )}
          {hasFile && (
            <a
              href={c.certificateFile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-1.5 rounded border border-white/20 text-gray-200 hover:bg-white hover:text-black hover:border-white inline-flex items-center transition-all"
              title="Download certificate PDF"
            >
              <Download className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
