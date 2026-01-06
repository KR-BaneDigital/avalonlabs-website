import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturesHeroSection from '../components/FeaturesHeroSection';
import FeaturesDetailsSection from '../components/FeaturesDetailsSection';
import FeaturesOutcomesSection from '../components/FeaturesOutcomesSection';
import FeaturesCTASection from '../components/FeaturesCTASection';

const FeaturesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <FeaturesHeroSection />
        <FeaturesDetailsSection />
        <FeaturesOutcomesSection />
        <FeaturesCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
