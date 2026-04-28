import { Circle, FileText, Github } from 'lucide-react';
import { updates } from '../data/updates';

export function Updates() {
  return (
    <section id="updates" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-3">Updates</h2>
        <p className="text-gray-400 text-base mb-12 max-w-2xl">
          Currently active research and recent work.
        </p>

        {updates.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-white/10 rounded-lg bg-white/5">
            <h3 className="text-2xl font-semibold text-white mb-3">No updates yet</h3>
            <p className="text-gray-400 max-w-md">
              New projects, research milestones, internships, and achievements will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {updates.map((u) => (
              <article
                key={u.id}
                className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                    <Circle className="w-2 h-2 fill-current" />
                    {u.status}
                  </span>
                  {u.period && (
                    <span className="text-xs text-gray-500">{u.period}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                  {u.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{u.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {u.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <LinkRow paper={u.paperUrl} code={u.codeUrl} />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function LinkRow({ paper, code }: { paper?: string; code?: string }) {
  const items = [
    paper && { href: paper, icon: FileText, label: 'Read draft' },
    code && { href: code, icon: Github, label: 'View code' },
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
