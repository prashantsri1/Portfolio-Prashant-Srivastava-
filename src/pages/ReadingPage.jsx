/**
 * ReadingPage.jsx — Book recommendations with real Amazon cover images.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { readingData } from '../data/portfolioData';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function ReadingPage() {
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
            📚 My Bookshelf
          </h1>
          <p className="text-nf-text-muted text-base max-w-md mx-auto">
            Books that shaped my thinking and professional growth
          </p>
        </motion.div>

        {/* Books grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {readingData.books.map((book, i) => (
            <motion.div
              key={i}
              variants={card}
              className="book-card bg-nf-dark rounded-xl overflow-hidden border border-nf-gray/20 group"
            >
              {/* Book cover */}
              <div className="h-64 sm:h-72 overflow-hidden bg-nf-darker flex items-center justify-center">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="book-cover h-full w-auto max-w-[70%] object-contain transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6">
                <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 group-hover:text-nf-red transition-colors leading-tight">
                  {book.title}
                </h3>
                <p className="text-nf-red text-xs font-semibold mb-3 uppercase tracking-wide">{book.author}</p>
                <p className="text-nf-text-muted text-sm leading-relaxed">
                  {book.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
