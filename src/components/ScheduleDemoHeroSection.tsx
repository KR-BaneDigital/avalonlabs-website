import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar } from 'lucide-react';

const ScheduleDemoHeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      )
      .fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );
  }, []);

  return (
    <section className="relative min-h-[50vh] w-full overflow-hidden flex items-center bg-gradient-to-br from-secondary via-primary to-secondary">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-24 md:py-32">
        <div className="container mx-auto px-8 text-center">
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Calendar size={48} strokeWidth={1.5} className="text-white" />
          </div>
          <h1
            ref={headlineRef}
            className="text-h1 font-bold mb-6 text-white"
          >
            See Avalon Labs .ai in Action
          </h1>
          <p
            ref={subheadlineRef}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Schedule a personalized demo and discover how we can transform your lead generation in just 30 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemoHeroSection;
