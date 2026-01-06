import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Industry } from '../data/industries';

interface IndustryHeroSectionProps {
  industry: Industry;
}

const IndustryHeroSection = ({ industry }: IndustryHeroSectionProps) => {
  const navigate = useNavigate();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );
  }, []);

  const goToContact = () => {
    navigate('/contact');
  };

  const Icon = industry.icon;

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={industry.heroImage}
          alt={`${industry.name} hero`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-24 md:py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="inline-block p-4 bg-primary/20 backdrop-blur-sm rounded-full mb-6">
              <Icon size={48} strokeWidth={1.5} className="text-white" />
            </div>
            <h1
              ref={headlineRef}
              className="text-h1 font-bold mb-6 text-white"
            >
              {industry.heroTitle}
            </h1>
            <p
              ref={descriptionRef}
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl"
            >
              {industry.heroDescription}
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
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
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-base px-8 py-6 transition-all duration-200"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHeroSection;
