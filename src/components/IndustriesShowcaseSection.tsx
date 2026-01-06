import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { industries } from '../data/industries';

gsap.registerPlugin(ScrollTrigger);

const IndustriesShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-24 md:py-32 bg-neutral text-neutral-foreground"
    >
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized AI-powered lead solutions tailored for healthcare and senior care industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} ref={addToRefs}>
                <a href={`/industry/${industry.slug}`}>
                  <Card className="p-6 h-full bg-background border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="mb-4 p-3 bg-gradient-1 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} strokeWidth={1.5} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {industry.shortDescription}
                    </p>
                  </Card>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcaseSection;
