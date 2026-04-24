import { ExternalLink } from 'lucide-react';
import { projects } from '../content';

export default function Projects() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          A few systems I’ve built recently — focused on retrieval, routing, reliability, and tooling.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 bg-white dark:bg-gray-800 transition-colors"
            >
              <header className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
                  {project.timeframe ? (
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.timeframe}</span>
                  ) : null}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3">{project.subtitle}</p>
              </header>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition font-medium"
                  >
                    {link.label} <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
