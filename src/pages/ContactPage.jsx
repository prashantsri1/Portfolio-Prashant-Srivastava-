/**
 * ContactPage.jsx — Premium contact page with large cards and CTA.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { personalInfo } from '../data/portfolioData';

const methods = [
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: '📧', color: 'from-blue-500/20 to-blue-600/10' },
  { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: '📱', color: 'from-green-500/20 to-green-600/10' },
  { label: 'LinkedIn', value: 'Prashant Srivastava', href: personalInfo.linkedin, icon: '💼', color: 'from-sky-500/20 to-sky-600/10', external: true },
  { label: 'GitHub', value: 'prashantsri1', href: personalInfo.github, icon: '🐙', color: 'from-purple-500/20 to-purple-600/10', external: true },
  { label: 'Resume', value: 'View Resume', href: personalInfo.resume, icon: '📄', color: 'from-red-500/20 to-red-600/10', external: true }
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1100px] mx-auto py-16 md:py-24">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            📬 Get in Touch
          </h1>
          <p className="text-nf-text-muted text-base max-w-lg mx-auto">
            I'm always open to discussing new opportunities, projects, and collaborations
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-12">
          {methods.map((m, i) => (
            <motion.a
              key={m.label}
              href={m.href}
              target={m.external ? '_blank' : undefined}
              rel={m.external ? 'noopener noreferrer' : undefined}
              className={`flex flex-col items-center gap-4 bg-gradient-to-b ${m.color} bg-nf-dark rounded-2xl p-8 border border-nf-gray/20 hover:border-nf-red/40 transition-all duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {m.icon}
              </span>
              <span className="text-nf-text-muted text-xs uppercase tracking-[2px] font-semibold">
                {m.label}
              </span>
              <span className="text-white text-sm font-medium text-center break-all leading-tight">
                {m.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Availability badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-4 bg-nf-dark rounded-2xl px-8 py-5 border border-nf-gray/20 shadow-lg">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500" />
            </span>
            <p className="text-nf-light-gray text-sm sm:text-base">
              Currently open to <span className="text-nf-red font-bold">Frontend Developer</span> and{' '}
              <span className="text-nf-red font-bold">Product Manager</span> roles
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
