import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFormSection from '../components/ContactFormSection';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactInfoSection from '../components/ContactInfoSection';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
