import { motion } from "framer-motion";
import { DollarSign, Zap, Instagram } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <DollarSign size={32} />,
      title: "70% Cheaper",
      desc: "Save big compared to expensive influencer collaborations.",
      accent: "from-green-400 to-emerald-600",
    },
    {
      id: 2,
      icon: <Zap size={32} />,
      title: "3x Faster Delivery",
      desc: "AI + human polish ensures speed without sacrificing quality.",
      accent: "from-yellow-400 to-orange-500",
    },
    {
      id: 3,
      icon: <Instagram size={32} />,
      title: "Made for D2C Brands",
      desc: "Perfect for brands scaling on Instagram Reels & YouTube Shorts.",
      accent: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6">
          Why{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Us
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-16">
          We combine AI efficiency with human creativity to deliver content that
          converts, at a fraction of the cost.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200/40 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all flex flex-col items-center text-center">
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${reason.accent} text-white shadow-lg mb-6`}>
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default WhyChooseUs;
