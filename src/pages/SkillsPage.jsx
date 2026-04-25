/**
 * SkillsPage.jsx — Production Skills page with real devicon logos.
 * Matches reference site layout: centered headings, grid cards, red accents.
 */

import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { skills } from '../data/portfolioData';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 25 } },
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto py-16 md:py-24">
        {skills.map((category, catIdx) => (
          <div key={category.category} className={catIdx > 0 ? 'mt-16 md:mt-20' : ''}>
            {/* Category heading */}
            <motion.div
              className="text-center mb-10 md:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nf-red section-heading-underline">
                {category.category}
              </h2>
            </motion.div>

            {/* Skills grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
            >
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={card}
                  className="skill-card bg-nf-dark border border-nf-gray/30 rounded-xl p-5 md:p-6 text-center cursor-default"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 transition-transform duration-300"
                    loading="lazy"
                  />
                  <h3 className="text-nf-red text-sm md:text-base font-bold mb-1.5 leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-nf-text-muted text-xs leading-snug">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
