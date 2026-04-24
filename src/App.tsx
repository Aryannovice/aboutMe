import { Menu, X, Github, Linkedin, ExternalLink, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { blogs, profile, projects, publications, socials } from './content';

type Modal = 'projects' | 'blogs' | 'publications' | 'contact' | null;

function App() {
  const [activeModal, setActiveModal] = useState<Modal>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const closeModal = () => setActiveModal(null);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40 transition-colors">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-2xl font-bold">About Me</a>

              {/* Desktop Menu */}
              <div className="hidden sm:flex items-center gap-8">
                <button
                  onClick={() => setActiveModal('blogs')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Blogs
                </button>
                <button
                  onClick={() => setActiveModal('projects')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveModal('publications')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Publications
                </button>
                <button
                  onClick={() => setActiveModal('contact')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Contact
                </button>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                  title="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="sm:hidden">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="sm:hidden pb-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    setActiveModal('blogs');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-0 py-3 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Blogs
                </button>
                <button
                  onClick={() => {
                    setActiveModal('projects');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-0 py-3 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    setActiveModal('publications');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-0 py-3 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Publications
                </button>
                <button
                  onClick={() => {
                    setActiveModal('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-0 py-3 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                >
                  Contact
                </button>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="block w-full text-left px-0 py-3 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium mt-2"
                >
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Hey, I am Ayush.</h1>

            <div className="max-w-none">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-12">
              <a
                href={socials.find((s) => s.label === 'GitHub')?.href ?? 'https://github.com/Aryannovice'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={socials.find((s) => s.label === 'LinkedIn')?.href ?? 'https://www.linkedin.com/in/ayush-pandey07/'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Modal Backdrop */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/30 z-50 transition-opacity" onClick={closeModal} />
        )}

        {/* Projects Modal */}
        {activeModal === 'projects' && (
          <div className="fixed inset-x-0 bottom-0 z-50 max-h-96 sm:max-h-[70vh] bg-white dark:bg-gray-800 rounded-t-2xl sm:rounded-2xl overflow-y-auto animate-in slide-in-from-bottom-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[90%] sm:max-w-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projects</h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      {project.timeframe ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">{project.timeframe}</p>
                      ) : null}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 mb-3">{project.subtitle}</p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center gap-2 transition"
                        >
                          {link.label} <ExternalLink size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Blogs Modal */}
        {activeModal === 'blogs' && (
          <div className="fixed inset-x-0 bottom-0 z-50 max-h-96 sm:max-h-[70vh] bg-white dark:bg-gray-800 rounded-t-2xl sm:rounded-2xl overflow-y-auto animate-in slide-in-from-bottom-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[90%] sm:max-w-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Blogs</h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {blogs.map((blog) => (
                  <div
                    key={blog.href}
                    className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {blog.date ? blog.date : ''}{blog.source ? (blog.date ? ` · ${blog.source}` : blog.source) : ''}
                    </p>
                    <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{blog.excerpt}</p>
                    <a
                      href={blog.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center gap-2 transition"
                    >
                      Read <ExternalLink size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Publications Modal */}
        {activeModal === 'publications' && (
          <div className="fixed inset-x-0 bottom-0 z-50 max-h-96 sm:max-h-[70vh] bg-white dark:bg-gray-800 rounded-t-2xl sm:rounded-2xl overflow-y-auto animate-in slide-in-from-bottom-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[90%] sm:max-w-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Publications</h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {publications.map((pub) => (
                  <div
                    key={pub.title}
                    className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold">{pub.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {[pub.venue, pub.year].filter(Boolean).join(' · ')}
                      </p>
                    </div>
                    {pub.status ? (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{pub.status}</p>
                    ) : null}
                    {pub.description ? (
                      <p className="text-gray-600 dark:text-gray-400 mt-3 mb-4">{pub.description}</p>
                    ) : (
                      <div className="mb-4" />
                    )}

                    <div className="flex flex-wrap gap-3">
                      {pub.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center gap-2 transition"
                        >
                          {link.label} <ExternalLink size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        {activeModal === 'contact' && (
          <div className="fixed inset-x-0 bottom-0 z-50 max-h-96 sm:max-h-[70vh] bg-white dark:bg-gray-800 rounded-t-2xl sm:rounded-2xl overflow-y-auto animate-in slide-in-from-bottom-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[90%] sm:max-w-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                  >
                    {profile.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">{profile.location}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <div className="flex gap-4 flex-wrap">
                    {socials.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition font-medium inline-flex items-center gap-2"
                      >
                        {s.label} <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium mt-4"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
