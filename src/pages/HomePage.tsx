import {
  HeroSection,
  PainPoint,
  PricingSection,
  SolutionSection,
  OnboardingSection,
  WhyChooseUs,
  FinalCTA,
} from "../components";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="painpoint">
        <PainPoint />
      </div>
      <div id="solution">
        <SolutionSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="onboarding">
        <OnboardingSection />
      </div>
      <div id="whyus">
        <WhyChooseUs />
      </div>
      <div id="finalcta">
        <FinalCTA />
      </div>
    </div>
  );
};

export default Home;
