import { ExternalLink, Mail } from 'lucide-react';
import { profile, socials } from '../content';

export default function Contact() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Best way to reach me is email.</p>

        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 bg-white dark:bg-gray-800 transition-colors">
          <div>
            <h2 className="font-semibold mb-2">Email</h2>
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition inline-flex items-center gap-2"
            >
              <Mail size={18} /> {profile.email}
            </a>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">Location</h2>
            <p className="text-gray-700 dark:text-gray-300">{profile.location}</p>
          </div>

          <div className="mt-8">
            <h2 className="font-semibold mb-4">Connect</h2>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition font-medium"
                >
                  {social.label} <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium mt-10"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
