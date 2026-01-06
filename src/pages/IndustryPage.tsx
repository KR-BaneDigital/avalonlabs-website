import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndustryHeroSection from '../components/IndustryHeroSection';
import IndustryFeaturesSection from '../components/IndustryFeaturesSection';
import IndustryCTASection from '../components/IndustryCTASection';
import { industries } from '../data/industries';

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const industry = industries.find(ind => ind.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!industry) {
      navigate('/');
    }
  }, [industry, navigate]);

  if (!industry) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <IndustryHeroSection industry={industry} />
        <IndustryFeaturesSection industry={industry} />
        <IndustryCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default IndustryPage;
