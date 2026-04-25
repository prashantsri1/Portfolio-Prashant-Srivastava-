/**
 * EducationPage.jsx — Education & Certifications with proper spacing.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { education } from '../data/portfolioData';

export default function EducationPage() {
  return (
    <PageWrapper>
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-[900px] mx-auto py-16 md:py-24">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            🎓 Education & Certifications
          </h1>
          <p className="text-nf-text-muted text-base">Academic background and professional credentials</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-nf-dark rounded-2xl p-7 sm:p-9 border border-nf-gray/20 hover:border-nf-red/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
            >
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="text-4xl sm:text-5xl shrink-0">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{item.degree}</h2>
                    <span className="text-nf-red text-xs sm:text-sm font-mono whitespace-nowrap bg-nf-red/10 px-3 py-1 rounded-md border border-nf-red/20">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-nf-light-gray text-sm font-semibold mb-2">{item.institution}</p>
                  <p className="text-nf-text-muted text-sm leading-relaxed">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
