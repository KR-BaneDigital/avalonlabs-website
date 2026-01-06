import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHeroSection from '../components/AboutHeroSection';
import AboutMissionSection from '../components/AboutMissionSection';
import AboutTeamSection from '../components/AboutTeamSection';
import AboutValuesSection from '../components/AboutValuesSection';
import AboutTimelineSection from '../components/AboutTimelineSection';
import AboutCTASection from '../components/AboutCTASection';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <AboutHeroSection />
        <AboutMissionSection />
        <AboutValuesSection />
        <AboutTimelineSection />
        <AboutTeamSection />
        <AboutCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
