import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const AboutCTASection = () => {
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare facilities that trust Avalon Labs .ai to transform their lead generation. Let's work together to connect more families with the care they need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={goToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/schedule-demo')}
              variant="outline"
              className="text-base px-8 py-6 transition-all duration-200"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
