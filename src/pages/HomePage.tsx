import {
  HeroSection,
  PainPoint,
  PricingSection,
  SolutionSection,
} from "../components";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <HeroSection />
      <PainPoint />
      <SolutionSection />
      <PricingSection />
    </div>
  );
};

export default Home;
