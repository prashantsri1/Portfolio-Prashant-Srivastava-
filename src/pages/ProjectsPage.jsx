/**
 * ProjectsPage.jsx — Production Projects page with screenshots and feature badges.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto py-16 md:py-24">
        {/* Page heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            🎬 My Projects
          </h1>
          <p className="text-nf-text-muted text-base max-w-lg mx-auto">
            Production-grade applications built with modern technologies
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="project-card bg-nf-dark rounded-2xl overflow-hidden border border-nf-gray/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              {/* Red accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-nf-red via-red-600 to-nf-red" />

              <div className="flex flex-col lg:flex-row">
                {/* Screenshot */}
                <div className="lg:w-[45%] relative overflow-hidden bg-nf-darker">
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-nf-red text-white rounded-sm shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-nf-red mb-1">
                    {project.title}
                  </h2>
                  <p className="text-nf-light-gray text-sm mb-4">{project.subtitle}</p>
                  <p className="text-nf-light-gray text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Feature tags */}
                  {project.features && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((f) => (
                        <span key={f} className="px-3 py-1 text-[11px] font-medium rounded-full bg-nf-red/10 text-nf-red border border-nf-red/20">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 text-xs font-semibold rounded bg-nf-gray/50 text-nf-light-gray border border-nf-gray/40">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-2.5 rounded-md font-bold text-sm bg-white text-nf-black hover:bg-white/85 transition-colors shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-2.5 rounded-md font-bold text-sm bg-nf-gray/70 text-white hover:bg-nf-gray transition-colors shadow-lg">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
