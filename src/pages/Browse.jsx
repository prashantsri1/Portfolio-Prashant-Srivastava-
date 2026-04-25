/**
 * Browse.jsx — Netflix home page with hero + content rows.
 */

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../App';
import PageWrapper from '../components/layout/PageWrapper';
import HeroBanner from '../components/browse/HeroBanner';
import ContentRow from '../components/browse/ContentRow';
import CategoryCard from '../components/browse/CategoryCard';
import { topPicksData, continueWatchingData } from '../data/portfolioData';

export default function Browse() {
  const profile = useProfile();
  const navigate = useNavigate();
  const topPicks = topPicksData[profile] || topPicksData.recruiter;

  return (
    <PageWrapper>
      {/* Hero Billboard */}
      <div className="-mt-[68px]">
        <HeroBanner />
      </div>

      {/* Top Picks Row */}
      <div className="relative z-10 -mt-8 md:-mt-16">
        <ContentRow title={`Today's Top Picks for ${profile}`}>
          {topPicks.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
              onClick={() => navigate(item.path)}
            />
          ))}
        </ContentRow>
      </div>

      {/* Continue Watching Row */}
      <ContentRow title={`Continue Watching for ${profile}`}>
        {continueWatchingData.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            image={item.image}
            onClick={() => navigate(item.path)}
          />
        ))}
      </ContentRow>
    </PageWrapper>
  );
}
