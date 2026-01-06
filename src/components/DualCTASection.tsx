import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DualCTASection = () => {
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

  const outcomes = [
    'Faster response times to time-sensitive inquiries',
    'Increased booked evaluations, tours, and admissions',
    'Reduced administrative burden on intake staff',
    'Fewer missed opportunities and lost capacity',
    'Clear visibility into lead handling and performance'
  ];

  return (
    <section
      id="dual-cta"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-br from-primary via-accent to-secondary text-white"
    >
      <div className="container mx-auto px-8">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold mb-6 text-white">
            Transform Your Lead Response
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Stop losing leads to slow response times. Our AI-powered system captures, qualifies, and converts inquiries automatically—so you can focus on providing exceptional care.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-h3 font-bold mb-8 text-white">Business Outcomes You'll See</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={24} strokeWidth={2} className="text-white flex-shrink-0 mt-1" />
                  <span className="text-lg text-white/90">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => navigate('/schedule-demo')}
            className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-8 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            Schedule Your Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DualCTASection;
