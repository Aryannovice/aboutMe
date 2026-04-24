import { Github, Linkedin, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';
import { profile, socials } from '../content';

const iconByLabel: Record<string, ReactNode> = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />
};

export default function Home() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">Hi, I'm Ayush.</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {profile.headline}
        </p>

        <div className="max-w-none space-y-6">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Find me online</h2>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition text-sm font-medium"
              >
                {iconByLabel[social.label] ?? <ExternalLink size={18} />}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
