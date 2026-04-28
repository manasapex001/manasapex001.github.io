import { ExternalLink, FileText, Github } from 'lucide-react';
import { publications } from '../data/publications';

export function Publications() {
  return (
    <section
      id="publications"
      className="min-h-screen flex items-center justify-center px-8 py-32"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Publications</h2>
        <div className="space-y-6">
          {publications.map((p) => (
            <article
              key={p.id}
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <span className="flex-shrink-0 text-sm text-gray-500">{p.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                <span className="text-white font-medium">{p.authors}</span>
                {p.venue && <span> · {p.venue}</span>}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.abstract}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <LinkRow
                paper={p.paperUrl}
                code={p.codeUrl}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkRow({
  paper,
  code,
  demo,
}: {
  paper?: string;
  code?: string;
  demo?: string;
}) {
  const items = [
    paper && { href: paper, icon: FileText, label: 'Read paper' },
    code && { href: code, icon: Github, label: 'View code' },
    demo && { href: demo, icon: ExternalLink, label: 'Live demo' },
  ].filter(Boolean) as Array<{ href: string; icon: typeof FileText; label: string }>;

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
