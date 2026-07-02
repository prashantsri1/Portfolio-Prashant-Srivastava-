/**
 * HeroBanner.jsx — Full-width cinematic hero with gradient overlay.
 */

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[55vh] min-h-[400px] md:h-[75vh] md:min-h-[520px] md:max-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#16213e]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-nf-red/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[150px] pointer-events-none" />

      {/* Color accent strip */}
      <div className="absolute top-[15%] left-0 right-0 h-[2px] flex overflow-hidden opacity-40">
        <div className="flex-1 bg-red-500" /><div className="flex-1 bg-orange-400" />
        <div className="flex-1 bg-yellow-400" /><div className="flex-1 bg-green-400" />
        <div className="flex-1 bg-cyan-400" /><div className="flex-1 bg-blue-500" />
        <div className="flex-1 bg-purple-500" /><div className="flex-1 bg-pink-500" />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 hero-gradient-bottom z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center md:justify-end pt-20 md:pt-28 pb-12 md:pb-28 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mt-0 md:mt-auto w-full">
          <motion.div
            className="flex items-center gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-nf-red font-netflix text-2xl tracking-wider">P</span>
            <span className="text-nf-light-gray text-xs uppercase tracking-[4px]">PORTFOLIO</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-2.5 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-nf-light-gray max-w-xl mb-4 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md font-bold text-xs sm:text-sm md:text-base bg-white text-nf-black hover:bg-white/85 transition-colors cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 h-5 md:w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              View Projects
            </button>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md font-bold text-xs sm:text-sm md:text-base bg-nf-red text-white hover:bg-nf-red-hover transition-colors shadow-lg cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 h-4 md:w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md font-bold text-xs sm:text-sm md:text-base bg-nf-gray/80 text-white hover:bg-nf-gray transition-colors shadow-lg"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 h-4 md:w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              More Info
            </a>
          </motion.div>
        </div>
      </div>

      {/* Maturity badge */}
      <motion.div
        className="hidden sm:block absolute right-0 bottom-28 md:bottom-36 z-20"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="bg-nf-gray/60 border-l-[3px] border-white/60 px-5 py-2 text-sm text-white tracking-wider font-medium">
          A+ Developer
        </div>
      </motion.div>
    </div>
  );
}
