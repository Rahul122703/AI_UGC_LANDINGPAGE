import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const platforms = ["Instagram Reels", "YouTube Shorts", "Ads"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center border border-none">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
          Scale Your Shopify Brand with <br className="hidden md:block" />
          <span className="text-blue-600 dark:text-purple-400">
            AI-Powered UGC
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-[50rem] 3xl mx-auto flex justify-center items-center gap-2  border border-none">
          Affordable, high-converting videos & captions designed for
          <span className="relative h-10 w-56 sm:w-64 md:w-72 lg:w-80 overflow-hidden inline-block border border-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-0 text-blue-600 dark:text-purple-400 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap border border-none">
                {platforms[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 dark:bg-purple-600 text-white font-semibold text-lg sm:text-xl md:text-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform">
            Start Your Trial for Just ₹4,000
          </a>
        </motion.div>
      </div>
    </section>
  );
}
