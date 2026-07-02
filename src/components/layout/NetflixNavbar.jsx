/**
 * NetflixNavbar.jsx — Premium sticky navbar.
 * PS avatar opens profile switcher. No search/bell icons.
 */

import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/portfolioData';
import { useProfile, useSetStage } from '../../App';

export default function NetflixNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const profile = useProfile();
  const setStage = useSetStage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSwitchProfile = () => {
    setProfileMenuOpen(false);
    setStage('profiles');
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-nf-black/95 backdrop-blur-md shadow-xl' : 'bg-gradient-to-b from-black/90 to-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-14 h-[68px]">
          {/* Logo */}
          <button onClick={() => navigate('/browse')} className="flex items-center gap-1 cursor-pointer shrink-0">
            <span className="netflix-logo text-xl sm:text-2xl font-bold">PRASHANT SRIVASTAVA</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-[13px] font-medium rounded text-nf-light-gray hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] font-medium rounded transition-colors ${
                      isActive ? 'text-white font-bold' : 'text-nf-light-gray hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Profile Avatar Button — opens dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="w-8 h-8 rounded bg-nf-red flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:ring-2 hover:ring-white/50 transition-all"
                title="Switch Profile"
              >
                PS
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {profileMenuOpen && (
                  <motion.div
                    className="absolute right-0 top-12 w-52 bg-nf-darker border border-nf-gray/30 rounded-lg shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 py-3 border-b border-nf-gray/20">
                      <p className="text-nf-text-muted text-xs uppercase tracking-wider">Current Profile</p>
                      <p className="text-white text-sm font-semibold mt-1 capitalize">{profile}</p>
                    </div>
                    <button
                      onClick={handleSwitchProfile}
                      className="w-full text-left px-4 py-3 text-sm text-nf-light-gray hover:text-white hover:bg-nf-gray/30 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Switch Profile
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Burger */}
            <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setDrawerOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Close dropdown on outside click */}
      {profileMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setProfileMenuOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-nf-darker z-[70] flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end p-5">
                <button onClick={() => setDrawerOpen(false)} className="text-white cursor-pointer">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col px-6">
                {navLinks.map((link) => {
                  if (link.external) {
                    return (
                      <a
                        key={link.label}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setDrawerOpen(false)}
                        className="py-4 text-lg font-medium border-b border-nf-gray/10 text-nf-light-gray hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setDrawerOpen(false)}
                      className={({ isActive }) =>
                        `py-4 text-lg font-medium border-b border-nf-gray/10 transition-colors ${
                          isActive ? 'text-nf-red' : 'text-nf-light-gray hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  );
                })}
                <button
                  onClick={() => { setDrawerOpen(false); handleSwitchProfile(); }}
                  className="py-4 text-lg font-medium text-left text-nf-red cursor-pointer border-b border-nf-gray/10"
                >
                  Switch Profile
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
