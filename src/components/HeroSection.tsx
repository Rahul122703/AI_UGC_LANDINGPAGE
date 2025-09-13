import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-12 ">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Animated headline */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Scale Your{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Shopify Brand
          </span>{" "}
          with AI-Powered UGC
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl lg:text-2xl max-w-3xl text-gray-700 dark:text-gray-300">
          Affordable, high-converting videos & captions designed for{" "}
          <span className="font-semibold">Instagram Reels</span>,{" "}
          <span className="font-semibold">YouTube Shorts</span>, and Ads.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8">
          <Link
            to="/trial"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-lg sm:text-xl rounded-xl shadow-lg hover:bg-blue-700 transition">
            Start Your Trial for Just ₹4,000
          </Link>
        </motion.div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-800 dark:to-gray-900"></div>
    </section>
  );
};

export default HeroSection;
