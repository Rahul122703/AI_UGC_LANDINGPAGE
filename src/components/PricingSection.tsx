import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Trial Pack",
      price: "₹4,000",
      type: "one-time",
      features: ["3 videos"],
    },
    {
      id: 2,
      name: "Starter Pack",
      price: "₹8,000",
      type: "per month",
      features: ["5 videos", "5 captions"],
    },
    {
      id: 3,
      name: "Growth Pack",
      price: "₹20,000",
      type: "per month",
      features: ["12 videos", "12 captions", "4 ad variants", "Strategy notes"],
      highlight: true, // Mark as popular
    },
    {
      id: 4,
      name: "Scale Pack",
      price: "₹45,000",
      type: "per month",
      features: ["30 videos", "10 ad variants", "Monthly strategy call"],
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6">
          Services & Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-12">
          Choose a plan that fits your brand’s growth stage.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-6 rounded-2xl backdrop-blur-md shadow-lg transition-all border ${
                plan.highlight
                  ? "bg-gradient-to-b from-blue-600/90 to-purple-600/90 text-white border-none scale-105"
                  : "bg-white/60 dark:bg-gray-800/70 border-gray-200/50 dark:border-gray-700/50"
              }`}>
              {plan.highlight && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-lg">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`text-2xl font-extrabold ${
                  plan.highlight
                    ? "text-white"
                    : "text-blue-600 dark:text-blue-400"
                }`}>
                {plan.price}
                <span className="text-sm font-medium ml-1">({plan.type})</span>
              </p>

              <ul className="mt-6 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      plan.highlight
                        ? "text-white/90"
                        : "text-gray-700 dark:text-gray-300"
                    }`}>
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full px-4 py-2 rounded-xl font-semibold shadow-md transition ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                }`}>
                {plan.highlight ? "Choose Growth" : "Choose Plan"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-950"></div>
    </section>
  );
};

export default PricingSection;
