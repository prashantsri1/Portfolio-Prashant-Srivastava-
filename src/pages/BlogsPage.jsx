/**
 * BlogsPage.jsx — AI & Tech blog articles with colored tags and read time.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { blogsData } from '../data/portfolioData';

const tagStyles = {
  AI: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  React: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  CSS: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Web: 'bg-green-500/15 text-green-400 border-green-500/30',
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const card = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogsPage() {
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
            📝 AI & Tech Insights
          </h1>
          <p className="text-nf-text-muted text-base max-w-md mx-auto">
            Thoughts on artificial intelligence, modern web development, and the future of tech
          </p>
        </motion.div>

        {/* Blog grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogsData.posts.map((post, i) => (
            <motion.article
              key={i}
              variants={card}
              className="blog-card bg-nf-dark rounded-xl p-6 sm:p-8 border border-nf-gray/20 cursor-default group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-white font-bold text-lg sm:text-xl leading-snug group-hover:text-nf-red transition-colors flex-1">
                  {post.title}
                </h3>
                <span className={`shrink-0 px-3 py-1 text-[11px] font-bold rounded-full border ${
                  tagStyles[post.tag] || 'bg-nf-gray/20 text-nf-light-gray border-nf-gray/30'
                }`}>
                  {post.tag}
                </span>
              </div>

              <p className="text-nf-text-muted text-sm leading-relaxed mb-5">
                {post.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-nf-text-muted text-xs">📖 {post.readTime} read</span>
                <span className="text-nf-red text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read More →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
