import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          id="hero-heading"          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Scale Your Shopify Brand with <br className="hidden md:block" />
          <span className="text-brand">AI-Powered UGC</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Affordable, high-converting videos & captions designed for{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">
            Instagram Reels, YouTube Shorts, and Ads.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
            Start Your Trial for Just ■4,000
          </a>
        </motion.div>
      </div>
    </section>
  );
}
