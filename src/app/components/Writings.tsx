import { ExternalLink, Github } from 'lucide-react';
import { writings } from '../data/writings';

export function Writings() {
  return (
    <section id="writings" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-3">Writings</h2>
        <p className="text-gray-400 text-base mb-12 max-w-2xl">
          Articles and technical writeups on economics, data analysis, and time-series methods.
        </p>

        <div className="space-y-6">
          {writings.map((w) => (
            <article
              key={w.id}
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-white">{w.title}</h3>
                <span className="flex-shrink-0 text-sm text-gray-500">{w.date}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{w.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <LinkRow read={w.readUrl} code={w.codeUrl} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkRow({ read, code }: { read?: string; code?: string }) {
  const items = [
    read && { href: read, icon: ExternalLink, label: 'Read article' },
    code && { href: code, icon: Github, label: 'View code' },
  ].filter(Boolean) as Array<{ href: string; icon: typeof ExternalLink; label: string }>;

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border border-white/20 text-gray-200 hover:bg-white hover:text-black hover:border-white transition-all"
          >
            <Icon className="w-3 h-3" />
            {it.label}
          </a>
        );
      })}
    </div>
  );
}
