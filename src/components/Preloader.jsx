import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset scroll to top so Home section is immediately shown when preloader cover opens
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#0B0B0B] z-[100000] flex items-center justify-center px-4"
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter"
          >
            {/* Ghost layer */}
            <div className="text-white/10 select-none">
              Abdul Rehman<span className="text-[#2563EB]/20">.</span>
            </div>

            {/* Animated reveal layer */}
            <motion.div
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap select-none"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
            >
              Abdul Rehman<span className="text-[#2563EB]">.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
