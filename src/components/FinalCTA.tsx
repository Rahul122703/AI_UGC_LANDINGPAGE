import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white text-center overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
          Start Creating{" "}
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            UGC That Converts
          </span>
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <Link
            to="/trial"
            className="px-8 py-4 bg-white text-blue-700 dark:bg-gray-800 dark:text-purple-400 text-lg sm:text-xl font-semibold rounded-xl shadow-md dark:shadow-lg hover:scale-105 hover:shadow-xl transition-all">
            Book Your Trial Now for ₹4,000
          </Link>
        </motion.div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400/20 dark:bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-400/25 dark:bg-blue-700/25 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 dark:from-black/30 to-transparent -z-10"></div>
    </section>
  );
};

export default FinalCTA;
