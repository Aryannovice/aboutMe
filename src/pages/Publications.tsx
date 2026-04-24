import { ExternalLink } from 'lucide-react';
import { publications } from '../content';

export default function Publications() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Publications</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Papers, workshop writing, and research artifacts.</p>

        <div className="space-y-6">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 bg-white dark:bg-gray-800 transition-colors"
            >
              <header className="mb-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h2 className="text-xl font-bold">{pub.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {[pub.venue, pub.year].filter(Boolean).join(' · ')}
                  </p>
                </div>
                {pub.status ? <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{pub.status}</p> : null}
              </header>

              {pub.description ? <p className="text-gray-700 dark:text-gray-300">{pub.description}</p> : null}

              <div className="flex flex-wrap gap-3 mt-5">
                {pub.links.map((link) => (
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
