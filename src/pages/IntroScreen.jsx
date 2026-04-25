/**
 * IntroScreen.jsx — Netflix-authentic intro with premium ta-dum sound.
 * Click → Sound + Red glow + Name animation → Fade out → Profile picker.
 */

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import netflixSound from '../assets/sounds/tudum.mp3';

/**
 * Play the real Netflix "ta-dum" sound file.
 */
function playNetflixTaDum() {
  try {
    const audio = new Audio(netflixSound);
    audio.volume = 1.0;
    audio.play();
  } catch (e) {
    console.warn('Audio playback failed', e);
  }
}

export default function IntroScreen({ onComplete }) {
  const [phase, setPhase] = useState('idle'); // idle | animating | fading
  const started = useRef(false);

  const startAnimation = useCallback(() => {
    if (started.current) return;
    started.current = true;
    playNetflixTaDum();
    setPhase('animating');
    setTimeout(() => setPhase('fading'), 3000);
    setTimeout(() => onComplete(), 4000);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center cursor-pointer select-none overflow-hidden"
      onClick={startAnimation}
      initial={{ opacity: 1 }}
      animate={phase === 'fading' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Radial glow */}
      <AnimatePresence>
        {phase !== 'idle' && (
          <motion.div
            className="absolute"
            style={{
              width: 800,
              height: 800,
              background: 'radial-gradient(circle, rgba(229,9,20,0.3) 0%, rgba(229,9,20,0.05) 40%, transparent 70%)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* Name */}
      {phase === 'idle' ? (
        <motion.p
          className="absolute bottom-20 text-nf-text-muted text-sm tracking-[4px] uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click Anywhere to Begin
        </motion.p>
      ) : (
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] text-nf-red uppercase"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: 400,
            textShadow: '0 0 40px rgba(229,9,20,0.6), 0 0 80px rgba(229,9,20,0.3), 0 4px 20px rgba(0,0,0,0.8)',
            WebkitTextStroke: '1px rgba(229,9,20,0.8)',
          }}
          initial={{ opacity: 0, scale: 0.4, letterSpacing: '-8px', filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, letterSpacing: '12px', filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          PRASHANT
        </motion.h1>
      )}

      {/* Skip button */}
      <button
        onClick={(e) => { e.stopPropagation(); onComplete(); }}
        className="absolute top-6 right-6 px-5 py-2 text-xs text-nf-text-muted border border-nf-gray/50 rounded-md hover:bg-nf-gray/30 transition-colors cursor-pointer tracking-wider"
      >
        SKIP →
      </button>
    </motion.div>
  );
}
