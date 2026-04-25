/**
 * MusicPage.jsx — Hindi classic songs with real YouTube thumbnails.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { musicData } from '../data/portfolioData';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MusicPage() {
  return (
    <PageWrapper>
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto py-16 md:py-24">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            🎵 Timeless Hindi Classics
          </h1>
          <p className="text-nf-text-muted text-base max-w-md mx-auto">
            Songs that inspire my work and life — click to listen on YouTube
          </p>
        </motion.div>

        {/* Songs grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {musicData.songs.map((song, i) => (
            <motion.a
              key={i}
              href={song.ytUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={card}
              className="music-card bg-nf-dark rounded-xl overflow-hidden border border-nf-gray/20 group"
            >
              {/* Album art / YouTube thumbnail */}
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="music-play-icon w-14 h-14 rounded-full bg-nf-red flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5">
                <h3 className="text-white font-bold text-sm sm:text-base mb-1 group-hover:text-nf-red transition-colors leading-tight truncate">
                  {song.title}
                </h3>
                <p className="text-nf-text-muted text-xs mb-2 truncate">{song.artist}</p>
                <span className="text-nf-text-muted text-[11px] font-mono">{song.year}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
