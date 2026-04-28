import { Briefcase, ExternalLink, FileText, Github } from 'lucide-react';
import { projects, type Project } from '../data/projects';

export function Internship() {
  const internships = projects.filter((p) => p.kind === 'internship');

  if (internships.length === 0) return null;

  return (
    <section id="internship" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-3">Internship</h2>
        <p className="text-gray-400 text-base mb-12 max-w-2xl">
          Applied data and market research experience.
        </p>

        <div className="space-y-6">
          {internships.map((p) => (
            <InternshipCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipCard({ project: p }: { project: Project }) {
  return (
    <article className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-purple-500/15">
          <Briefcase className="w-6 h-6 text-purple-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              {p.organization && (
                <p className="text-sm text-gray-300 mt-0.5">{p.organization}</p>
              )}
            </div>
            <span className="flex-shrink-0 text-sm text-gray-500">{p.period}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.tags.map((t) => (
          <span key={t} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
            {t}
          </span>
        ))}
      </div>
      <LinkRow github={p.githubUrl} demo={p.demoUrl} paper={p.paperUrl} />
    </article>
  );
}

function LinkRow({
  github,
  demo,
  paper,
}: {
  github?: string;
  demo?: string;
  paper?: string;
}) {
  const items = [
    github && { href: github, icon: Github, label: 'View code' },
    demo && { href: demo, icon: ExternalLink, label: 'Live demo' },
    paper && { href: paper, icon: FileText, label: 'Read writeup' },
  ].filter(Boolean) as Array<{ href: string; icon: typeof Github; label: string }>;

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
