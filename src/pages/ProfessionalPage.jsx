/**
 * ProfessionalPage.jsx — Timeline matching reference site exactly.
 * Big centered heading, vertical center line, alternating cards with arrows.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { experience } from '../data/portfolioData';

export default function ProfessionalPage() {
  return (
    <PageWrapper>
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1100px] mx-auto py-16 md:py-24">
        {/* Page heading */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center justify-center gap-3">
            <span className="text-4xl">💼</span>
            Work Experience & Education Timeline
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-[3px] bg-gradient-to-b from-nf-gray via-nf-gray to-transparent" />

          {experience.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                className="relative mb-16 md:mb-24"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Desktop layout */}
                <div className={`hidden md:flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Card */}
                  <div className="w-[44%]">
                    <div className={`timeline-card rounded-2xl p-7 lg:p-8 shadow-xl ${
                      isLeft
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                        : 'bg-gradient-to-br from-gray-100 to-white text-nf-black'
                    }`}>
                      <h3 className="text-xl lg:text-2xl font-bold mb-1.5">
                        {item.role} <span className="text-lg">🧑‍💻</span>
                      </h3>
                      <p className="text-sm opacity-80 mb-3 font-medium">{item.company}</p>
                      <p className="text-xs opacity-60 mb-4 font-mono">🔧 {item.tech}</p>
                      <div className="space-y-2.5">
                        {item.highlights.map((h, i) => (
                          <p key={i} className="text-sm leading-relaxed flex gap-2">
                            <span className="shrink-0">🚀</span>
                            <span>{h}</span>
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className={`absolute top-8 w-5 h-5 rotate-45 ${
                      isLeft
                        ? 'right-[calc(50%-10px)] bg-blue-500'
                        : 'left-[calc(50%-10px)] bg-gray-100'
                    }`} />
                  </div>

                  {/* Center spacer with dot */}
                  <div className="w-[12%] flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 mt-6">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Date */}
                  <div className={`w-[44%] flex items-start pt-8 ${isLeft ? 'justify-start pl-4' : 'justify-end pr-4'}`}>
                    <span className="text-nf-light-gray text-sm font-mono bg-nf-dark px-4 py-2 rounded-lg border border-nf-gray/30">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden">
                  <div className="text-center mb-3">
                    <span className="text-nf-light-gray text-xs font-mono bg-nf-dark px-3 py-1.5 rounded-lg border border-nf-gray/30">
                      {item.period}
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-lg font-bold mb-1">{item.role} 🧑‍💻</h3>
                    <p className="text-sm opacity-80 mb-2">{item.company}</p>
                    <p className="text-xs opacity-60 mb-3 font-mono">🔧 {item.tech}</p>
                    <div className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <p key={i} className="text-sm leading-relaxed">🚀 {h}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
