import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const FeaturesCTASection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-8">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold mb-6 text-foreground">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how Avalon Labs .ai can transform your lead response and increase conversions.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/schedule-demo')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-8 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Schedule Your Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTASection;
