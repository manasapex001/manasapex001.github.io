import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowUpRight, Download, Search } from 'lucide-react';
import {
  certifications,
  groupByYear,
  uniqueProviders,
  totalHours,
  type Certification,
} from '../data/certifications';
import { Navigation } from '../components/Navigation';

function ProviderInitial({ provider }: { provider: string }) {
  // Pick a stable color band per provider so each logo placeholder looks distinct.
  const palettes: Record<string, { bg: string; fg: string }> = {
    'DeepLearning.AI': { bg: 'rgba(13, 58, 107, 0.4)', fg: '#7ab8f5' },
    'IBM':             { bg: 'rgba(10, 58, 90, 0.5)',  fg: '#6cb4ee' },
    'Coursera':        { bg: 'rgba(0, 86, 210, 0.25)', fg: '#5fa8ff' },
    'Yale University': { bg: 'rgba(26, 58, 74, 0.5)',  fg: '#88c2dd' },
    'Finlatics':       { bg: 'rgba(58, 40, 64, 0.5)',  fg: '#d8a4e8' },
  };
  const fallback = { bg: 'rgba(255,255,255,0.06)', fg: 'rgba(255,255,255,0.7)' };
  const p = palettes[provider] ?? fallback;
  return (
    <div
      className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-sm font-medium"
      style={{ background: p.bg, color: p.fg }}
    >
      {provider.charAt(0).toUpperCase()}
    </div>
  );
}

function CertRow({ c }: { c: Certification }) {
  const hasVerify = Boolean(c.verifyUrl);
  const hasFile = Boolean(c.certificateFile);

  return (
    <div className="flex gap-3 p-3.5 bg-white/[0.03] border border-white/10 rounded-lg mb-2 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/20">
      <ProviderInitial provider={c.provider} />
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

export function Certifications() {
  const [search, setSearch] = useState('');
  const [provider, setProvider] = useState<string>('all');

  const certsOnly = useMemo(
    () => certifications.filter((c) => c.category === 'certification'),
    []
  );
  const achievementsOnly = useMemo(
    () => certifications.filter((c) => c.category === 'achievement'),
    []
  );

  const providers = useMemo(() => uniqueProviders(certsOnly), [certsOnly]);
  const totalHrs = useMemo(() => totalHours(certsOnly), [certsOnly]);
  const latestYear = useMemo(
    () => certsOnly.reduce((max, c) => (c.year > max ? c.year : max), 0),
    [certsOnly]
  );

  const filteredCerts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return certsOnly.filter((c) => {
      if (provider !== 'all' && c.provider !== provider) return false;
      if (!q) return true;
      const hay = [c.title, c.provider, c.via ?? '', ...c.skills].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [certsOnly, search, provider]);

  const grouped = useMemo(() => groupByYear(filteredCerts), [filteredCerts]);
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeSection="certifications" />

      <div className="max-w-4xl mx-auto px-8 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to home
        </Link>

        <h1
          className="text-5xl md:text-6xl font-bold text-white mb-3"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Certifications &amp; Courses
        </h1>
        <p className="text-gray-400 text-base max-w-xl mb-10 leading-relaxed">
          Continuous learning across data science, finance, and economics. Each credential
          listed below is independently verifiable.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <StatCard label="Certifications" value={String(certsOnly.length)} />
          <StatCard label="Hours of study" value={totalHrs > 0 ? `~${totalHrs}` : '—'} />
          <StatCard label="Providers" value={String(providers.length)} />
          <StatCard label="Most recent" value={latestYear ? String(latestYear) : '—'} />
        </div>

        <div className="relative mb-3">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search certifications..."
            className="w-full bg-white/[0.04] border border-white/15 rounded-md pl-9 pr-3 py-2 text-[13px] text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-8">
          <FilterChip
            label="All"
            active={provider === 'all'}
            onClick={() => setProvider('all')}
          />
          {providers.map((p) => (
            <FilterChip
              key={p}
              label={p}
              active={provider === p}
              onClick={() => setProvider(p)}
            />
          ))}
        </div>

        {filteredCerts.length === 0 ? (
          <div className="text-center py-16 text-sm text-gray-500">
            No certifications match those filters.
          </div>
        ) : (
          years.map((y) => (
            <div key={y}>
              <div className="text-[11px] text-gray-500 tracking-[1.5px] uppercase mt-6 mb-2.5 pb-1.5 border-b border-white/[0.06]">
                {y}
              </div>
              {grouped[y].map((c) => (
                <CertRow key={c.id} c={c} />
              ))}
            </div>
          ))
        )}

        {achievementsOnly.length > 0 && (
          <div className="mt-16">
            <div className="text-[11px] text-gray-500 tracking-[1.5px] uppercase mb-2.5 pb-1.5 border-b border-white/[0.06]">
              Achievements
            </div>
            {achievementsOnly
              .sort((a, b) => b.year - a.year)
              .map((c) => (
                <CertRow key={c.id} c={c} />
              ))}
          </div>
        )}
      </div>
    </div>
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

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
        active
          ? 'bg-white text-black border-white/40'
          : 'bg-transparent text-gray-200 border-white/20 hover:bg-white/[0.08]'
      }`}
    >
      {label}
    </button>
  );
}
