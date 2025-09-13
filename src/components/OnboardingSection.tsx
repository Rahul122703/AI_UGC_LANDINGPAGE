import { motion } from "framer-motion";
import { Package, Upload, Cpu, CheckCircle, BarChart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Package",
    desc: "Select a plan that fits your content needs and budget.",
    icon: <Package size={28} />,
  },
  {
    id: 2,
    title: "Share Brand Assets",
    desc: "Upload logos, colors, and preferences to match your style.",
    icon: <Upload size={28} />,
  },
  {
    id: 3,
    title: "AI-Powered Creation",
    desc: "Our AI generates high-converting videos and captions.",
    icon: <Cpu size={28} />,
  },
  {
    id: 4,
    title: "Human QC & Delivery",
    desc: "Every content piece goes through expert review before delivery.",
    icon: <CheckCircle size={28} />,
  },
  {
    id: 5,
    title: "Review & Scale",
    desc: "Evaluate results and scale with monthly content plans.",
    icon: <BarChart size={28} />,
  },
];

const OnboardingSection = () => {
  return (
    <section className="relative w-full py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6">
          Onboarding Flow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-12">
          Getting started with our agency is simple, seamless, and designed to
          help you scale faster.
        </motion.p>

        {/* Steps Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

          <div className="grid gap-10 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6`}>
                {/* Connector Dot */}
                <div className="hidden lg:flex flex-col items-center justify-center w-1/2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-xl transition-all text-center lg:text-left">
                  <h3 className="text-xl font-semibold mb-2">
                    Step {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-950"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default OnboardingSection;
