import { motion } from "framer-motion";
import { DollarSign, Clock, Layers } from "lucide-react";

const PainPoint = () => {
  const painPoints = [
    {
      id: 1,
      icon: <DollarSign size={28} />,
      title: "Expensive Collaborations",
      desc: "Influencer partnerships can be costly, eating into your marketing budget.",
    },
    {
      id: 2,
      icon: <Clock size={28} />,
      title: "Time-Consuming Editing",
      desc: "Manual editing slows down content production and delays campaigns.",
    },
    {
      id: 3,
      icon: <Layers size={28} />,
      title: "Lack of Consistency",
      desc: "Brands struggle to maintain a steady flow of high-quality UGC.",
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
          The Problems Brands Face
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-12">
          We understand the pain points that make scaling with content
          difficult.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md shadow-md hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mx-auto mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-950"></div>
    </section>
  );
};

export default PainPoint;
