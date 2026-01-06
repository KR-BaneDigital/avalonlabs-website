import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ValuePropositionSection from '../components/ValuePropositionSection';
import IndustriesShowcaseSection from '../components/IndustriesShowcaseSection';
import HowItWorksSection from '../components/HowItWorksSection';
import DualCTASection from '../components/DualCTASection';
import SocialProofSection from '../components/SocialProofSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <IndustriesShowcaseSection />
        <HowItWorksSection />
        <DualCTASection />
        <SocialProofSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
