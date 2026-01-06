import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScheduleDemoHeroSection from '../components/ScheduleDemoHeroSection';
import ScheduleDemoFormSection from '../components/ScheduleDemoFormSection';
import ScheduleDemoInfoSection from '../components/ScheduleDemoInfoSection';

const ScheduleDemoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ScheduleDemoFormSection />
        <ScheduleDemoInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleDemoPage;
