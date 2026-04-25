/**
 * ProfilePicker.jsx — "Who's Watching?" with staggered animations.
 */

import { motion } from 'framer-motion';
import { profiles } from '../data/portfolioData';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.6, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function ProfilePicker({ onSelect }) {
  return (
    <div className="fixed inset-0 z-[90] bg-nf-darker flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 md:mb-16 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Who's Watching?
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {profiles.map((p) => (
          <motion.button
            key={p.id}
            variants={item}
            onClick={() => onSelect(p.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-2 border-transparent group-hover:border-white transition-colors duration-300">
              <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" loading="eager" />
            </div>
            <span className="text-sm sm:text-base md:text-lg text-nf-light-gray group-hover:text-white transition-colors">
              {p.name}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
