import { motion } from "framer-motion";
import { Sparkles, Repeat, Video } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionSection = () => {
  const solutions = [
    {
      id: 1,
      icon: <Sparkles size={28} />,
      title: "Fast & Affordable",
      desc: "Creative UGC powered by AI + human polish, delivered 3x faster than manual editing.",
    },
    {
      id: 2,
      icon: <Repeat size={28} />,
      title: "Scalable Subscription",
      desc: "Predictable monthly cost with unlimited scalability as your brand grows.",
    },
    {
      id: 3,
      icon: <Video size={28} />,
      title: "Diverse Creative Styles",
      desc: "Short ads, lifestyle videos, and product demos tailored to your audience.",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6">
          Our Agency Solution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-12">
          Fast, affordable, and creative UGC powered by{" "}
          <span className="font-semibold">AI + human polish</span>.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md shadow-md hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12">
          <Link
            to="/get-started"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg sm:text-xl rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
            Get Started Today
          </Link>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-950"></div>
    </section>
  );
};

export default SolutionSection;
