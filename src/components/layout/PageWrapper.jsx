/**
 * PageWrapper.jsx — Layout wrapper with Navbar + Footer + scroll-to-top.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import NetflixNavbar from './NetflixNavbar';
import Footer from './Footer';

export default function PageWrapper({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-nf-black flex flex-col">
      <NetflixNavbar />
      <motion.main
        className="flex-1 pt-[68px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        key={pathname}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
