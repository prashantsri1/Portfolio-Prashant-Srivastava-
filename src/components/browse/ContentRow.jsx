/**
 * ContentRow.jsx — Netflix horizontal scrolling row with title.
 */

import { motion } from 'framer-motion';

export default function ContentRow({ title, children }) {
  return (
    <motion.div
      className="mb-10 md:mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white px-6 sm:px-8 md:px-12 lg:px-16 mb-4 md:mb-6">
        {title}
      </h2>

      <div className="content-row-scroll flex gap-2 sm:gap-3 overflow-x-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-4">
        {children}
      </div>
    </motion.div>
  );
}
