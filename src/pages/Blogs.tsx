import { ExternalLink } from 'lucide-react';
import { blogs } from '../content';

export default function Blogs() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Writing about systems, inference, and what I learn while building.</p>

        <div className="space-y-6">
          {blogs.map((post) => (
            <article
              key={post.href}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 bg-white dark:bg-gray-800 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date ? post.date : null}
                  {post.source ? (post.date ? ` · ${post.source}` : post.source) : null}
                </p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center gap-2 transition"
                >
                  Read <ExternalLink size={16} />
                </a>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
